import Image from "next/image";
import { IconType } from "react-icons";
import { FaGithub, FaRocket } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const techColors: Record<string, string> = {
   SiReact: "#61DAFB",
   SiNextdotjs: "#ffffff",
   SiTypescript: "#3178C6",
   SiTailwindcss: "#06B6D4",
   SiPrisma: "#2D3748",
};

type FeaturedProjectCardProps = {
   title: string;
   description: string;
   image: string;
   githubUrl: string;
   techStack: IconType[];
};

export default function FeaturedProjectCard({
   title,
   description,
   image,
   githubUrl,
   techStack,
}: FeaturedProjectCardProps) {
   return (
      <div className="group relative overflow-hidden rounded-3xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-900/40 via-gray-900 to-indigo-900/40 p-1 shadow-2xl shadow-purple-500/20 transition-all duration-300 hover:border-purple-400 hover:shadow-purple-500/40">
         {/* Animated gradient border effect */}
         <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-40" />

         <div className="relative flex flex-col gap-8 rounded-2xl bg-gray-900/90 p-6 backdrop-blur-sm md:flex-row md:items-center md:p-8">
            {/* Image Section */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-72 md:w-1/2">
               {/* Mystery overlay */}
               <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/80 via-purple-900/50 to-transparent">
                  <div className="text-center">
                     <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/50 bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300 backdrop-blur-sm">
                        <FaRocket className="animate-bounce text-xs" />
                        Coming Soon
                     </div>
                     <p className="text-sm text-gray-400">
                        Preparing for launch...
                     </p>
                  </div>
               </div>
               <Image
                  src={image}
                  alt={title}
                  className="object-cover opacity-60 blur-sm transition-all duration-300 group-hover:opacity-80 group-hover:blur-none"
                  fill
               />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col space-y-5 md:w-1/2">
               {/* Badge */}
               <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                     <HiSparkles className="text-yellow-300" />
                     Featured Project
                  </span>
               </div>

               <h2 className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  {title}
               </h2>

               <p className="text-base leading-relaxed text-gray-300">
                  {description}
               </p>

               {/* Tech Stack */}
               <div className="flex flex-wrap gap-3">
                  {techStack.map((TechIcon, index) => {
                     const iconName = TechIcon.name;
                     return (
                        <div
                           key={index}
                           className="rounded-lg border border-gray-700 bg-gray-800/80 p-2.5 transition-all hover:scale-110 hover:border-purple-500 hover:bg-gray-700"
                        >
                           <TechIcon
                              className="text-xl"
                              color={techColors[iconName]}
                           />
                        </div>
                     );
                  })}
               </div>

               {/* Actions */}
               <div className="flex gap-4 pt-2">
                  <div className="flex cursor-not-allowed items-center gap-2 rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-medium text-gray-400">
                     <FaRocket className="text-xs" />
                     Demo Coming Soon
                  </div>
                  <a
                     href={githubUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 rounded-lg border border-purple-500 px-5 py-2.5 text-sm font-medium text-purple-300 transition-all hover:bg-purple-500/20 hover:text-white"
                  >
                     <FaGithub />
                     View Code
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
