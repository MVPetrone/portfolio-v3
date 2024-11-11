"use client";
import Navbar from "./components/NavBar"// Import the Navbar
import WelcomeSection from "./components/WelcomeSection"// Import the Welcome Section
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar /> {/* Include the Navbar */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <WelcomeSection />

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            “Striving to bridge the gap between human potential and technology
            through innovative solutions.”
          </p>
        </div>
      </div>
    </>
  );
}
