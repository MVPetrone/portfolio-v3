"use client";
import Navbar from "../_components/NavBar"; // Import the Navbar component

const projects = [
  {
    title: "SwiftBot",
    description:
      "A robot programmed to move in various shapes based on QR codes. Tracks elapsed time and saves states in text files.",
    technologies: ["Python", "Robotics"],
    github: "https://github.com/MVPetrone/swiftbot",
  },
  {
    title: "AI 15 Puzzle",
    description:
      "An AI program that solves the classic 15-puzzle game using past moves and percentage completion to optimize performance.",
    technologies: ["Python", "Reinforcement Learning"],
    github: "https://github.com/MVPetrone/ai-15-puzzle",
  },
  {
    title: "Stock Market Game",
    description:
      "A simulation of the stock market using random number algorithms and SQLite3 for database management, visualized as graphs.",
    technologies: ["Python", "SQLite3"],
    github: "https://github.com/MVPetrone/Stock-Universe-Game-v1",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar/> {/* Include the Navbar */}
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-[#0DCEDA] mb-8">
            My Projects
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4">
                  <h3 className="font-medium text-gray-700">Technologies:</h3>
                  <ul className="list-disc list-inside">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="text-gray-500">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#0DCEDA] px-4 py-2 rounded-lg hover:bg-[#0BBCC5] transition duration-300"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
