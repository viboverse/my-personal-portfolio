export default function AboutMe() {
   return (
      <section className="px-18 py-16">
         <div className="mx-auto">
            <div className="space-y-12">
               {/* Header */}
               <div className="space-y-4 text-center">
                  <h1 className="text-4xl md:text-5xl">About me</h1>
                  <div className="mx-auto h-0.5 w-40 bg-purple-600 md:w-64"></div>
               </div>

               {/* Content Grid */}
               <div className="grid gap-12 md:grid-cols-2">
                  {/* Left Colomns */}
                  <div className="space-y-6">
                     <h2 className="mb-4 text-2xl font-medium text-white">
                        About Me
                     </h2>
                     <p className="leading-relaxed font-light text-gray-300">
                        Hello, I&apos;m Vahab Afsharian (or Vibo), an ICT
                        student at{" "}
                        <a
                           href="https://www.jamk.fi/en"
                           target="_blank"
                           className="text-purple-400 underline transition-colors hover:text-purple-300"
                        >
                           Jamk University of Applied Sciences
                        </a>{" "}
                        with a passion for building modern web applications.
                     </p>
                     <p className="leading-relaxed font-light text-gray-300">
                        My journey into development began with a curiosity to
                        make websites interactive. This led me deep into the
                        JavaScript ecosystem, where I now build user interfaces
                        with{" "}
                        <strong className="font-normal text-gray-100">
                           React, Next.js, and TypeScript
                        </strong>
                        , using{" "}
                        <strong className="font-normal text-gray-100">
                           Tailwind CSS
                        </strong>{" "}
                        for styling. To understand the full picture, I&apos;ve
                        also explored backend technologies like{" "}
                        <strong className="font-normal text-gray-100">
                           Node.js, PostgreSQL, and Prisma
                        </strong>
                        , giving me insight into the entire development
                        lifecycle.
                     </p>
                     <p className="leading-relaxed font-light text-gray-300">
                        What truly drives me is the cycle of learning and
                        applying. I am constantly exploring new frameworks and
                        tools on platforms like Frontend Masters to find better
                        ways to solve problems. For me, development isn&apos;t
                        just about writing code—it&apos;s about building robust,
                        user-friendly applications from concept to deployment. I
                        am now eager to take my skills beyond personal projects
                        and contribute to a professional engineering team.
                     </p>
                  </div>

                  {/* Right Columns */}
                  <div className="space-y-6">
                     <h2 className="mb-4 text-2xl font-medium text-white">
                        How I Add Value
                     </h2>

                     <div className="space-y-4">
                        <div className="border-l-4 border-purple-600 pl-4">
                           <h3 className="font-medium text-white">
                              Always Learning
                           </h3>
                           <p className="text-sm text-gray-400">
                              I&apos;m constantly exploring new tools,
                              frameworks, and best practices to keep improving.
                           </p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                           <h3 className="font-medium text-white">
                              Clean Code
                           </h3>
                           <p className="text-sm text-gray-400">
                              Writing maintainable, well-structured code for
                              long-term scalability.
                           </p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                           <h3 className="font-medium text-white">
                              Responsive Design
                           </h3>
                           <p className="text-sm text-gray-400">
                              Creating layouts that look and work great on any
                              device.
                           </p>
                        </div>
                        <div className="border-l-4 border-purple-600 pl-4">
                           <h3 className="font-medium text-white">
                              Problem-Solving
                           </h3>
                           <p className="text-sm text-gray-400">
                              Tackling challenges with logical thinking and
                              creativity.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
