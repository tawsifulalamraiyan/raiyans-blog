"use client";
import React from "react";
import { DiMysql } from "react-icons/di";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaJava,
  FaMobileAlt,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { RiSupabaseFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
  SiKotlin,
  SiAndroidstudio,
  SiVercel,
  SiSupabase,
  SiExpress,
  SiFastapi,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

type Skill = {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
};

type Category = {
  title: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        level: 90,
        icon: <FaReact />,
        color: "from-cyan-400 to-blue-500",
      },
      {
        name: "Next.js",
        level: 85,
        icon: <SiNextdotjs />,
        color: "from-gray-700 to-black",
      },
      {
        name: "TypeScript",
        level: 80,
        icon: <SiTypescript />,
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "Tailwind CSS",
        level: 85,
        icon: <SiTailwindcss />,
        color: "from-teal-400 to-cyan-500",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        level: 85,
        icon: <FaNodeJs />,
        color: "from-green-400 to-emerald-600",
      },
      {
        name: "Expressjs",
        level: 85,
        icon: <SiExpress />,
        color: "from-green-400 to-emerald-600",
      },
      {
        name: "Fastapi",
        level: 85,
        icon: <SiFastapi />,
        color: "from-green-400 to-emerald-600",
      },
      {
        name: "Fastapi",
        level: 85,
        icon: <SiFastapi />,
        color: "from-green-400 to-emerald-600",
      },
      {
        name: "Supabase",
        level: 75,
        icon: <RiSupabaseFill />,
        color: "from-yellow-400 to-orange-500",
      },
      {
        name: "Firebase",
        level: 75,
        icon: <SiFirebase />,
        color: "from-yellow-400 to-orange-500",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        level: 90,
        icon: <SiMongodb />,
        color: "from-green-500 to-emerald-700",
      },
      {
        name: "PostgreSQL",
        level: 80,
        icon: <SiPostgresql />,
        color: "from-sky-500 to-blue-700",
      },
      {
        name: "MySql",
        level: 85,
        icon: <DiMysql />,
        color: "from-amber-500 to-amber-700",
      },
      {
        name: "SQL",
        level: 70,
        icon: <FaDatabase />,
        color: "from-gray-400 to-slate-600",
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        level: 85,
        icon: <FaPython />,
        color: "from-yellow-400 to-blue-500",
      },
      {
        name: "Java",
        level: 80,
        icon: <FaJava />,
        color: "from-red-500 to-orange-600",
      },
    ],
  },
  {
    title: "Mobile",
    skills: [
      {
        name: "Android",
        level: 70,
        icon: <SiAndroidstudio />,
        color: "from-green-500 to-green-700",
      },
      {
        name: "Kotlin",
        level: 65,
        icon: <SiKotlin />,
        color: "from-purple-500 to-pink-500",
      },
      {
        name: "React Native",
        level: 85,
        icon: <TbBrandReactNative />,
        color: "from-indigo-500 to-blue-600",
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        level: 90,
        icon: <FaGitAlt />,
        color: "from-orange-500 to-red-600",
      },
      {
        name: "Docker",
        level: 75,
        icon: <FaDocker />,
        color: "from-sky-400 to-blue-500",
      },
      {
        name: "Vercel",
        level: 80,
        icon: <SiVercel />,
        color: "from-gray-800 to-black",
      },
    ],
  },
];

const Skill = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-400">
            Technologies I love working with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/50 backdrop-blur-2xl rounded-3xl p-8 border border-slate-800/50 shadow-2xl space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3 text-white text-lg font-semibold">
                        <span className="text-2xl">{skill.icon}</span>
                        {skill.name}
                      </div>
                      <span className="text-cyan-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`absolute h-full left-0 bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
