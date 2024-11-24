"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname for App Directory

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const getLinkClasses = (path: string) =>
    pathname === path
      ? "py-4 px-2 text-[#0DCEDA] border-b-4 border-[#0DCEDA] font-semibold cursor-pointer"
      : "py-4 px-2 text-gray-500 hover:text-[#0DCEDA] transition duration-300 cursor-pointer";

  return (
    <nav className="bg-white shadow-xl">
      <div className="w-full px-4 md:px-0">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/">
              <div className="py-4 px-0 cursor-pointer">
                <img src="mvp logo (new) (trans).png" alt="Logo" className="h-8 w-32" />
              </div>
            </Link>
          </div>

          {/* Primary Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <div className={getLinkClasses("/")}>Home</div>
            </Link>
            <Link href="/projects">
              <div className={getLinkClasses("/projects")}>Projects</div>
            </Link>
            <Link href="/experience">
              <div className={getLinkClasses("/experience")}>Experience</div>
            </Link>
            <Link href="/skills">
              <div className={getLinkClasses("/skills")}>Skills</div>
            </Link>
            <Link href="/contact">
              <div className={getLinkClasses("/contact")}>Contact</div>
            </Link>
          </div>

          {/* Secondary Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/MVPetrone?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-[#0DCEDA] hover:text-white transition duration-300 cursor-pointer"
            >
              GitHub
            </a>
            <Link href="mailto:mvlpetrone@gmail.com">
              <div className="py-2 px-2 font-medium text-white bg-[#0DCEDA] rounded hover:bg-[#0BBCC5] transition duration-300 cursor-pointer">
                Email Me
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={handleMenuToggle} className="outline-none">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-[#0DCEDA]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <ul>
            <li>
              <Link href="/">
                <div className={getLinkClasses("/")}>Home</div>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <div className={getLinkClasses("/projects")}>Projects</div>
              </Link>
            </li>
            <li>
              <Link href="/experience">
                <div className={getLinkClasses("/experience")}>Experience</div>
              </Link>
            </li>
            <li>
              <Link href="/skills">
                <div className={getLinkClasses("/skills")}>Skills</div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className={getLinkClasses("/contact")}>Contact</div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
