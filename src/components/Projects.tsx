interface ProjectsProps {
  isExploded: boolean
}

const PROJECTS = [
  {
    title: 'click-script',
    tag: 'VS Code Extension',
    description:
      'Custom VS Code Marketplace extension that adds execution buttons to streamline running npm, pnpm, yarn, and bun scripts directly from the editor.',
  },
  {
    title: 'FoodHub',
    tag: 'Next.js • Express • Prisma',
    description:
      'Full-stack meal ordering platform featuring relational PostgreSQL schemas, modular API controllers, and Better Auth integration.',
  },
  {
    title: 'todo-cli',
    tag: 'Node.js • TypeScript • Prisma',
    description:
      'Interactive command-line task manager utilizing Commander, Inquirer prompts, short UUID displays, and Prisma database actions.',
  },
]

const Projects = ({ isExploded }: ProjectsProps) => {
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
