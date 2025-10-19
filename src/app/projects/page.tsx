import ProjectCard from "@/components/project-card";
import { PROJECTS_DATA as projects } from "@/data/projects";

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

               {/* Grid Content */}
               <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project) => (
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
