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
  Filter,
  Sparkles,
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
  const [selectedTag, setSelectedTag] = useState<string>("All");

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
    let filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedTag !== "All") {
      filtered = filtered.filter((blog) => blog.tag === selectedTag);
    }

    setFilteredBlogs(filtered);
  }, [searchQuery, selectedTag, blogs]);

  const uniqueTags = [
    "All",
    ...Array.from(new Set(blogs.map((blog) => blog.tag))),
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-cyan-400 mx-auto mb-4" />
          <p className="text-cyan-200">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900">
        <div className="text-center">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-4">
            <p className="text-red-400 mb-4">{error}</p>
            <Button
              onClick={fetchBlogs}
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-teal-500/5 rounded-full blur-3xl bottom-20 right-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300 font-medium">
                Latest Articles
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-teal-200 bg-clip-text text-transparent">
                Explore My Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Insights, tutorials, and stories about web development and
              technology
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl border border-cyan-500/20 p-4 shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-4 py-3 w-full bg-slate-900/50 border-cyan-500/20 text-white placeholder:text-gray-500 focus:border-cyan-500/40 rounded-xl"
                  />
                </div>

                {/* Filter Button */}
                <Button className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-xl">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2 mt-4">
                {uniqueTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedTag === tag
                        ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
                        : "bg-slate-800/50 text-gray-400 hover:bg-slate-800/80 hover:text-cyan-300 border border-cyan-500/20"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-semibold">{blogs.length}</span>
              <span className="text-gray-400">Articles</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20">
              <TrendingUp className="w-5 h-5 text-teal-400" />
              <span className="text-white font-semibold">
                {filteredBlogs.length}
              </span>
              <span className="text-gray-400">Showing</span>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="container mx-auto px-4 pb-16">
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-12 max-w-md mx-auto">
                <Search className="w-16 h-16 mx-auto text-cyan-400/50 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  No blogs found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search query or filters
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <article
                  key={blog._id || index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <BookOpen className="w-16 h-16 text-cyan-400/30" />
                      </div>
                    )}
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-cyan-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                        <Tag className="w-3 h-3" />
                        {blog.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                      {blog.desc}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-cyan-500/10">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>5 min read</span>
                      </div>
                      {blog.createdAt && (
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-cyan-400" />
                          <span>
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Read More Button */}
                    <Link
                      href={`/blog/${blog._id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default BlogPage;
