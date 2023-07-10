import Link from "next/link"

type Props = {
  name: string
}

const LinkWrapper = ({ name }: Props) => {
  return (
    <Link
      href={`${name == "home" ? "/" : name.toLowerCase().replace(" ", "")}`}
      className="text-base hover:text-cyan  text-text capitalize w-fit duration-300 font-normal tracking-wide"
    >
      {name}
    </Link>
  )
}

export default LinkWrapper
