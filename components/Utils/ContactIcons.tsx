import { m } from "framer-motion"
import Link from "next/link"
import IconLinks from "./IconLinks"
import Github from "./icons/Github"
import LinkedIn from "./icons/LinkedIn"
import Twitter from "./icons/Twitter"

const ContactIcons = () => {
  return (
    <m.div
      className="hidden md:block"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 1 },
      }}
    >
      {/* left */}
      <div className="fixed bottom-0 right-auto z-30 flex items-center justify-center w-10 px-0 py-0 border-cyan lg:left-3 left-10">
        <ul className="flex lg:flex-col space-x-6 lg:space-x-0 lg:space-y-6 list-none  after:hidden lg:after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-4  ">
          <m.li
            className="w-5 h-5"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <IconLinks link="https://github.com/xeuxdev" name="Github">
              <Github />
            </IconLinks>
          </m.li>
          <m.li
            className="w-5 h-5"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <IconLinks link="https://linkedin.com/in/xeuxdev" name="Linkedin">
              <LinkedIn />
            </IconLinks>
          </m.li>
          <m.li
            className="w-5 h-5"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <IconLinks link="https://twitter.com/xeuxdev" name="Twitter">
              <Twitter />
            </IconLinks>
          </m.li>
        </ul>
      </div>
      {/* right */}
      <div className="fixed bottom-0 right-0 left-auto z-30 flex items-center justify-center w-10 px-0 py-0 border-cyan lg:right-3 xl:right-10">
        <div className="list-none after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-20 ">
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

export default ContactIcons
