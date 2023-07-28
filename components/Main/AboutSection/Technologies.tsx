import { m } from "framer-motion"
import Image from "next/image"

type TechCardProps = {
  name: string
}

const Technologies = () => {
  const CardItems: string[] = [
    "react",
    "javascript",
    "typescript",
    "nextjs",
    "tailwindcss",
    "nodejs",
    "express",
    "vue",
    "mongodb",
    "firebase",
    "git",
    "github",
    "figma",
    "html5",
    "css3",
    "sass",
  ]
  return (
    <>
      <div className="w-full pt-10 mx-auto">
        <m.div
          className="grid w-full grid-cols-3 gap-4 lg:grid-cols-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
          {CardItems.map((item, index) => (
            <TechCard name={item} key={index} />
          ))}
        </m.div>
      </div>
    </>
  )
}

export default Technologies

function TechCard({ name }: TechCardProps) {
  return (
    <div className="grid h-24 duration-200 rounded-md cursor-pointer md:h-32 lg:h-36 bg-buttonBg place-items-center hover:scale-105">
      <m.div
        className="relative w-7 h-7 md:h-9 md:w-9 lg:w-10 lg:h-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <Image src={`/images/${name}.svg`} alt={`${name}`} layout="fill" />
      </m.div>
      <m.div
        className="text-base font-normal tracking-wide text-white capitalize md:text-xl lg:text-2xl"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.4 },
        }}
      >
        {name}
      </m.div>
    </div>
  )
}
