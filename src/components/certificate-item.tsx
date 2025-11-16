import Image from "next/image";

type CertificateItemProps = {
   imageUrl: string;
   title: string;
   issuer: string;
   issuerUrl: string;
   issueDate: string;
};

export default function CertificateItem({
   imageUrl,
   title,
   issuer,
   issuerUrl,
   issueDate,
}: CertificateItemProps) {
   return (
      <article className="group relative h-full overflow-hidden rounded-lg border border-gray-800 bg-gray-900 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10">
         {/* Image Container */}
         <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-800">
            <Image
               src={imageUrl}
               alt={title}
               className="object-cover transition-transform duration-300 group-hover:scale-105"
               fill
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
         </div>

         {/* Content */}
         <div className="p-5">
            <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-white transition-colors group-hover:text-purple-400">
               {title}
            </h3>

            <div className="flex items-center justify-between text-sm">
               <a
                  href={issuerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-blue-400"
               >
                  {issuer}
               </a>
               <span className="text-gray-500">{issueDate}</span>
            </div>
         </div>
      </article>
   );
}
