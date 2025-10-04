"use client";
import React from "react";
import {
  BookOpen,
  Coffee,
  Code,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 relative overflow-hidden pt-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl top-0 left-0 animate-pulse"></div>
        <div
          className="absolute w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-2xl top-1/3 right-1/4 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-teal-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyan-300/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-teal-300/40 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Badge */}
        <div className="group inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/10 backdrop-blur-md rounded-full border border-cyan-500/30 mb-8 hover:bg-cyan-500/15 hover:border-cyan-500/40 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
          <span className="text-sm text-cyan-200 font-medium">
            Welcome to my digital space
          </span>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>

        {/* Main heading with enhanced gradient */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-6 relative">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-teal-200 bg-clip-text text-transparent drop-shadow-2xl">
            Raiyan's Blog
          </span>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 blur-3xl -z-10"></div>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-cyan-100 text-center mb-4 max-w-2xl font-light">
          Thoughts on code, creativity, and everything in between
        </p>
        <div className="flex items-center gap-2 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-cyan-400 fill-cyan-400" />
          ))}
          <span className="text-sm text-gray-400 ml-2">
            Trusted by developers worldwide
          </span>
        </div>

        {/* Icon features with enhanced design */}
        <div className="flex flex-wrap gap-4 justify-center mb-14">
          <div className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="text-white font-medium">Development</span>
          </div>
          <div className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl border border-teal-500/20 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="p-2 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
              <BookOpen className="w-5 h-5 text-teal-400" />
            </div>
            <span className="text-white font-medium">Stories</span>
          </div>
          <div className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-xl border border-amber-500/20 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="p-2 bg-amber-500/10 rounded-lg group-hover:bg-amber-500/20 transition-colors">
              <Coffee className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-white font-medium">Life</span>
          </div>
        </div>

        {/* CTA Buttons with enhanced styling */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              Read Latest Posts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <button
            className="group px-8 py-4 bg-slate-800/50 backdrop-blur-md text-cyan-300 font-semibold rounded-xl border-2 border-cyan-500/30 hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
            onClick={() => {
              router.push("/about");
            }}
          >
            About Me
          </button>
        </div>

        {/* Scroll indicator with enhanced design */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="relative w-7 h-11 border-2 border-cyan-400/40 rounded-full flex justify-center shadow-lg shadow-cyan-500/20">
            <div className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400/60 whitespace-nowrap">
            Scroll down
          </div>
        </div>
      </div>
    </div>
  );
}
