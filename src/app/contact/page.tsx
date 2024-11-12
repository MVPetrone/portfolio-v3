"use client";
import Navbar from "../components/NavBar"; // Import Navbar component
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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

export default function Contact() {
  return (
    <>
      <Navbar /> {/* Include Navbar */}
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
    </>
  );
}
