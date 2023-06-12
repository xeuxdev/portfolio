import { motion } from "framer-motion"
import Link from "next/link"

type Props = {
  name: string
}

const LinkWrapper = ({ name }: Props) => {
  return (
    <Link
      href={`${name == "home" ? "/" : name.toLowerCase().replace(" ", "")}`}
    >
      <a className="text-base hover:text-cyan  text-text capitalize w-fit duration-300 font-normal tracking-wide">
        {name}
      </a>
    </Link>
  )
}

export default LinkWrapper
