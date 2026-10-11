interface HeroProps {
  isExploded: boolean
}

const Hero = ({ isExploded }: HeroProps) => {
  return (
    <>
      <section
        className={
          isExploded ? 'card-neon prose-neon' : 'card-brutal prose-manga'
        }
      >
        <h1
          className={`text-6xl md:text-8xl mb-4 pb-4 border-b-4 ${
            isExploded ? 'border-red-600' : 'border-black'
          }`}
        >
          Tomjid Huda
        </h1>
        <div
          className={`not-prose text-xl ${isExploded ? 'badge-neon' : 'badge-brutal'}`}
        >
          Web Developer
        </div>
        <p className="font-bold text-xl lead">
          Building web applications, drafting schemas, and tweaking Linux
          environments until they break.
        </p>
      </section>
    </>
  )
}

export default Hero
