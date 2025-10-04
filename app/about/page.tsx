"use client";
import React from "react";
import {
  Code,
  Rocket,
  Heart,
  Github,
  Linkedin,
  Twitter,
  Mail,
  BookOpen,
  Coffee,
  Zap,
  Sparkles,
  Award,
  Target,
  Users,
} from "lucide-react";
import Skill from "../layouts/Skills";
import Image from "next/image";

import me from "../assets/me.png";

const AboutPage = () => {
  const skills = [
    {
      name: "React & Next.js",
      level: 90,
      color: "from-cyan-400 via-blue-500 to-indigo-500",
    },
    {
      name: "TypeScript",
      level: 85,
      color: "from-blue-400 via-indigo-500 to-purple-500",
    },
    {
      name: "Node.js",
      level: 80,
      color: "from-green-400 via-teal-500 to-cyan-500",
    },
    {
      name: "UI/UX Design",
      level: 75,
      color: "from-purple-400 via-pink-500 to-rose-500",
    },
  ];

  const interests = [
    {
      icon: Code,
      title: "Coding",
      desc: "Building elegant solutions",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: BookOpen,
      title: "Learning",
      desc: "Always exploring new tech",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Coffee,
      title: "Coffee",
      desc: "Fuel for creativity",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Creating impactful projects",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  const achievements = [
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "1K+", label: "Blog Readers" },
    { icon: Target, value: "3+", label: "Years Experience" },
  ];

  const socials = [
    { icon: Github, link: "#", label: "GitHub", color: "hover:bg-slate-700" },
    {
      icon: Linkedin,
      link: "#",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    { icon: Twitter, link: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Mail, link: "#", label: "Email", color: "hover:bg-teal-600" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Profile Image with 3D Effect */}
              <div className="relative group perspective">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-[3rem] opacity-20 blur-2xl"></div>
                  <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 rounded-[3rem] flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 shadow-2xl shadow-cyan-500/50 border-4 border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[3rem]"></div>
                    <div className="relative text-9xl font-black text-white drop-shadow-2xl overflow-hidden">
                      <Image src={me} height={440} width={500} alt="Raiyan" />
                    </div>
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-3 shadow-xl animate-bounce">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="flex-1 text-center lg:text-left space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-full border border-teal-500/30 shadow-lg shadow-teal-500/20">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-teal-400">
                      Available for Opportunities
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
                    <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-2xl">
                      Hi, I'm
                    </span>
                    <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                      Raiyan
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl">
                    A{" "}
                    <span className="text-teal-400 font-semibold">
                      passionate developer
                    </span>{" "}
                    crafting
                    <span className="text-cyan-400 font-semibold">
                      {" "}
                      beautiful web experiences
                    </span>{" "}
                    with modern technologies. Turning complex problems into
                    elegant solutions.
                  </p>
                </div>

                {/* Achievement Stats */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {achievements.map((achievement) => (
                    <div key={achievement.label} className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl px-6 py-4 border border-slate-700/50 group-hover:border-teal-500/50 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <achievement.icon className="h-8 w-8 text-teal-400" />
                          <div>
                            <div className="text-2xl font-bold text-white">
                              {achievement.value}
                            </div>
                            <div className="text-sm text-slate-400">
                              {achievement.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 justify-center lg:justify-start">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      className={`group relative p-4 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-110 ${social.color} overflow-hidden`}
                      aria-label={social.label}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/20 group-hover:to-cyan-500/20 transition-all"></div>
                      <social.icon className="relative h-6 w-6 text-slate-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Cards Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Journey Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-10 border border-slate-800/50 group-hover:border-teal-500/50 transition-all duration-500 h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl"></div>
                  <div className="relative space-y-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 rounded-3xl shadow-2xl shadow-teal-500/50 group-hover:scale-110 transition-transform duration-500">
                      <Rocket className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">
                      My Journey
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      Started my coding journey in 2020, driven by an insatiable
                      curiosity and passion for technology. Since then, I've
                      been building innovative projects, mastering new
                      frameworks, and sharing knowledge through my blog to help
                      others grow in their development journey.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Node.js"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-slate-800/50 text-teal-400 rounded-xl text-sm font-medium border border-slate-700/50"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-10 border border-slate-800/50 group-hover:border-cyan-500/50 transition-all duration-500 h-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl"></div>
                  <div className="relative space-y-6">
                    <div className="inline-flex p-4 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 rounded-3xl shadow-2xl shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-500">
                      <Heart className="h-10 w-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white">What I Do</h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                      I create stunning, user-friendly web applications with a
                      laser focus on performance, accessibility, and beautiful
                      design. Writing in-depth tutorials, sharing insights, and
                      mentoring aspiring developers to help them succeed in the
                      ever-evolving tech landscape.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "UI/UX",
                        "Performance",
                        "Accessibility",
                        "Teaching",
                      ].map((focus) => (
                        <span
                          key={focus}
                          className="px-4 py-2 bg-slate-800/50 text-cyan-400 rounded-xl text-sm font-medium border border-slate-700/50"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <Skill />
        </section>

        {/* Interests Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                What I Love
              </h2>
              <p className="text-xl text-slate-400">
                Passions that drive me forward
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={interest.title}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${interest.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700`}
                  ></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 border border-slate-800/50 group-hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-4 h-full">
                    <div className="text-center space-y-4">
                      <div
                        className={`inline-flex p-5 bg-gradient-to-br ${interest.gradient} rounded-3xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <interest.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {interest.title}
                      </h3>
                      <p className="text-slate-400">{interest.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-700 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 rounded-[3rem] p-12 md:p-16 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl"></div>

                <div className="relative text-center space-y-8">
                  <div className="inline-flex p-4 bg-white/10 backdrop-blur-xl rounded-3xl">
                    <Sparkles className="h-12 w-12 text-white animate-pulse" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-2xl">
                    Let's Create Something Amazing
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                    Have a project in mind? Let's collaborate and bring your
                    vision to life with cutting-edge technology!
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-600 font-bold text-lg rounded-2xl hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/50 group"
                  >
                    <span>Get In Touch</span>
                    <Mail className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
