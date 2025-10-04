"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  TrendingUp,
  BookOpen,
  Loader2,
} from "lucide-react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Blog {
  _id: string;
  title: string;
  desc: string;
  image: string;
  tag: string;
  createdAt?: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/getblog");
      setBlogs(res.data.blogs || res.data);
      setFilteredBlogs(res.data.blogs || res.data);
    } catch (error) {
      console.error(error);
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchQuery, blogs]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={fetchBlogs}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Tech Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Discover Amazing Stories
            </h1>
            <p className="text-xl text-teal-50 mb-8">
              Explore insights, tutorials, and ideas from our community
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search blogs..."
                className="pl-12 pr-4 py-6 text-lg bg-white dark:bg-gray-800 border-0 shadow-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: BookOpen, label: "Articles", value: blogs.length },
            {
              icon: TrendingUp,
              label: "Categories",
              value: new Set(blogs.map((b) => b.tag)).size,
            },
            { icon: Clock, label: "Min Read", value: "5" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-teal-600" />
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 py-16">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No blogs found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search query
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <article
                key={blog._id || index}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <BookOpen className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  {/* Tag Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <Tag className="w-3 h-3" />
                      {blog.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {blog.desc}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                    {blog.createdAt && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Read More Button */}
                  <Link
                    href={`/blog/${blog._id}`}
                    className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default BlogPage;
