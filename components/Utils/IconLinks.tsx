import Link from "next/link"

type Props = {
  name: string
  link: string
  children: React.ReactNode
}

const IconLinks = ({ name, link, children }: Props) => {
  return (
    <Link href={`${link}`}>
      <a aria-label={name} target={"_blank"}>
        {children}
      </a>
    </Link>
  )
}

export default IconLinks
