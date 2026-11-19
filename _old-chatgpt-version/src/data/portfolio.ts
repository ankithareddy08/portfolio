export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  role: string;
  summary: string;
  accent: string;
  visual: 'orian' | 'reqsy' | 'pixelpeek' | 'catercore' | 'stevie' | 'tracking';
  featured: boolean;
  stack: string[];
  links: ProjectLink[];
  sections: { title: string; body: string[] }[];
};

export const profile = {
  name: 'Ankitha Reddy Atukula',
  title: 'AI Product Engineer & Full-Stack Developer',
  location: 'Hyderabad, Telangana',
  intro: 'I design and build AI products, from the first interface to the model and the systems behind it.',
  about: [
    'I like the part of building software where design and engineering meet. On Orian Builder that meant figuring out how to make local image and 3D generation feel like part of a creative workflow. At Flashback Labs it meant turning model outputs into research a founder could read, question, and follow back to its source.',
    'I work across Figma, React, and Python, and I enjoy following a problem all the way from an early prototype to the details that make it usable on a real device.',
  ],
  email: 'ankithareddy0804@gmail.com',
  github: 'https://github.com/ankithareddy08',
  linkedin: 'https://www.linkedin.com/in/ankitha-reddy-2a15862ab',
  resume: '/ankitha-reddy-atukula-resume.pdf',
  education: [
    {
      qualification: 'B.Tech in Computer Science & Engineering',
      school: 'Sree Chaitanya Institute of Technological Sciences',
      dates: '2022–2026',
      result: '79%',
    },
    {
      qualification: 'Class X and Class XII',
      school: 'Telangana State Board',
      dates: '2019–2022',
      result: 'Class XII · 88% | Class X · 100%',
    },
  ],
};

export const skills = [
  {
    name: 'AI & local models',
    items: ['LLM orchestration', 'OpenAI, Claude & Gemini', 'Gemini Live', 'Hugging Face & Diffusers', 'PyTorch', 'GGUF quantization'],
  },
  {
    name: 'Full-stack & mobile',
    items: ['React & Next.js', 'React Native', 'TypeScript', 'Electron', 'Node.js', 'Python & FastAPI', 'PostgreSQL'],
  },
  {
    name: 'Product design & delivery',
    items: ['Figma', 'Prototyping', 'Design systems', 'Dashboard UX', 'Git & GitHub', 'Vercel', 'AWS & Google Cloud'],
  },
];

export const certifications = [
  'Certified UI/UX Designer',
  'Cisco Networking Academy · Python Essentials and Data Analytics Essentials',
  'Google Gemini Academy',
  'Entrepreneurship Awareness Programme',
];

export const experience = {
  organization: 'Flashback Labs',
  role: 'Software Engineer Intern',
  year: '2026',
  duration: 'Six months',
  summary: 'Worked with the founders on product design, full-stack development, model integration, QA, and deployment. I built tools for startup research, catering operations, awards search, and link attribution.',
  projects: ['reqsy-ai', 'catercore', 'stevie-intel', 'link-tracker'],
};

