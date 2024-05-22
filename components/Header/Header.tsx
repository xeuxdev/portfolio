import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Desktop, Mobile } from "../Navigation/index"
import { AnimatePresence, m } from "framer-motion"
import { Download } from "../Main/icons"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuToggle = () => {
    isOpen === true ? setIsOpen(!isOpen) : setIsOpen(!isOpen)
  }
  useEffect(() => {
    const body = document.querySelector("body")

    isOpen === true
      ? body?.classList.add("no-scroll")
      : body?.classList.remove("no-scroll")
  }, [isOpen])

  return (
    <header className="flex items-center justify-center  w-full h-16 md:h-20 lg:h-[5rem] bg-body/80 -mb-[1px] fixed top-0 left-0 z-50 shadow-lg px-6 md:px-10 lg:px-14 backdrop-blur-md">
      <nav className="flex items-center justify-between w-full ">
        {/* icon */}
        <Link href={"/"}>
          <m.div
            className="relative w-8 h-8 cursor-pointer"
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { duration: 0.3 } }}
          >
            <Image
              src={"/icons/logo.svg"}
              layout="fill"
              alt="logo"
              priority={true}
            />
          </m.div>
        </Link>

        {/* desktop link */}
        <div className="items-center hidden space-x-8 md:flex">
          <Desktop />
          {/* button */}
          <div className="hidden cta md:flex">
            <m.button
              className={`flex items-center justify-center rounded-md px-5 h-11 bg-buttonBg  hover:bg-cyan_dark duration-300 group cursor-pointer`}
              initial={{ y: -100 }}
              animate={{ y: 0, transition: { duration: 0.3, delay: 0.1 } }}
            >
              <Link href={`https://docs.google.com/document/d/1mWh65035Tcg1RFk-FHXDbOZ7TFHqjc7P-SuRcjNEqO8`} target="_blank" rel="noreferrer">
                <span className="mr-3 text-base font-normal tracking-wide text-white capitalize group:hover:mr-1">
                  resume
                </span>
              </Link>
              <Download height="4" width="4" />
            </m.button>
          </div>
        </div>

        {/* hamburger */}
        <m.div
          className="relative w-10 h-5 md:hidden"
          onClick={handleMenuToggle}
          initial={{ x: 100 }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
        >
          <Image
            src={"/icons/hamburger.svg"}
            layout="fill"
            alt="Open Menu Icon"
            aria-label="open mobile menu"
          />
        </m.div>

        {/* mobile menu */}
        <AnimatePresence
          initial={false}
          mode={"wait"}
          onExitComplete={() => null}
        >
          {isOpen && <Mobile handleMenuToggle={handleMenuToggle} />}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
