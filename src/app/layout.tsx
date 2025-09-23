import type { Metadata } from "next";
import "@/styles/globals.css";
import MainHeader from "@/components/main-header";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer";

const roboto = Roboto({
   weight: "800",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Vahab Afsharian - Frontend Developer",
   description:
      "Personal portfolio showcasing my projects and skills as a frontend developer",
   keywords: ["frontend", "developer", "react", "nextjs", "portfolio"],
   authors: [{ name: "Vahab Afsharian" }],
   openGraph: {
      title: "Vahab Afsharian - Frontend Developer",
      description: "Personal portfolio showcasing my projects and skills",
      type: "website",
   },
   icons: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "shortcut icon", url: "/favicon.ico" },
   ],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${roboto.className} flex min-h-screen flex-col`}>
            <MainHeader />
            <main className="flex-1 bg-black/70 backdrop-blur-lg">
               {children}
            </main>
            <Footer />
         </body>
      </html>
   );
}
