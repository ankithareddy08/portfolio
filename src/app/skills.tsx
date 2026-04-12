"use client";

import { Typography } from "@material-tailwind/react";
import {
  SwatchIcon,
  RectangleGroupIcon,
  PuzzlePieceIcon,
  HashtagIcon,
  EyeIcon,
} from "@heroicons/react/24/solid";
import SkillCard from "@/components/skill-card";

const SKILLS = [
  {
    icon: SwatchIcon,
    title: "UI/UX & 3D",
    children:
      "UI/UX Design, Figma, Adobe XD, Google Stitch, Blender (3D Modeling). Certified UI/UX Designer.",
  },
  {
    icon: RectangleGroupIcon,
    title: "Front-End Development",
    children: "HTML, CSS, JavaScript, React, React Native.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Core Programming",
    children: "Python, C. Certified Python Essentials (Cisco).",
  },
  {
    icon: HashtagIcon,
    title: "Soft Skills",
    children:
      "Project Management, Creative Problem Solving, Entrepreneurship (EAP).",
  },
  {
    icon: EyeIcon,
    title: "Interests",
    children: "Gaming (Indoor/Outdoor), Creative Arts.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Bridging the gap between intuitive design and robust code. I
          specialize in crafting visually engaging UI/UX experiences and
          bringing them to life through responsive front-end development, from
          mobile applications to immersive digital environments.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
