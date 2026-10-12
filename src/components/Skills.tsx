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
        {SKILLS.map((skill) => (
          <div
            key={skill}
            className={isExploded ? 'grid-item-neon' : 'grid-item-brutal'}
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
