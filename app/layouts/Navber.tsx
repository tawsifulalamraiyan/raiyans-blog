"use client";

import { ModeToggle } from "@/components/Themetogglebtn";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient overlay with blur */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-slate-50/80 to-white/80 dark:from-slate-950/80 dark:via-slate-900/80 dark:to-slate-950/80 backdrop-blur-2xl border-b border-slate-200/20 dark:border-slate-700/20 shadow-lg shadow-slate-200/50 dark:shadow-slate-950/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with icon */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-2 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Raiyan's Blog
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.link}
                className="relative px-5 py-2.5 text-slate-700 dark:text-slate-300 font-medium rounded-xl transition-all duration-300 hover:text-teal-600 dark:hover:text-teal-400 group overflow-hidden"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:w-3/4 transition-all duration-300"></div>
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l border-slate-300 dark:border-slate-700">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              {isOpen ? (
                <X className="relative h-5 w-5 text-slate-700 dark:text-slate-300" />
              ) : (
                <Menu className="relative h-5 w-5 text-slate-700 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            isOpen
              ? "max-h-80 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="space-y-2 pt-4">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="block px-5 py-3 text-slate-700 dark:text-slate-300 font-medium rounded-xl bg-slate-100/50 dark:bg-slate-800/50 hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-cyan-500/10 border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-500/30 dark:hover:border-teal-500/30 transition-all duration-300 transform hover:translate-x-1"
                style={{
                  animation: isOpen
                    ? `slideIn 0.3s ease-out ${index * 50}ms both`
                    : "none",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
