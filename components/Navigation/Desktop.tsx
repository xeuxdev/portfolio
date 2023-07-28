import { m } from "framer-motion"
import LinkWrapper from "./LinkWrapper"

const Desktop = () => {
  const linkArray = ["home", "about", "projects", "contact me"]
  return (
    <m.div
      className="flex items-center space-x-8 h-[5.375rem]"
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.3, delay: 0.2 } }}
    >
      {linkArray.map((item, index) => (
        <LinkWrapper key={index} name={item} />
      ))}
    </m.div>
  )
}

export default Desktop
