"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../../public/logo/Vibo-logo-transparent.png";

export default function MainHeader() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <header className="border-old-gold-400/60 border-b bg-gradient-to-r from-neutral-800 to-neutral-900 shadow-lg backdrop-blur-sm">
         <nav className="mx-auto flex h-20 items-center justify-between px-8">
            <Link href="/" className="text-xl font-bold">
               <Image
                  src={logo}
                  alt="vibo logo"
                  width={120}
                  height={120}
                  priority
                  className="rounded-xl"
               />
            </Link>

            <div className="hidden gap-12 sm:flex">
               <Link
                  href="/"
                  className="group hover:text-old-gold-400 relative px-4 py-2 text-gray-200 transition-all duration-300"
               >
                  Home
                  <span className="bg-old-gold-400 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
               </Link>

               <Link
                  href="/projects"
                  className="group hover:text-old-gold-400 relative px-4 py-2 text-gray-200 transition-all duration-300"
               >
                  View My Work
                  <span className="bg-old-gold-400 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
               </Link>

               <Link
                  href="/certificates"
                  className="group hover:text-old-gold-400 relative px-4 py-2 text-gray-200 transition-all duration-300"
               >
                  Certificates
                  <span className="bg-old-gold-400 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
               </Link>

               <Link
                  href="/contact"
                  className="group hover:text-old-gold-400 relative px-4 py-2 text-gray-200 transition-all duration-300"
               >
                  Contacts
                  <span className="bg-old-gold-400 absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
               </Link>
            </div>

            <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="text-3xl sm:hidden"
            >
               {isMenuOpen ? <ImCross /> : <FaBars />}
            </button>
         </nav>

         {isMenuOpen && (
            <div className="border-t border-purple-500/30 bg-gradient-to-b from-neutral-700 to-neutral-800 px-8 py-4">
               <Link
                  href="/"
                  className="block py-3"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Home
               </Link>
               <Link
                  href="/projects"
                  className="block py-3"
                  onClick={() => setIsMenuOpen(false)}
               >
                  View My Work
               </Link>

               <Link
                  href="/certificates"
                  className="block py-3"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Certificates
               </Link>

               <Link
                  href="/contact"
                  className="block py-3"
                  onClick={() => setIsMenuOpen(false)}
               >
                  Contacts
               </Link>
            </div>
         )}
      </header>
   );
}
