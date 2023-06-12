import { motion } from "framer-motion"
import Link from "next/link"
import IconLinks from "./IconLinks"
import Github from "./icons/Github"
import LinkedIn from "./icons/LinkedIn"
import Twitter from "./icons/Twitter"

const ContactIcons = () => {
  return (
    <motion.div
      className="hidden md:block"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 1 },
      }}
    >
      {/* left */}
      <div className="flex items-center justify-center py-0 px-0 w-10 border-cyan fixed z-30 bottom-0 lg:left-3 left-10 right-auto">
        <ul className="flex lg:flex-col space-x-6 lg:space-x-0 lg:space-y-6 list-none  after:hidden lg:after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-4  ">
          <motion.li
            className="w-5 h-5"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <IconLinks link="https://github.com/Headbwoi" name="Github">
              <Github />
            </IconLinks>
          </motion.li>
          <motion.li
            className="w-5 h-5"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <IconLinks
              link="https://linkedin.com/in/tochukwu-john-19786b244"
              name="Github"
            >
              <LinkedIn />
            </IconLinks>
          </motion.li>
          <motion.li
            className="w-5 h-5"
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <IconLinks link="https://twitter.com/Headbwoi_1" name="Github">
              <Twitter />
            </IconLinks>
          </motion.li>
        </ul>
      </div>
      {/* right */}
      <div className="flex items-center justify-center py-0 px-0 w-10 border-cyan right-0 fixed z-30 bottom-0 lg:right-3 xl:right-10 left-auto">
        <div className="list-none after:block after:h-24 after:w-[2px] after:mx-auto after:bg-white after:mt-20 ">
          <div className="md:rotate-90">
            <Link href={`mailto:xeuxdev@gmail.com`}>
              <a className="text-text hover:text-cyan duration-200 font-pop text-sm font-semibold ">
                xeuxdev@gmail.com
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactIcons
