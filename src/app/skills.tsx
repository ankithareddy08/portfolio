"use client";

import { Typography } from \"@material-tailwind/react\";
import {
  SwatchIcon,
  RectangleGroupIcon,
  PuzzlePieceIcon,
  HashtagIcon,
  EyeIcon,
} from \"@heroicons/react/24/solid\";
import { SkillCard } from \"@/components/skill-card\";

const SKILLS = [
  {
    icon: SwatchIcon,
    title: \"Languages & Core\",
    children: \"Python, C, JavaScript. Certified Python Essentials (Cisco).\", 
  },
  {
    icon: RectangleGroupIcon,
    title: \"Tools & 3D\",
    children: \"UI & UX Design, Figma, Adobe XD, Blender (3D Modeling).\", 
  },
  {
    icon: PuzzlePieceIcon,
    title: \"Web\",
    children: \"HTML, CSS, Responsive Dashboards (Weather & Culinary).\", 
  },
  {
    icon: HashtagIcon,
    title: \"Soft Skills\",
    children: \"Project Management, Creative Problem Solving, Entrepreneurship Awareness Programme (EAP).\", 
  },
  {
    icon: EyeIcon,
    title: \"Interests\",
    children: \"Gaming (indoor/outdoor), Creative Arts.\", 
  },
];

export function Skills() {
  return (
    <section className=\"px-8\">
      <div className=\"container mx-auto mb-20 text-center\">
        <Typography color=\"blue-gray\" className=\"mb-2 font-bold uppercase\">
          my skills
        </Typography>
        <Typography variant=\"h1\" color=\"blue-gray\" className=\"mb-4\">
          What I do
        </Typography>
        <Typography
          variant=\"lead\"
          className=\"mx-auto w-full !text-gray-500 lg:w-10/12\"
        >
          Crafting immersive experiences from metaverse to fintech, leveraging programming, design tools, and creative problem-solving.
        </Typography>
      </div>
      <div className=\"container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3\">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;

