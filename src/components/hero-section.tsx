import Image from "next/image";
import mainImage from "@/../public/images/vibo-fullsize.jpg";
import { FaDownload } from "react-icons/fa6";
import Link from "next/link";

export default function HeroSection() {
   return (
      <section className="flex items-center justify-between px-8 py-12">
         <div className="mx-auto grid items-center gap-24 md:grid-cols-2">
            <div className="space-y-6">
               <div className="space-y-2">
                  <h1 className="text-4xl font-light text-white md:text-5xl">
                     Vibo{" "}
                     <p className="inline text-gray-300">(Vahab Afsharian)</p>
                  </h1>
                  <p className="text-lg tracking-widest text-purple-600">
                     Full-stack Developer | React • Next.js • TypeScript
                  </p>
               </div>

               <p className="max-w-md text-lg text-gray-300">
                  I build responsive, high-performance applications with clean
                  code and modern technologies.
               </p>

               {/* Buttons */}
               <div className="grid max-w-md grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
                  <Link
                     href="/projects"
                     className="cursor-pointer rounded-lg bg-purple-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-purple-700"
                  >
                     View My Work
                  </Link>
                  <a
                     href="/vahab-cv.pdf"
                     download="vahab-afsharian-cv.pdf"
                     className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white"
                  >
                     Download CV
                     <FaDownload className="text-sm" />
                  </a>
                  <Link
                     className="cursor-pointer rounded-lg bg-purple-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-purple-700 sm:col-span-2"
                     href="/certificates"
                  >
                     Certificates
                  </Link>
               </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
               <Image
                  src={mainImage}
                  width={320}
                  height={320}
                  alt="Vahab Afsharian"
                  className="w-full max-w-[280px] rounded-2xl shadow-2xl md:max-w-[320px]"
                  priority
               />
            </div>
         </div>
      </section>
   );
}
