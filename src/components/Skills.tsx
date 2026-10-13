import { useState } from 'react'

interface SkillsProps {
  isExploded: boolean
}

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'MongoDB',
  'SQL',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Bootstrap',
  'Git',
  'GitHub',
  'REST APIs',
  'GraphQL',
]

const Skills = ({ isExploded }: SkillsProps) => {
  const [showAll, setShowAll] = useState(false)

  const displayedSkills = showAll ? SKILLS : SKILLS.slice(0, 4)

  return (
    <section
      className={
        isExploded ? 'card-neon prose-neon' : 'card-brutal prose-manga'
      }
    >
      <h2
        className={`text-5xl mb-8 border-b-4 pb-4 ${
          isExploded ? 'border-red-600' : 'border-black'
        }`}
      >
        Arsenal
      </h2>

      <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 text-xl">
        {displayedSkills.map((skill) => (
          <div
            key={skill}
            className={isExploded ? 'grid-item-neon' : 'grid-item-brutal'}
          >
            {skill}
          </div>
        ))}
      </div>

      {SKILLS.length > 4 && (
        <div className="mt-8 flex justify-center not-prose">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`px-8 py-3 text-xl uppercase tracking-widest ${
              isExploded ? 'grid-item-neon' : 'grid-item-brutal'
            }`}
          >
            {showAll ? 'Collapse' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  )
}

export default Skills
