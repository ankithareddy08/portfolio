"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  AcademicCapIcon,
  TrophyIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components/resume-item";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "B.Tech Computer Science & Engineering (2022–2026, Sree Chaitanya Institute, 79%). Telangana Board XII (88%), X (100%).",
  },
  {
    icon: TrophyIcon,
    children: "Certifications: Python Essentials (Cisco), Data Analytics (Cisco), Entrepreneurship Awareness Programme (EAP), Certified UI/UX Designer. Hackathons: Gemini Academy, Amazon AWS Game Dev, Flipkart Grid.",
  },
  {
    icon: ChartBarIcon,
    children: "Skills: Python, C, JavaScript, UI/UX (Figma, Blender), HTML/CSS, Project Management.",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            B.Tech CSE student with strong foundation in programming, UI/UX design, and full project lifecycle. Experienced in metaverse, game dev, AI/ML, fintech, and web apps.
          </Typography>
          <a href="/Ankitha Resume----final.(U).pdf" download>
            <Button
              variant="text"
              color="gray"
              className="flex items-center gap-2"
            >
              Download Resume
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-gray-900"
              />
            </Button>
          </a>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
