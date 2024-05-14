import certifications from '@/data/certifications'
import Image from 'next/image'

export default function Certifications() {
  return (
    <div className="container mx-auto px-4 py-1">
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              src={cert.imageUrl}
              alt={cert.title}
              width={200} // Adjust width as needed
              height={100} // Adjust height as needed
              className="mx-auto mb-4"
            />
            <h3 className="mb-2 text-sm tracking-tight text-gray-900 dark:text-white md:text-base lg:text-sm">
              {cert.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  )
}
