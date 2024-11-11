"use client";
import Link from "next/link";

const WelcomeSection: React.FC = () => {
  return (
    <div className="max-w-3xl text-center p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-[#0DCEDA]">
        Welcome to My Portfolio
      </h1>
      <p className="text-gray-600 mt-4 text-lg">
        I'm Michael Vincenzo Petrone, a passionate software engineer with a
        focus on AI and full-stack development. Explore my journey, skills,
        and projects.
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
  );
};

export default WelcomeSection;
