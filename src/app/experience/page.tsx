"use client";
import Navbar from "../components/NavBar"; // Import Navbar component

const experiences = [
  {
    role: "Product Manager",
    company: "Websprint, London",
    duration: "Part-time (Active)",
    description: `
      - Arranged meetings with clients interested in web app creation, evaluating their proposals.
      - Created user stories for designers and developers based on client needs.
      - Developed standardised business operations and templates, improving productivity through tools like Notion and Slack.
    `,
  },
  {
    role: "AI Prompt Evaluator",
    company: "Outlier (Online)",
    duration: "Freelance (Active)",
    description: `
      - Worked closely with AI models to provide feedback on prompts and responses.
      - Trained models to enhance clarity, accuracy, and safety.
      - Gained experience coding and refining algorithmic procedures to improve training processes.
    `,
  },
  {
    role: "Engineer",
    company: "Possum, Aylesbury",
    duration: "Work Experience",
    description: `
      - Gained hands-on experience soldering circuits and understanding hardware components.
      - Conducted an interview with a company manager.
      - Explored server rooms, office spaces, and computer terminals.
      - Learned Java programming from an experienced engineer.
    `,
  },
  {
    role: "Technology Intern",
    company: "Bright Network (Online)",
    duration: "Internship Experience",
    description: `
      - Gained foundational insights into technology practices in a virtual internship setting.
      - Engaged with experienced professionals and like-minded peers, improving my problem-solving and collaboration skills.
      - Clarified my career aspirations in the technology sector, strengthening my interest in AI and software development.
    `,
  },
  {
    role: "Steward",
    company: "OSS, Twickenham Stadium",
    duration: "Part-time (Active)",
    description: `
      - Ensured the smooth operation of events, providing customer service and managing crowd flow.
      - Provided exceptional customer service by assisting event attendees and addressing their inquiries.
      - Collaborated with team members to efficiently handle high-pressure situations.
    `,
  },
];

export default function Experience() {
  return (
    <>
      <Navbar /> {/* Include Navbar */}
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-[#0DCEDA] mb-8">
            Professional Experience
          </h1>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {experience.role}
                </h2>
                <h3 className="text-xl text-gray-700">{experience.company}</h3>
                <p className="text-gray-500">{experience.duration}</p>
                <p className="text-gray-600 mt-2 whitespace-pre-line">
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
