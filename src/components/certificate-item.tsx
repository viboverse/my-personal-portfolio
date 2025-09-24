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
      <article className="group flex w-70 cursor-pointer flex-col rounded-md bg-neutral-800 shadow-lg outline outline-gray-700 transition-all duration-300 hover:scale-105 hover:outline-gray-300 md:w-80">
         {/* Image */}
         <div className="relative h-56 w-full">
            <Image
               src={imageUrl}
               alt={title}
               className="rounded-t-md object-cover"
               priority
               fill
            />
         </div>

         {/* Content */}
         <div className="space-y-2 p-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">
               {title}
            </h3>
            <p>
               Issued by:{" "}
               <a
                  href={issuerUrl}
                  target="_blank"
                  className="inline-block text-sm text-blue-400 italic hover:underline"
               >
                  {issuer}
               </a>
            </p>
            <p className="text-sm text-neutral-400">Date: {issueDate}</p>
         </div>
      </article>
   );
}
