import certifications from '@/data/certifications'
import Image from 'next/image'

export default function Certifications() {
  return (
    <div className="container mx-auto px-4 py-1">
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block w-full max-w-xs rounded-lg border border-gray-200 bg-white p-4 text-center no-underline shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="mb-4 flex justify-center">
              <Image src={cert.imageUrl} alt={cert.title} width={120} height={120} />
            </div>
            <h3 className="text-xs tracking-tight text-gray-900 dark:text-white sm:text-sm md:text-base lg:text-sm xl:text-base">
              {cert.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  )
}
