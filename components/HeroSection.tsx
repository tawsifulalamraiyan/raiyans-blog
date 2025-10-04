import React from "react";
import { BookOpen, Coffee, Code, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-sm text-white font-medium">
            Welcome to my digital space
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
          Raiyan's Blog
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-purple-200 text-center mb-12 max-w-2xl">
          Thoughts on code, creativity, and everything in between
        </p>

        {/* Icon features */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <Code className="w-5 h-5 text-blue-300" />
            <span className="text-white">Development</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <BookOpen className="w-5 h-5 text-purple-300" />
            <span className="text-white">Stories</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <Coffee className="w-5 h-5 text-amber-300" />
            <span className="text-white">Life</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            Read Latest Posts
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            About Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
