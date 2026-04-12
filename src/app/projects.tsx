"use client";

import ProjectCard from "@/components/project-card";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/projectaura.jpeg",
    coverImg: "/image/projectaura.jpeg",
    gallery: [
      "/image/projectaura.jpeg",
      "/image/auragallery/aura1.jpeg",
      "/image/auragallery/aura2.jpeg",
      "/image/auragallery/aura3.jpeg",
      "/image/auragallery/aura4.jpeg"
    ],
    title: "PROJECT AURA",
    desc: "AI-driven journal with sentiment-based color themes. Features automatic title and summary generation for an organized digital archive.",
    links: {
      figma: "https://www.figma.com/design/TW922bdkwVoUMlTbB4yl0w/AURA--Copy-?node-id=0-1&t=Zi0vpKtmU0EVbfzr-1",
      git: "https://github.com/ankithareddy08/AuraApp.git",
    },
    fullDesc: "Project Aura is a revolutionary AI-driven journaling application designed to enhance self-reflection and emotional awareness. By leveraging advanced sentiment analysis models, the app dynamically transforms its visual aesthetic to match the emotional tone of the user's writing, creating a deeply personalized and immersive experience.\n\nKey features include:\n- Real-time Sentiment Analysis: Automatically detects the mood of your entries (e.g., Happy, Reflective, Anxious).\n- Dynamic Color Themes: The UI background and accent colors shift based on the detected sentiment.\n- Automated Content Generation: Uses AI to generate concise titles and summaries for every entry, saving time and improving organization.\n- Secure Metadata Storage: Carefully tracks emotional trends over time to help users identify patterns in their mental well-being.\n- Intuitive Digital Archive: Search and filter entries by date, mood, or key topics with ease.\n\nBuilt with a focus on privacy and user experience, Project Aura serves as a modern digital companion for anyone looking to document their life journey with more clarity and emotional resonance. The architecture utilizes Next.js for a seamless frontend and robust AI integrations for the backend logic, ensuring a fast and responsive interface that feels alive.",
  },
  {
    img: "/image/aiflow.jpeg",
    coverImg: "/image/aiflow.jpeg",
    gallery: [
      "/image/aiflow.jpeg",
      "/image/aiflowgallery/flow1.jpeg",
      "/image/aiflowgallery/flow2.jpeg",
      "/image/aiflowgallery/flow3.jpeg",
      "/image/aiflowgallery/flow4.jpeg",
      "/image/aiflowgallery/flow5.jpeg"
    ],
    title: "AI FLOW",
    desc: "User-centric web app simplifying AI tasks like text summarization and translation through an intuitive and accessible interface.",
    links: {
      web: "https://prismatic-frangollo-fe2a1b.netlify.app/",
      stitch: "https://stitch.withgoogle.com/projects/4976808330090665695",
      git: "https://github.com/ankithareddy08/AI-FLOW.git",
    },
    fullDesc: "AI Flow is a comprehensive productivity suite designed to bring the power of large language models to everyday users through a simplified, user-centric interface. It addresses the common challenge of 'prompt fatigue' by abstracting complex prompt engineering into intuitive, one-click tools.\n\nCore Functionalities:\n- Text Summarization: Instantly condense long documents, articles, or notes into key takeaways.\n- Professional Translation: High-accuracy translation across multiple languages while maintaining technical nuances.\n- Content Professionalization: Refines raw drafts into polished, formal business communications or academic texts.\n- Grammar & Style Correction: Advanced proofreading that goes beyond simple spellcheck to improve flow and tone.\n\nBy providing a clean, accessible dashboard, AI Flow empowers professionals, students, and casual researchers to leverage AI without needing technical expertise. The application is built on a scalable architecture that integrates seamlessly with OpenAI's API, ensuring high performance and reliability. Whether you're drafting an important email or analyzing a research paper, AI Flow streamlines your workflow, allowing you to focus on high-level creativity while the AI handles the repetitive text processing tasks.",
  },
  {
    img: "/image/cyberspace-project.png",
    coverImg: "/image/cyberspace-project.png",
    title: "PROJECT CYBER SPACE",
    desc: "Educational Metaverse with virtual university for real-time collaboration, live discussions, study notes, and video lectures.",
    fullDesc: "Project Cyber Space is an ambitious educational metaverse project aimed at redefining the future of remote learning and digital collaboration. It creates a persistent, 3D virtual university environment where students and educators can interact in real-time, transcending the limitations of traditional video conferencing tools.\n\nProject Scope & Highlights:\n- Premium UI/UX Design: Focused on creating an intuitive, futuristic interface that simplifies navigation within a complex 3D virtual environment.\n- Large Data Management: Implemented robust systems to handle extensive student records, academic resources, and persistent world states across multiple servers.\n- Media Management: Developed a high-performance system for the real-time streaming and storage of video lectures, interactive 3D assets, and high-resolution academic resources.\n- Virtual Campus Architecture: Explore detailed lecture halls, libraries, and collaborative study lounges in a fully immersive environment.\n- Real-time Collaboration: Built-in tools for live group discussions, interactive whiteboards, and synchronized document editing.\n- Avatar-based Interaction: Enhance social presence and engagement through customizable avatars and spatial audio systems.\n\nBy merging game design principles with academic requirements, Project Cyber Space fosters a sense of community and presence that is often missing in online education. The project demonstrates advanced skills in 3D modeling, network synchronization, and scalable backend development, making it a pioneer in the 'EdTech' metaverse space.",
  },
  {
    img: "/image/final-dawn-project.png",
    coverImg: "/image/final-dawn-project.png",
    title: "THE OPERATION FINAL DAWN",
    desc: "Zombie survival-exploration game with complex AI pathfinding, time-sensitive inventory, and atmospheric world-building.",
    links: {
      figma: "https://www.figma.com/design/mkopDm52nWhgjaqd7PU7nT/OFD?node-id=0-1&t=6MW8ILelz5As3oMk-1",
    },
    fullDesc: "The Operation Final Dawn is a high-stakes zombie survival-exploration game that emphasizes tactical decision-making and atmospheric storytelling. Set in a decaying urban wasteland, players must navigate dangerous environments while managing scarce resources and outsmarting relentless AI-driven threats.\n\nCore Implementation Details:\n- UI/UX Design: Crafted a high-immersion, minimalistic user interface that maintains the horror atmosphere while providing critical survival information without clutter.\n- Large Data Management: Optimized the handling of massive world states, item persistence, and complex AI navigation tables to ensure performance stability.\n- Media Management: Orchestrated a complex system for dynamic music transitions, atmospheric spatial audio, and high-fidelity 3D assets management.\n- Complex AI Pathfinding: Enemies utilize advanced navigation systems to hunt players through intricate environments, forcing constant movement and strategy.\n- Procedural World-Building: A mix of handcrafted locations and procedurally generated elements ensures each playthrough feels unique and unpredictable.\n\nThis project showcases extensive proficiency in game engine logic, state management, and 3D environment design. It pushes the boundaries of independent survival horror by focusing on deep simulation mechanics rather than just simple combat, providing a challenging and rewarding experience for players who value immersion and difficulty.",
  },
  {
    img: "/image/blog-1.svg",
    coverImg: "/image/blog-1.svg",
    title: "SPENDIFY: FINTECH ANDROID APP",
    desc: "Gamified mobile app for financial literacy and savings. Full lifecycle: UI/UX, backend logic, Android deployment.",
    fullDesc: "Spendify is a gamified fintech application developed for the Android platform, specifically designed to tackle the growing need for financial literacy among young adults. By turning the often-tedious task of budgeting and saving into an engaging, reward-based experience, Spendify helps users build healthy financial habits that last a lifetime.\n\nApp Overview:\n- Gamified Savings Goals: Users set specific goals (e.g., 'Emergency Fund' or 'Travel') and earn 'experience points' and badges as they make progress.\n- Visual Budgeting: Uses intuitive charts and progress bars to show users exactly where their money is going, without the complexity of traditional spreadsheets.\n- Educational Modules: Integrated mini-lessons on topics like compounding interest, debt management, and basic investing principles.\n- Secure Backend Integration: Utilizes robust encryption and secure data handling to ensure all financial information is protected.\n- End-to-End Development: Covers the entire product lifecycle, from initial wireframing and UI/UX design to backend development and Play Store deployment.\n\nSpendify represents a perfect blend of behavioral psychology and modern mobile technology. It demonstrates a strong understanding of the Android ecosystem, Material Design principles, and the importance of creating secure, user-centric financial tools.",
  },
  {
    img: "/image/blog2.svg",
    coverImg: "/image/blog2.svg",
    title: "MALWARE DETECTION VIA DEEP LEARNING",
    desc: "CNN and LSTM model for Android malware detection. Scalable, high-accuracy system analyzing app features.",
    fullDesc: "This project presents a state-of-the-art malware detection system for the Android operating system, powered by a hybrid Deep Learning architecture. By combining Convolutional Neural Networks (CNN) for spatial feature extraction and Long Short-Term Memory (LSTM) networks for sequential analysis, the system achieves industry-leading accuracy in identifying malicious software.\n\nResearch and Development Focus:\n- Hybrid Model Architecture: Leverages CNNs to analyze static app features and LSTMs to evaluate dynamic behavioral sequences.\n- Large-Scale Dataset Training: Trained on thousands of benign and malicious apps to ensure high generalization capabilities.\n- Automated Feature Extraction: Replaces manual, time-consuming feature engineering with automated deep learning layers that identify subtle malware patterns.\n- Scalable Detection Engine: Designed to process new apps quickly, making it suitable for integration into app store submission pipelines.\n- Comprehensive Analysis: Evaluates permissions, API calls, and system resource usage to flag suspicious activity with minimal false positives.\n\nThis project demonstrates a high level of expertise in cybersecurity, data science, and deep learning. It addresses a critical security challenge in the mobile landscape, showcasing the potential of AI to defend against increasingly sophisticated digital threats.",
  },
  {
    img: "/image/weathergallery/weather1.png",
    coverImg: "/image/weathergallery/weather1.png",
    gallery: ["/image/weathergallery/weather1.png"],
    title: "WEATHER DASHBOARD",
    desc: "Real-time Weather Reporter web app with dynamic forecasts, interactive maps, and hyper-local data visualization.",
    links: {
      stitch: "https://stitch.withgoogle.com/projects/11299791557414670901",
      git: "https://github.com/ankithareddy08/weather-app.git",
    },
    fullDesc: "The Weather Dashboard is a high-performance web application focused on real-time meteorological data visualization and external API integration. It provides users with hyper-local forecasts and detailed climate insights in a sleek, responsive interface.\n\nKey Features:\n- Real-time Atmospheric Sync: Integrates with global weather APIs to provide hyper-local forecasts, dynamic maps, and severe weather alerts.\n- UI/UX Design: Designed with a focus on data clarity, using dynamic iconography and color palettes that shift based on current weather conditions.\n- Large Data Management: Efficiently handles high-frequency API updates and large-scale historical weather data for trend analysis.\n- Media Management: Optimized rendering of dynamic weather maps, satellite imagery, and high-resolution climate graphics.\n- Performance Optimization: Utilizes modern frontend techniques like debouncing and lazy loading to maintain high frames-per-second and low load times.\n\nThis project highlights a strong ability to build integrated, data-driven web solutions. It showcases technical skills in React, state management, and the efficient handling of complex third-party data streams, resulting in a tool that is both highly functional and visually compelling.",
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
          My projects reflect a blend of UI/UX design, front-end development,
          AI-powered solutions, immersive digital experiences, fintech
          applications, and cybersecurity innovation, each focused on solving
          real problems through intuitive and impactful design.
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
