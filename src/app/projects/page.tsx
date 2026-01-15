import FeaturedProjectCard from "@/components/featured-project-card";
import HighlightedProjectCard from "@/components/highlighted-project-card";
import ProjectCard from "@/components/project-card";
import {
   FEATURED_PROJECT,
   HIGHLIGHTED_PROJECT,
   PROJECTS_DATA,
} from "@/data/projects";

export default function ProjectsPage() {
   return (
      <section className="min-h-screen px-8 py-16">
         <div className="mx-auto max-w-6xl">
            <div className="space-y-12">
               {/* Header  */}
               <div className="space-y-4 text-center">
                  <h1 className="text-4xl md:text-5xl">My Projects</h1>
                  <p className="mx-auto max-w-2xl text-lg text-gray-400">
                     Here are some of the projects I&apos;ve built to sharpen my
                     skills and explore new technologies.
                  </p>
                  <div className="mx-auto h-1 w-24 bg-purple-500"></div>
               </div>

               {/* Featured Project - Linear Kanban */}
               <FeaturedProjectCard
                  title={FEATURED_PROJECT.title}
                  description={FEATURED_PROJECT.description}
                  image={FEATURED_PROJECT.image}
                  githubUrl={FEATURED_PROJECT.githubUrl}
                  techStack={FEATURED_PROJECT.techStack}
               />

               {/* Highlighted Project - Sleep Tracker */}
               <HighlightedProjectCard
                  title={HIGHLIGHTED_PROJECT.title}
                  description={HIGHLIGHTED_PROJECT.description}
                  image={HIGHLIGHTED_PROJECT.image}
                  demoUrl={HIGHLIGHTED_PROJECT.demoUrl}
                  githubUrl={HIGHLIGHTED_PROJECT.githubUrl}
                  techStack={HIGHLIGHTED_PROJECT.techStack}
               />

               {/* Other Projects Label */}
               <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-gray-700" />
                  <span className="text-sm font-medium tracking-wider text-gray-500 uppercase">
                     Other Projects
                  </span>
                  <div className="h-px flex-1 bg-gray-700" />
               </div>

               {/* Grid Content */}
               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {PROJECTS_DATA.map((project) => (
                     <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        demoUrl={project.demoUrl}
                        techStack={project.techStack}
                        githubUrl={project.githubUrl}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
