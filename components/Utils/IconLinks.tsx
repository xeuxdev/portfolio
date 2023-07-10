import Link from "next/link"

type Props = {
  name: string
  link: string
  children: React.ReactNode
}

const IconLinks = ({ name, link, children }: Props) => {
  return (
    <Link href={`${link}`} aria-label={name} target={"_blank"}>
      {children}
    </Link>
  )
}

export default IconLinks
