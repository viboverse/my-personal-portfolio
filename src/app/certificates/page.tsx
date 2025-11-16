import CertificateItem from "@/components/certificate-item";
import { CERTIFICATES } from "@/data/certificates";

export default function CertificatePage() {
   return (
      <section className="min-h-screen px-8 py-16">
         <div className="mx-auto max-w-7xl">
            {/* Header */}
            <div className="mb-16 text-center">
               <h1 className="mb-4 text-5xl font-bold text-white">
                  Certificates
               </h1>
               <div className="mx-auto mb-4 h-1 w-24 bg-purple-600"></div>
               <p className="text-lg text-gray-400">
                  Professional certifications and completed courses
               </p>
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {CERTIFICATES.map((certificate) => (
                  <CertificateItem key={certificate.id} {...certificate} />
               ))}
            </div>
         </div>
      </section>
   );
}