export const projects: Project[] = [
  {
    slug: 'orian-builder',
    title: 'Orian Builder',
    category: 'Team project',
    year: '2026',
    role: 'Generative AI & frontend lead',
    summary: 'A desktop AI studio for generating and editing images, music, and 3D assets with models that run on the user’s own machine.',
    accent: '#d3f36b',
    visual: 'orian',
    featured: true,
    stack: ['Electron', 'React', 'TypeScript', 'Python', 'Hugging Face', 'FFmpeg'],
    links: [
      { label: 'Team repository', href: 'https://github.com/srideep47/OrianBuilder' },
      { label: '3D Assets contribution', href: 'https://github.com/srideep47/OrianBuilder/commit/4b6cddcecb814285ac1a20868770a38c3d9fa067' },
      { label: 'Video editor contribution', href: 'https://github.com/srideep47/OrianBuilder/commit/290cad7268b95a4c204f745cb041fa905d96538c' },
      { label: 'Quantized model on Hugging Face', href: 'https://huggingface.co/Ankithareddy08/z-image-turbo-gguf' },
    ],
    sections: [
      {
        title: 'A workspace for local generation',
        body: [
          'Orian Builder is a Legion Studios team project. I led the generative AI and frontend work, focusing on how users choose a model, produce an asset, and keep working with it inside the same Electron app.',
          'I built the 3D Assets interface and the connection from React through Electron to the local Python models. Users can begin with text or an image, inspect the generated asset, and export a GLB for use elsewhere.',
        ],
      },
      {
        title: 'Fitting models to the hardware',
        body: [
          'The studio offers model tiers that account for different hardware. I worked on the image model picker, integrated ACE-Step for music generation and TripoSR for 3D assets, and published a GGUF build of Z-Image-Turbo on Hugging Face.',
        ],
      },
      {
        title: 'Editing and sharing the result',
        body: [
          'I also built the video clip editor and worked on the media library and peer-to-peer sharing. Those pieces make generated assets part of a longer workflow in which people can edit, organize, and share what they made.',
        ],
      },
    ],
  },
  {
    slug: 'reqsy-ai',
    title: 'Reqsy AI',
    category: 'Flashback Labs internship',
    year: experience.year,
    role: 'End-to-end product engineering',
    summary: 'A pre-launch MVP that interviews founders, researches their assumptions, and scores startup ideas against cited evidence.',
    accent: '#cbb7ff',
    visual: 'reqsy',
    featured: true,
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Claude', 'Gemini Live'],
    links: [],
    sections: [
      {
        title: 'From a conversation to a research brief',
        body: [
          'A founder can describe an idea in chat or talk it through in a real-time voice session. The app turns that conversation into assumptions to research and returns a scored brief with sources the founder can check.',
          'I built the interface, backend, and research pipeline. The pipeline gathers web sources, deduplicates them, and connects claims to evidence so readers can see what informed the score.',
        ],
      },
      {
        title: 'Model routing and live voice',
        body: [
          'I routed tasks across hosted and local models based on cost, response time, and the needs of the step. I integrated Gemini Live for the voice interview and worked on reconnection and job recovery for interrupted mobile sessions.',
        ],
      },
      {
        title: 'A next step after the score',
        body: [
          'The pitch deck and landing-page studios give founders ways to use the research. I lazy-loaded those tools and the voice experience so the core flow can open before the heavier features are needed.',
        ],
      },
    ],
  },
  {
    slug: 'pixelpeek',
    title: 'Pixelpeek',
    category: 'Personal project · Collaborative',
    role: 'Android controls & host dashboard integration',
    summary: 'A responsive QA tool for viewing, capturing, and testing web pages across real devices from a single browser dashboard.',
    accent: '#9edce0',
    visual: 'pixelpeek',
    featured: true,
    stack: ['Kotlin', 'Jetpack Compose', 'Android WebView', 'Node.js', 'Socket.IO'],
    links: [
      { label: 'My contribution', href: 'https://github.com/ankithareddy08/Pixel-Peek/commit/53e28a333060d2041fd07bf351c64ecc18280c17' },
      { label: 'Technical overview', href: 'https://github.com/ankithareddy08/Pixel-Peek---Tester' },
    ],
    sections: [
      {
        title: 'Testing across real devices',
        body: [
          'Pixelpeek pairs devices with a dashboard over the local network using a short code or QR. From one browser tab, the host can open a page on paired devices, compare live previews, and capture screenshots at the same point in a test.',
        ],
      },
      {
        title: 'My work on Android controls',
        body: [
          'I built host-driven tap and scroll controls for the Android WebView. I connected interactions on the device preview to the Android client over Socket.IO so a tester can navigate the page from the dashboard while watching it respond on the phone.',
          'This was a collaborative build with @srideep47. The linked commit shows my changes to the Kotlin client and browser dashboard.',
        ],
      },
    ],
  },
  {
    slug: 'catercore',
    title: 'CaterCore',
    category: 'Flashback Labs internship',
    year: experience.year,
    role: 'Product design & full-stack contribution',
    summary: 'A role-based catering operations platform covering event intake, client records, contracts, payments, and reporting.',
    accent: '#f8bc8d',
    visual: 'catercore',
    featured: false,
    stack: ['Figma', 'Next.js', 'TypeScript', 'NestJS', 'PostgreSQL', 'Stripe'],
    links: [],
    sections: [
      {
        title: 'One workflow from inquiry to deposit',
        body: [
          'Staff, customers, and support teams need different information about the same event. I designed role-based interfaces for those workflows and contributed to event intake, client records, and mobile dashboard layouts.',
          'I worked on the contract flow that takes a client PDF through e-signature and into deposit collection. I also contributed reporting, audit-log views, and document scanning with text extraction.',
        ],
      },
      {
        title: 'A measured asset improvement',
        body: [
          'I resized six decorative image assets from 25.8 MB combined to 0.26 MB in the repository. The dashboard kept the same illustrations with roughly 99% less image data in those six files.',
        ],
      },
    ],
  },
  {
    slug: 'stevie-intel',
    title: 'Stevie Intel',
    category: 'Flashback Labs internship',
    year: experience.year,
    role: 'Search engineering & frontend contribution',
    summary: 'Natural-language search across historical Stevie Awards winners, with AI overviews grounded in the underlying data.',
    accent: '#eed18d',
    visual: 'stevie',
    featured: false,
    stack: ['Python', 'FastAPI', 'SQL', 'Astro', 'CloudCannon'],
    links: [],
    sections: [
      {
        title: 'Asking a question of the awards archive',
        body: [
          'I worked on Search Past Winners across the frontend and backend. A visitor can ask a natural-language question, inspect the matching award records, and read an overview tied to the same results.',
        ],
      },
      {
        title: 'Checking facts before writing summaries',
        body: [
          'I worked on SQL verification for figures in the AI overviews and on result layouts for phones. I also contributed to a nomination-assistant prototype and a review workflow for editorial drafts in CloudCannon.',
        ],
      },
    ],
  },
  {
    slug: 'link-tracker',
    title: 'Link Tracker',
    category: 'Flashback Labs internship',
    year: experience.year,
    role: 'Full-stack development',
    summary: 'A branded short-link tool with click reports and referral attribution when browser signals are available.',
    accent: '#b5d8c5',
    visual: 'tracking',
    featured: false,
    stack: ['Node.js', 'Express', 'EJS', 'Turso', 'libSQL'],
    links: [],
    sections: [
      {
        title: 'Creating and reporting on short links',
        body: [
          'I built the workflow for turning a destination URL into a branded short link. A report groups clicks by channel so the person who created the link can see where visits came from.',
        ],
      },
      {
        title: 'Accounting for missing referral data',
        body: [
          'I used explicit channel tags and available browser signals to attribute visits. The reports keep uncertain sources visible and identify link preview requests so those can be separated from visitor clicks.',
        ],
      },
    ],
  },
];
