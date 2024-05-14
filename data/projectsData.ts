interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Vue Cards',
    description: `Term Project for CP2010 Frameworks.
     `,
    /* imgSrc: '#', */
    href: 'https://polite-medovik-fc1ae5.netlify.app/',
  },
  {
    title: 'Weather App',
    description: `Assignment for CP1580 Using Internet APIs.
     `,
    /* imgSrc: '#', */
    href: '#',
  },
  {
    title: 'Movie App',
    description: `Assignment for CP1580 Using Internet APIs.
     `,
    /* imgSrc: '#', */
    href: 'https://vermillion-lamington-702a73.netlify.app/',
  },
  {
    title: 'Ladderspike',
    description: `Term Project for CP1410 Web Analysis & Design.
     `,
    /* imgSrc: '#', */
    href: 'http://anwp.atwebpages.com/',
  },
  {
    title: 'Memory Game',
    description: `Term Project for CP1292 JavaScript and NodeJS.
     `,
   /*  imgSrc: '#', */
    href: 'https://gentle-mandazi-cdb867.netlify.app/',
  },
  {
    title: 'Baseball Team Manager',
    description: `Term Project for CP1855 Introduction to Python.
     `,
   /*  imgSrc: '#', */
    href: 'https://baseballteammanager.vercel.app/',
  },
]

export default projectsData
