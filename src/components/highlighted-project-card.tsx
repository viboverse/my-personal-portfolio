import Image from "next/image";
import { IconType } from "react-icons";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiStar } from "react-icons/hi2";

const techColors: Record<string, string> = {
   SiReact: "#61DAFB",
   SiNextdotjs: "#ffffff",
   SiTypescript: "#3178C6",
   SiTailwindcss: "#06B6D4",
   SiPrisma: "#2D3748",
   SiVercel: "#ffffff",
};

type HighlightedProjectCardProps = {
   title: string;
   description: string;
   image: string;
   demoUrl: string;
   githubUrl: string;
   techStack: IconType[];
};

export default function HighlightedProjectCard({
   title,
   description,
   image,
   demoUrl,
   githubUrl,
   techStack,
}: HighlightedProjectCardProps) {
   return (
      <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 via-gray-900 to-blue-900/20 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
         <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
            {/* Image Section */}
            <div className="relative h-56 w-full overflow-hidden rounded-xl md:h-48 md:w-2/5">
               <Image
                  src={image}
                  alt={title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
               />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col space-y-4">
               {/* Badge */}
               <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/50 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                     <HiStar className="text-yellow-400" />
                     Second Best Project
                  </span>
               </div>

               <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                  {title}
               </h3>

               <p className="text-sm leading-relaxed text-gray-400">
                  {description}
               </p>

               {/* Tech Stack */}
               <div className="flex flex-wrap gap-2">
                  {techStack.map((TechIcon, index) => {
                     const iconName = TechIcon.name;
                     return (
                        <div
                           key={index}
                           className="rounded-lg border border-gray-700 bg-gray-800/60 p-2 transition-all hover:border-cyan-500/50"
                        >
                           <TechIcon
                              className="text-lg"
                              color={techColors[iconName]}
                           />
                        </div>
                     );
                  })}
               </div>

               {/* Actions */}
               <div className="flex gap-3 pt-2">
                  <a
                     href={demoUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cyan-700"
                  >
                     <FaExternalLinkAlt className="text-xs" />
                     Live Demo
                  </a>
                  <a
                     href={githubUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 transition-all hover:border-cyan-500/50 hover:text-white"
                  >
                     <FaGithub />
                     Code
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
