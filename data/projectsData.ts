interface Project {
  title: string
  description: string
  href?: string
  repo?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Vue Cards',
    description: `Term Project for CP2010 Frameworks.
     `,
    /* imgSrc: '#', */
    href: 'https://polite-medovik-fc1ae5.netlify.app/',
    repo: 'https://github.com/andrewnx/vuecards',
  },
  {
    title: 'Weather App',
    description: `Assignment for CP1580 Using Internet APIs.
     `,
    /* imgSrc: '#', */
    href: 'https://weather-andrewn.vercel.app/',
    repo: 'https://github.com/andrewnx/weather',
  },
  {
    title: 'Movie App',
    description: `Assignment for CP1580 Using Internet APIs.
     `,
    /* imgSrc: '#', */
    href: 'https://vermillion-lamington-702a73.netlify.app/',
    repo: 'https://github.com/andrewnx/movies',
  },
  {
    title: 'Ladderspike',
    description: `Term Project for CP1410 Web Analysis & Design.
     `,
    /* imgSrc: '#', */
    href: 'http://anwp.atwebpages.com/',
    repo: 'https://github.com/andrewnx/ladderspike',
  },
  {
    title: 'Memory Game',
    description: `Term Project for CP1292 JavaScript and NodeJS.
     `,
    /*  imgSrc: '#', */
    href: 'https://gentle-mandazi-cdb867.netlify.app/',
    repo: 'https://github.com/andrewnx/memorygame',
  },
  {
    title: 'Baseball Team Manager',
    description: `Term Project for CP1855 Introduction to Python.
     `,
    /*  imgSrc: '#', */
    href: 'https://baseballteammanager.vercel.app/',
    repo: 'https://github.com/andrewnx/baseballteammanager',
  },
]

export default projectsData
