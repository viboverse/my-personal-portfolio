import CertificateItem from "@/components/certificate-item";
import { CERTIFICATES } from "@/data/certificates";

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
         <div className="grid justify-items-center gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATES.map((certificate) => (
               <CertificateItem key={certificate.id} {...certificate} />
            ))}
         </div>
      </section>
   );
}
