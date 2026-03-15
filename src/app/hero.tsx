"use client";

import Image from \"next/image\";
import { Input, Button, Typography } from \"@material-tailwind/react\";
import { getImagePrefix } from \"../../utils/utils\";

function Hero() {
  return (
    <header className=\"bg-white p-8\">
      <div className=\"container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2\">
        <div className=\"row-start-2 lg:row-auto\">
          <Typography
            variant=\"h1\"
            color=\"blue-gray\"
            className=\"mb-4 lg:text-5xl !leading-tight text-3xl\"
          >
            Hello, I&apos;m Ankitha Reddy Atukula - UI/UX Designer
          </Typography>
          <Typography
            variant=\"lead\"
            className=\"mb-4 !text-gray-500 md:pr-16 xl:pr-28\"
          >
            To leverage my passion for creativity and front-end design as a UI/UX Designer, delivering intuitive and visually engaging user experiences. Committed to continuous learning and exploring innovative design solutions that drive user satisfaction and business success.
          </Typography>
          <div className=\"grid\">
            <Typography
              variant=\"small\"
              className=\"mb-2 text-gray-900 font-medium\">
              Your email
            </Typography>
            <div className=\"mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row\">
              <Input color=\"gray\" label=\"ankithareddy0804@gmail.com\" size=\"lg\" />
              <Button color=\"gray\" className=\"w-full px-4 md:w-[12rem]\">
                Get Started
              </Button>
            </div>
          </div>
          <Typography variant=\"small\" className=\"font-normal !text-gray-500\">
            Read my {` `}
            <a href=\"#\" className=\"font-medium underline transition-colors\">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt=\"team work\"
          src=\"/image/avatar1.jpg\"
          className=\"h-[36rem] w-full rounded-xl object-cover\"
        />
      </div>
    </header>
  );
}

export default Hero;

