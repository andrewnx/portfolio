'use client'

import { useState } from 'react'
import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import Python from '@/components/icons/python.svg'
import JavaScript from '@/components/icons/javascript.svg'
import HTML from '@/components/icons/html.svg'
import CSS from '@/components/icons/css.svg'
import PHP from '@/components/icons/php.svg'
import Vue from '@/components/icons/vue.svg'
import React from '@/components/icons/react.svg'
import Tailwind from '@/components/icons/tailwindcss.svg'
import Django from '@/components/icons/django.svg'
import Nuxt from '@/components/icons/nuxt.svg'
import Next from '@/components/icons/nextjs.svg'
import Laravel from '@/components/icons/laravel.svg'
import SQL from '@/components/icons/sql.svg'
import MySQL from '@/components/icons/mysql.svg'
import MongoDB from '@/components/icons/mongo.svg'
import Node from '@/components/icons/node.svg'
import TypeScript from '@/components/icons/typescript.svg'
import Cognos from '@/components/icons/cognos.svg'
import Excel from '@/components/icons/excel.svg'
import AWS from '@/components/icons/aws.svg'
import IBM from '@/components/icons/ibm-cloud.svg'
import WordPress from '@/components/icons/wordpress.svg'
import Salesforce from '@/components/icons/salesforce.svg'
import Word from '@/components/icons/word.svg'
import PowerPoint from '@/components/icons/powerpoint.svg'
import Markdown from '@/components/icons/markdown.svg'
import Notion from '@/components/icons/notion.svg'
import Certifications from '@/components/Certifications'
import Image from 'next/image'

export default function Page() {
  const [showIcons, setShowIcons] = useState(true)
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  const toggleIcons = () => {
    setShowIcons(!showIcons)
  }

  const languages = [
    { name: 'HTML', Icon: HTML },
    { name: 'CSS', Icon: CSS },
    { name: 'JavaScript', Icon: JavaScript },
    { name: 'PHP', Icon: PHP },
    { name: 'Python', Icon: Python },
    { name: 'TypeScript', Icon: TypeScript },
    { name: 'SQL', Icon: SQL },
    { name: 'Markdown', Icon: Markdown },
  ]

  const frameworks = [
    { name: 'Tailwind CSS', Icon: Tailwind },
    { name: 'Node JS', Icon: Node },
    { name: 'React', Icon: React },
    { name: 'Next', Icon: Next },
    { name: 'Vue', Icon: Vue },
    { name: 'Nuxt', Icon: Nuxt },
    { name: 'Django', Icon: Django },
    { name: 'Laravel', Icon: Laravel },
    { name: 'MySQL', Icon: MySQL },
    { name: 'MongoDB', Icon: MongoDB },
    { name: 'AWS', Icon: AWS },
    { name: 'IBM Cloud', Icon: IBM },
    { name: 'IBM Cognos', Icon: Cognos },
    { name: 'WordPress', Icon: WordPress },
    { name: 'Salesforce', Icon: Salesforce },
    { name: 'Word', Icon: Word },
    { name: 'PowerPoint', Icon: PowerPoint },
    { name: 'Excel', Icon: Excel },
    { name: 'Notion', Icon: Notion },
  ]

  const experiences = [
    {
      title: 'AI Data Rater, WeLocalize (Feb ‘24 - Present)',
      tasks: [
        'Following of project-specific guidelines to conduct research on e-commerce data',
        'Evaluating usefulness of filters and results based on research',
        'Rating e-commerce data',
      ],
    },
    {
      title: 'Web Developer (Intern), Town of Deer Lake (Jul ‘23 - Sep ‘23)',
      tasks: [
        "Transitioned the town's website to an updated version of PHP, significantly enhancing site security and backend functionality, while also ensuring the preservation of existing features.",
        'Optimized the website for search engines and improved page loading speed.',
        'Overhauled the business directory, enhancing its functionality and user interface.',
        'Exhibited strong problem-solving abilities by proactively identifying and addressing site issues.',
        'Maintained effective communication with regular progress reports.',
      ],
    },
    {
      title: 'Administrative Assistant (Temp), PCSP Chamber of Commerce (Jul ‘21 - Sep ‘21)',
      tasks: [
        "Managed and updated the organization's WordPress and Squarespace websites, including data entry, image editing, and design contributions.",
        'Supported the Executive Director with diverse administrative tasks, demonstrating flexibility and a broad skill set in office management and web administration.',
      ],
    },
    {
      title: 'Freelance Transcriptionist, Upwork (Jan ‘18 - Jul ‘21)',
      tasks: [
        'Provided high-quality transcription services, focusing on accuracy and timely delivery.',
        'Developed proficiency in fast typing and attention to detail through numerous transcription projects.',
      ],
    },
  ]

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
        <div className="dark:prose-dark prose max-w-none lg:prose-lg">
          <div className="flex items-center justify-between">
            <h2>Skills</h2>
            <button
              onClick={toggleIcons}
              className="rounded border border-gray-200 bg-white px-4 py-1 text-center text-gray-900 shadow-md transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              {showIcons ? 'Show Text' : 'Show Icons'}
            </button>
          </div>
          <div className="text-gray-900 dark:text-white">
            <p>
              <b>Languages:</b>
              <br />
              {showIcons ? (
                <span className="ml-2 space-x-2">
                  {languages.map((lang) => (
                    <i key={lang.name} className="icon-bg inline-block" title={lang.name}>
                      <lang.Icon className="h-6 w-6" />
                    </i>
                  ))}
                </span>
              ) : (
                languages.map((lang) => lang.name).join(' | ')
              )}
            </p>
            <p>
              <b>Frameworks & Tools:</b>
              <br />
              {showIcons ? (
                <span className="ml-2 space-x-2">
                  {frameworks.map((fw) => (
                    <i key={fw.name} className="icon-bg inline-block" title={fw.name}>
                      <fw.Icon className="h-6 w-6" />
                    </i>
                  ))}
                </span>
              ) : (
                frameworks.map((fw) => fw.name).join(' | ')
              )}
            </p>
          </div>

          <hr />

          <h2>Certifications</h2>
          <div>
            <Certifications />
          </div>

          <hr />

          <h2>Education</h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-5 text-gray-900 dark:text-white">
              <Image
                src="/static/images/cna.png" // Path to the college logo
                alt="College of the North Atlantic"
                width={120} // Adjust the size as needed
                height={120}
                className="self-center"
              />
              <div className="self-center">
                <div className="text-2xl font-extrabold">College of the North Atlantic</div>
                <div className="text-lg">Diploma | Enterprise Web Development</div>
                <div className="text-lg">2021 - 2023</div>
              </div>
            </div>
            <div className="flex flex-row gap-5 text-gray-900 dark:text-white">
              <Image
                src="/static/images/cna.png" // Path to the college logo
                alt="College of the North Atlantic"
                width={120} // Adjust the size as needed
                height={120}
                className="self-center"
              />
              <div className="self-center">
                <div className="text-2xl font-extrabold">College of the North Atlantic</div>
                <div className="text-lg">Certificate | Comprehensive Arts & Science</div>
                <div className="text-lg">2019 - 2021</div>
              </div>
            </div>
          </div>

          <hr />

          <h2>Experience</h2>
          <div className="flex flex-col gap-5 text-gray-900 dark:text-white">
            {experiences.map((experience, index) => (
              <div key={index}>
                <div className="text-xl font-bold">{experience.title}</div>
                <ul className="ml-5 list-disc">
                  {experience.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AuthorLayout>
    </>
  )
}
