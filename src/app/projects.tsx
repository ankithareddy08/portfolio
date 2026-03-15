"use client";

import ProjectCard from "@/components/project-card";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/cyberspace-project.png",
    title: "PROJECT CYBER SPACE (2022-2024)",
    desc: "Educational Metaverse with virtual university for real-time collaboration, live discussions, study notes, and video lectures.",
  },
  {
    img: "/image/final-dawn-project.png",
    title: "THE OPERATION FINAL DAWN (2024-2025)",
    desc: "Zombie survival-exploration game with complex AI pathfinding, time-sensitive inventory, and atmospheric world-building.",
  },
  {
    img: "/image/blog-1.svg",
    title: "SPENDIFY: FINTECH ANDROID APP (2024-2025)",
    desc: "Gamified mobile app for financial literacy and savings. Full lifecycle: UI/UX, backend logic, Android deployment.",
  },
  {
    img: "/image/blog2.svg",
    title: "MALWARE DETECTION VIA DEEP LEARNING (2023-2024)",
    desc: "CNN and LSTM model for Android malware detection. Scalable, high-accuracy system analyzing app features.",
  },
  {
    img: "/image/blog3.svg",
    title: "DASHBOARD ECOSYSTEMS (2023-2024)",
    desc: "Real-time Weather Reporter and Recipe Discovery web apps with API integration and responsive design.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          From metaverse platforms to AI security and fintech apps, my projects showcase full-stack skills in design, development, and deployment.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
