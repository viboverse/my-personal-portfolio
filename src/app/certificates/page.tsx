import CertificateItem from "@/components/certificate-item";

const CERTIFICATES = [
   {
      id: 1,
      title: "React - The Complete Guide 2025",
      imageUrl: "/certificates/react-udemy.jpg",
      issuer: "Udmey",
      issuerUrl: "https://www.udemy.com/",

      issueDate: "July 2025",
   },
   {
      id: 2,
      title: "Next.js 15 - The Complete Guide",
      imageUrl: "/certificates/nextjs-udemy.jpg",
      issuer: "Udmey",
      issuerUrl: "https://www.udemy.com/",

      issueDate: "September 2025",
   },
   {
      id: 3,
      title: "TypeScript 5+",
      imageUrl: "/certificates/typescript-v4-frontendmasters.jpg",
      issuer: "Frontend Masters",
      issuerUrl: "https://frontendmasters.com/",

      issueDate: "August 2025",
   },
   {
      id: 4,
      title: "React and TypeScript",
      imageUrl: "/certificates/react-typescript-v2-frontendmasters.jpg",
      issuer: "Frontend Masters",
      issuerUrl: "https://frontendmasters.com/",

      issueDate: "August 2025",
   },
   {
      id: 5,
      title: "Tailwind CSS 4+",
      imageUrl: "/certificates/tailwind-css-v2-frontendmasters.jpg",
      issuer: "Frontend Masters",
      issuerUrl: "https://frontendmasters.com/",

      issueDate: "September 2025",
   },
   {
      id: 6,
      title: " HTML5",
      imageUrl: "/certificates/html-coursera.jpg",
      issuer: "Coursera",
      issuerUrl: "https://www.coursera.org/",

      issueDate: "October 2021",
   },
   {
      id: 7,
      title: "CSS Foundations",
      imageUrl: "/certificates/css-foundation-frontendmasters.jpg",
      issuer: "Frontend Masters",
      issuerUrl: "https://frontendmasters.com/",

      issueDate: "July 2025",
   },
];

export default function CertificatePage() {
   return (
      <section className="px-16 py-16">
         {/* Add header */}
         <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
               My Certificates
            </h1>
            <div className="mx-auto mt-4 h-1 w-40 bg-purple-600 md:w-64"></div>
            <p className="mt-4 text-gray-400">
               Professional certifications and completed courses
            </p>
         </div>

         {/* Fixed grid */}
         {/* <div className="mx-auto max-w-7xl"> */}
         <div className="grid justify-items-center gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATES.map((certificate) => (
               <CertificateItem key={certificate.id} {...certificate} />
            ))}
         </div>
         {/* </div> */}
      </section>
   );
}
