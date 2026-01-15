import {
   SiReact,
   SiTypescript,
   SiTailwindcss,
   SiJavascript,
   SiHtml5,
   SiCss3,
   SiVercel,
   SiVite,
   SiNextdotjs,
   SiPrisma,
   SiPostgresql,
   SiClerk,
} from "react-icons/si";

export const PROJECTS_DATA = [
   {
      id: 3,
      title: "Weather App",
      description:
         "Real-time weather forecasts with a responsive UI and animations. Features location-based weather data, beautiful animations, and intuitive user experience.",
      image: "/projects/weather-app.png",
      demoUrl: "https://react-weather-app-vtjz.vercel.app/",
      githubUrl: "https://github.com/viboverse/react-weather-app",
      techStack: [SiReact, SiVite, SiVercel, SiTailwindcss, SiJavascript],
   },
   {
      id: 1,
      title: "FetchFlix",
      description:
         "React app integrating SWAPI and Firebase to search, save, and manage movies. Features a clean interface with responsive design.",
      image: "/projects/fetchflix.png",
      demoUrl: "https://fetch-movie-nine.vercel.app/",
      githubUrl: "https://github.com/viboverse/fetch-movie",
      techStack: [SiReact, SiTailwindcss, SiCss3, SiJavascript],
   },
   {
      id: 2,
      title: "Tic-Tac-Toe",
      description:
         "A modern, responsive Tic Tac Toe game with a clean UI and an unbeatable AI opponent. Play against a friend or challenge the AI for a strategic battle you can't win.",
      image: "/projects/tic-tac-toe.png",
      demoUrl: "https://tic-tac-toe-game-app-fawn.vercel.app/",
      githubUrl: "https://github.com/viboverse/tic-tac-toe-game-app",
      techStack: [SiReact, SiTypescript, SiHtml5, SiCss3, SiVite, SiVercel],
   },
   {
      id: 4,
      title: "Project Manager",
      description:
         "Task & project management app with authentication and state management. Features project organization, task tracking, and user authentication for seamless workflow management.",
      image: "/projects/project-manager-app.png",
      demoUrl: "https://project-manager-app-beige.vercel.app/",
      githubUrl: "https://github.com/viboverse/project-manager-app",
      techStack: [SiReact, SiCss3, SiHtml5, SiVite, SiVercel, SiJavascript],
   },
   {
      id: 5,
      title: "Personal Portfolio",
      description:
         "Modern portfolio website built with Next.js and TypeScript. Showcases my projects, skills, and contact information with responsive design and smooth animations.",
      image: "/projects/personal-portfolio.png",
      demoUrl: "https://my-personal-portfolio-lake-two.vercel.app/",
      githubUrl: "https://github.com/viboverse/my-personal-portfolio",
      techStack: [SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel],
   },
];

export const FEATURED_PROJECT = {
   id: 0,
   title: "Linear Kanban",
   description:
      "This is my most ambitious project so far and the one I’m most proud of. I built a full-stack application using Next.js, React, and a serverless PostgreSQL database to challenge myself and create a fast, real-time productivity tool.",
   image: "/projects/linear-kanban.png",
   demoUrl: "",
   githubUrl: "https://github.com/viboverse/linear-kanban",
   techStack: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiPrisma,
      SiPostgresql,
      SiClerk,
   ],
   comingSoon: true,
};

// Highlighted Second-Best Project
export const HIGHLIGHTED_PROJECT = {
   id: 6,
   title: "Sleep Tracker",
   description:
      "A modern, full-stack sleep tracking application built with Next.js, React, and TypeScript. Track your sleep patterns, analyze trends, and improve your rest quality with an intuitive interface and beautiful visualizations.",
   image: "/projects/sleep-tracker.png",
   demoUrl: "https://next-sleep-tracker-omega.vercel.app/",
   githubUrl: "https://github.com/viboverse/next-sleep-tracker",
   techStack: [
      SiNextdotjs,
      SiReact,
      SiTypescript,
      SiTailwindcss,
      SiVercel,
      SiPrisma,
   ],
};
