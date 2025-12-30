import "@/styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import MainHeader from "@/components/main-header";
import Footer from "@/components/main-footer";

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
      <html lang="en" suppressHydrationWarning>
         <body className={`${roboto.className} flex min-h-screen flex-col`}>
            <MainHeader />
            <main className="flex-1 bg-black/70 backdrop-blur-lg">
               {children}
               <Analytics />
            </main>
            <Footer />
         </body>
      </html>
   );
}
