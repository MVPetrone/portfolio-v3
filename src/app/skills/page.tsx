"use client";
import Navbar from "../components/NavBar"; // Import Navbar component
import { FaPython, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiSqlite, SiAirtable } from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";

const technicalSkills = [
  { name: "Python", icon: <FaPython className="text-[#FFD43B] text-4xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] text-4xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-4xl" /> },
  { name: "React", icon: <FaReact className="text-[#61DAFB] text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#339933] text-4xl" /> },
  { name: "SQL", icon: <SiSqlite className="text-[#003B57] text-4xl" /> },
  { name: "Git", icon: <FaGit className="text-[#F05032] text-4xl" /> },
  { name: "AI & Machine Learning", icon: <AiOutlineRobot className="text-[#0DCEDA] text-4xl" /> },
];

export default function Skills() {
  return (
    <>
      <Navbar /> {/* Include Navbar */}
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-[#0DCEDA] mb-8">
            My Skills
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {skill.icon}
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
