import { motion } from "framer-motion"
import Image from "next/image"

type TechCardProps = {
  name: string
}

const Technologies = () => {
  const CardItems: string[] = [
    "html5",
    "css3",
    "sass",
    "git",
    "github",
    "javascript",
    "react",
    "typescript",
    "nextjs",
    "nodejs",
    "express",
    "mongodb",
    "figma",
  ]
  return (
    <>
      <div className="w-full pt-10 mx-auto">
        <motion.div
          className="grid grid-cols-3 lg:grid-cols-4 gap-4 w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
          {CardItems.map((item, index) => (
            <TechCard name={item} key={index} />
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Technologies

function TechCard({ name }: TechCardProps) {
  return (
    <div className="h-24 md:h-32 lg:h-36 rounded-md bg-buttonBg grid place-items-center cursor-pointer hover:scale-105 duration-200">
      <motion.div
        className="w-7 h-7 md:h-9 md:w-9 lg:w-10 lg:h-10 relative"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.2 },
        }}
        viewport={{ once: true }}
      >
        <Image src={`/images/${name}.svg`} alt={`${name}`} layout="fill" />
      </motion.div>
      <motion.div
        className="text-white text-base md:text-xl lg:text-2xl font-normal tracking-wide capitalize"
        initial={{ opacity: 0, y: -15 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, delay: 0.4 },
        }}
      >
        {name}
      </motion.div>
    </div>
  )
}
