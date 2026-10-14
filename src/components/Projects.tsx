import type { isExplodedProps } from '#/types/isExploded'

const PROJECTS = [
  {
    title: 'project 1',
    tag: 'loren ipsum',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'project 1',
    tag: 'loren ipsum',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'project 1',
    tag: 'loren ipsum',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'project 1',
    tag: 'loren ipsum',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const Projects = ({ isExploded }: isExplodedProps) => {
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
        Manifestations
      </h2>
      <div className="not-prose space-y-8">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className={`border-4 p-6 ${
              isExploded
                ? 'border-red-500 prose-neon'
                : 'border-black prose-manga'
            }`}
          >
            <h3 className="text-4xl mb-2">{project.title}</h3>
            <p
              className={`not-prose text-sm ${isExploded ? 'badge-neon' : 'badge-brutal'}`}
            >
              {project.tag}
            </p>
            <p className="font-bold">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
