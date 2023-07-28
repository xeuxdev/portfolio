import Image from "next/image"
import Link from "next/link"
import { m } from "framer-motion"
import { menuVariant, navItem } from "../../variants/menuVariant"
import { Download } from "../Main/icons"

type Props = {
  handleMenuToggle: () => void
}

const Mobile = ({ handleMenuToggle }: Props) => {
  const linkArray = ["home", "about", "projects", "contact me"]
  return (
    <m.div
      className="absolute top-0 right-0 z-50 w-3/4 h-screen overflow-hidden md:hidden bg-veryDark"
      initial={{ opacity: 0 }}
      variants={menuVariant}
      whileInView={"show"}
      exit={"exit"}
    >
      <div className="w-full px-6 md:px-10">
        <div className="absolute right-6 top-6 ">
          {/* hamburger */}
          <div className="lg:hidden" onClick={handleMenuToggle}>
            <Image
              src={"/icons/close.svg"}
              alt="Open Menu Icon"
              aria-label="open mobile menu"
              width={20}
              height={25}
            />
          </div>
        </div>

        {/* links */}
        <m.div
          className="flex flex-col items-center justify-center h-screen space-y-7"
          initial={{ opacity: 0 }}
          whileInView={navItem.show}
          exit={navItem.exit}
        >
          {linkArray.map((item, index) => (
            <LinkWrapper
              key={index}
              name={item}
              handleMenuToggle={handleMenuToggle}
            />
          ))}

          <div className="flex justify-center mt-10">
            <button
              className={`flex items-center justify-center rounded-md px-5 h-11 bg-buttonBg  hover:bg-cyan duration-300 group cursor-pointer`}
            >
              <Link href={`/docs/resume.pdf`} target="_blank" rel="noreferrer">
                <span className="mr-3 text-base font-semibold text-white capitalize group:hover:mr-1">
                  resume
                </span>
              </Link>
              <Download height="4" width="4" />
            </button>
          </div>
        </m.div>
      </div>
      Mobile
    </m.div>
  )
}

export default Mobile

type linkProp = {
  name: string
  handleMenuToggle: () => void
}

const LinkWrapper = ({ name, handleMenuToggle }: linkProp) => {
  return (
    <Link
      href={`${name == "home" ? "/" : name.toLowerCase().replace(" ", "")}`}
      className="flex items-center space-x-4 text-lg capitalize duration-300 hover:text-cyan text-text w-fit"
      onClick={handleMenuToggle}
    >
      {name}
    </Link>
  )
}
