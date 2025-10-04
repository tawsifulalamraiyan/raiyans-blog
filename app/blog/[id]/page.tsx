"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  Share2,
  Loader2,
  BookOpen,
  User,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Blog {
  _id: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
  createdAt?: string;
  author?: string;
  views?: number;
}

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/getblog/${params.id}`);
      setBlog(res.data.blog || res.data);

      // Fetch related blogs (same tag)
      if (res.data.blog?.tag || res.data.tag) {
        const allBlogsRes = await axios.get("/api/getblog");
        const allBlogs = allBlogsRes.data.blogs || allBlogsRes.data;
        const related = allBlogs
          .filter(
            (b: Blog) =>
              b.tag === (res.data.blog?.tag || res.data.tag) &&
              b._id !== params.id
          )
          .slice(0, 3);
        setRelatedBlogs(related);
      }
    } catch (error) {
      console.error(error);
      setError("Failed to load blog");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.desc,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Share failed", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const formatDate = (dateString: string) => {
    if (!mounted) return ""; // Don't render date until mounted
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Blog not found"}</p>
          <Button onClick={() => router.push("/blog")}>Back to Blogs</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Navigation */}
      <div className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => router.push("/blog")}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Button>
        </div>
      </div>

      {/* Hero Image Section */}
      <section className="relative h-[400px] md:h-[500px] bg-gray-900">
        {blog.image ? (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-teal-600 to-cyan-600">
            <BookOpen className="w-32 h-32 text-white opacity-50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Floating Tag */}
        <div className="absolute top-8 left-8">
          <span className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
            <Tag className="w-4 h-4" />
            {blog.tag}
          </span>
        </div>
      </section>

      {/* Main Content */}
      <article className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Content Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 pb-6 mb-6 border-b dark:border-gray-700">
              {blog.author && (
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{blog.author}</span>
                </div>
              )}

              {blog.createdAt && mounted && (
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              )}

              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Clock className="w-5 h-5" />
                <span>5 min read</span>
              </div>

              {blog.views && (
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Eye className="w-5 h-5" />
                  <span>{blog.views} views</span>
                </div>
              )}

              {/* Share Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-auto gap-2"
              >
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {blog.desc}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-12 pt-8 border-t dark:border-gray-700">
              <div className="flex gap-4">
                <Button
                  onClick={() => router.push("/blog")}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Read More Articles
                </Button>
                <Button variant="outline" onClick={handleShare}>
                  Share This Article
                </Button>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedBlogs.length > 0 && (
            <section className="mt-16 mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog._id}
                    href={`/blog/${relatedBlog._id}`}
                    className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-40 bg-gray-200 dark:bg-gray-700">
                      {relatedBlog.image ? (
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <BookOpen className="w-12 h-12 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <span className="inline-block bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-semibold px-2 py-1 rounded mb-2">
                        {relatedBlog.tag}
                      </span>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                        {relatedBlog.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {relatedBlog.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
};

export default BlogDetailPage;
