interface ContactProps {
  isExploded: boolean
}

const Contact = ({ isExploded }: ContactProps) => {
  const buttonStyle = isExploded
    ? 'grid-item-neon px-6'
    : 'grid-item-brutal px-6'

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
        Telepathy / Contact
      </h2>
      <p className="font-bold text-xl mb-6">
        Open for full-stack collaborations, backend architecture, or open-source
        tooling.
      </p>
      <div className="not-prose flex flex-wrap gap-4 text-lg">
        <a
          href="https://github.com/TOMJID"
          target="_blank"
          rel="noreferrer"
          className={buttonStyle}
        >
          GitHub
        </a>
        <a href="mailto:codingtom@gmail.com" className={buttonStyle}>
          Send Signal
        </a>
      </div>
    </section>
  )
}

export default Contact
