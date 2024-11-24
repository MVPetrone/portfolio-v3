"use client"
import { useEffect, useState } from "react"
import Navbar from "./_components/NavBar"
import Link from "next/link"

import { FaPython, FaReact, FaNodeJs, FaGit, FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa"
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiSqlite, SiAirtable } from "react-icons/si"
import { AiOutlineRobot } from "react-icons/ai"

const contactMethods = [
  {
    name: "Email",
    href: "mailto:mvlpetrone@gmail.com",
    icon: <FaEnvelope className="text-[#0DCEDA] text-4xl" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/MVPetrone",
    icon: <FaGithub className="text-gray-800 text-4xl" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/michaelvincenzopetrone",
    icon: <FaLinkedin className="text-[#0077B5] text-4xl" />,
  },
];

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

export default function Home() {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    setTitleVisible(true); // Trigger the title fade-in animation on load
  }, []);

  return (
    <>
      <Navbar /> {/* Include the Navbar */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        
        {/* Massive Title Section */}
        <div className={`w-full text-center mt-12 transition-opacity duration-500 ${titleVisible ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-7xl font-extrabold text-[#0DCEDA] whitespace-nowrap my-32">
            Michael Vincenzo Petrone
          </h1>
        </div>

        {/* Welcome Section */}
        <div className="max-w-3xl text-center p-6 bg-white shadow-lg rounded-lg">
          <p className="text-gray-600 text-lg">
            About me: A passionate software engineer with a focus on AI and full-stack development. Explore my journey, skills, and projects.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <Link href="/projects">
              <div className="px-6 py-3 text-white bg-[#0DCEDA] rounded-lg hover:bg-[#0BBCC5] transition duration-300 cursor-pointer">
                View Projects
              </div>
            </Link>
            <Link href="/contact">
              <div className="px-6 py-3 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300 cursor-pointer">
                Contact Me
              </div>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            “Striving to bridge the gap between human potential and technology
            through the use of AI and endless ambition”
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-100 py-10">
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

        {/* Contact Section */}
        <div className="min-h-screen bg-gray-100 py-10">
          <div className="max-w-5xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-center text-[#0DCEDA] mb-8">
              Contact Me
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  {method.icon}
                  <h3 className="text-lg font-semibold text-gray-800 mt-4">
                    {method.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
