import { m } from "framer-motion"
import Link from "next/link"
import IconLinks from "./IconLinks"
import Github from "./icons/Github"
import LinkedIn from "./icons/LinkedIn"
import Twitter from "./icons/Twitter"

const ContactIconsMobile = () => {
  return (
    <m.div
      className="fixed bottom-0 left-0 z-30 flex items-center justify-between w-full h-6 px-6 py-5 md:hidden bg-gray/30"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 1 },
      }}
    >
      {/* left */}
      <div className="left-0 right-auto flex items-center justify-center border-cyan">
        <ul className="flex space-x-6 list-none lg:flex-col">
          <li className="w-5 h-5">
            <IconLinks link="https://github.com/Headbwoi" name="Github">
              <Github />
            </IconLinks>
          </li>
          <li className="w-5 h-5">
            <IconLinks link="https://linkedin.com/in/xeuxdev" name="Linkedin">
              <LinkedIn />
            </IconLinks>
          </li>
          <li className="w-5 h-5">
            <IconLinks link="https://twitter.com/xeuxdev" name="Twitter">
              <Twitter />
            </IconLinks>
          </li>
        </ul>
      </div>
      {/* right */}
      <div className="left-auto flex items-center justify-center border-cyan">
        <div className="list-none">
          <div className="md:rotate-90">
            <Link
              href={`mailto:xeuxdev@gmail.com`}
              className="text-sm font-semibold duration-200 text-text hover:text-cyan font-pop "
            >
              xeuxdev@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </m.div>
  )
}

export default ContactIconsMobile
