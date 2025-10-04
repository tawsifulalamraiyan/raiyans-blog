import Link from "next/link";
import { Github, Linkedin, Twitter, Heart, Sparkles } from "lucide-react";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function FooterSection() {
  const socials = [
    {
      icon: Github,
      href: "#",
      label: "GitHub",
      gradient:
        "from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      gradient:
        "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800",
    },
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      gradient: "from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAyIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="relative py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Logo Section */}
          <div className="text-center mb-12">
            <Link href="/" aria-label="go home" className="inline-block group">
              <div className="flex items-center gap-3 justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-teal-500 to-cyan-600 p-2.5 rounded-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Raiyan's Blog
                </h1>
              </div>
            </Link>
            <p className="mt-4 text-slate-400 max-w-md mx-auto">
              Crafting beautiful web experiences and sharing knowledge with the
              developer community.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group relative text-slate-400 hover:text-white font-medium transition-colors duration-300"
              >
                <span className="relative z-10">{link.title}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300`}
                ></div>
                <div
                  className={`relative bg-gradient-to-r ${social.gradient} p-4 rounded-2xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                >
                  <social.icon className="h-6 w-6 text-white" />
                </div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800/50"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-slate-950 px-4">
                <Heart className="h-5 w-5 text-teal-500 fill-teal-500 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-slate-400 text-sm">
              Made with{" "}
              <span className="text-teal-400 font-semibold">passion</span> and{" "}
              <span className="text-cyan-400 font-semibold">code</span>
            </p>
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Raiyan's Blog. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>
    </footer>
  );
}
