"use client";
import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  User,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "raiyan@example.com",
      link: "mailto:raiyan@example.com",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhaka, Bangladesh",
      link: "#",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 123 456 789",
      link: "tel:+880123456789",
      gradient: "from-blue-500 to-indigo-600",
    },
  ];

  const socials = [
    {
      icon: Github,
      link: "https://github.com/tawsifulalamraiyan",
      label: "GitHub",
      color: "hover:text-slate-400",
    },
    {
      icon: Linkedin,
      link: "https://linkedin.com/n/tawsiful-alam-raiyan",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      link: "https://x.com/tawsifulalamraiyan",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-xl rounded-full border border-teal-500/30 shadow-lg shadow-teal-500/20 mb-4">
              <MessageSquare className="h-4 w-4 text-teal-400" />
              <span className="text-sm font-semibold text-teal-400">
                Let's Connect
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black">
              <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent drop-shadow-2xl">
                Get In
              </span>
              <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                Touch
              </span>
            </h1>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear
              from you. Drop me a message and I'll get back to you as soon as
              possible!
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="group relative block"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${info.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                      <div className="relative bg-slate-900/50 backdrop-blur-2xl rounded-2xl p-6 border border-slate-800/50 group-hover:border-teal-500/50 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 bg-gradient-to-br ${info.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-slate-400 mb-1">
                              {info.title}
                            </h3>
                            <p className="text-white font-medium">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links Card */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-2xl rounded-2xl p-6 border border-slate-800/50">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-teal-400" />
                      Follow Me
                    </h3>
                    <div className="flex gap-3">
                      {socials.map((social) => (
                        <a
                          key={social.label}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="group/social p-3 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-110"
                        >
                          <social.icon
                            className={`h-5 w-5 text-slate-400 transition-colors ${social.color}`}
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote Card */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-2xl rounded-2xl p-6 border border-slate-800/50">
                    <div className="text-4xl text-teal-400 mb-2">"</div>
                    <p className="text-slate-300 italic mb-4">
                      Great things are built through great collaboration. Let's
                      create something amazing together!
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center font-bold text-white">
                        R
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">
                          Raiyan
                        </div>
                        <div className="text-slate-400 text-xs">
                          Developer & Creator
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-slate-800/50">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-white mb-2">
                        Send Me a Message
                      </h2>
                      <p className="text-slate-400">
                        Fill out the form below and I'll respond within 24
                        hours.
                      </p>
                    </div>

                    <div onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Input */}
                      <div className="group/input">
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-slate-300 mb-2"
                        >
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within/input:text-teal-400 transition-colors" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div className="group/input">
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-slate-300 mb-2"
                        >
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within/input:text-teal-400 transition-colors" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Subject Input */}
                      <div className="group/input">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-semibold text-slate-300 mb-2"
                        >
                          Subject
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within/input:text-teal-400 transition-colors" />
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
                            placeholder="Project Inquiry"
                          />
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div className="group/input">
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-slate-300 mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-4 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project or idea..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={isSubmitted}
                        className="group/btn relative w-full overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-xl blur-xl opacity-50 group-hover/btn:opacity-75 transition-opacity"></div>
                        <div className="relative bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 rounded-xl px-8 py-4 flex items-center justify-center gap-3 group-hover/btn:scale-105 transition-transform duration-300 shadow-xl">
                          {isSubmitted ? (
                            <>
                              <CheckCircle className="h-6 w-6 text-white" />
                              <span className="text-white font-bold text-lg">
                                Message Sent!
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-white font-bold text-lg">
                                Send Message
                              </span>
                              <Send className="h-6 w-6 text-white group-hover/btn:translate-x-1 transition-transform" />
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-rose-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
              <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-3xl p-12 text-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30 rounded-3xl"></div>
                <div className="relative space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black text-white">
                    Prefer Email?
                  </h3>
                  <p className="text-lg text-white/90">
                    You can also reach me directly at
                  </p>
                  <a
                    href="mailto:raiyan@example.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-bold text-lg rounded-xl hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    <Mail className="h-6 w-6" />
                    raiyan@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
