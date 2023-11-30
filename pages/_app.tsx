import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ContactIcons, ContactIconsMobile, Header } from "../components"
import { LazyMotion, domAnimation } from "framer-motion"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { Raleway } from "next/font/google"
import { useEffect, useState } from "react"

const poppins = Raleway({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
})

function MyApp({ Component, pageProps }: AppProps) {
  const matches = useMediaQuery("(max-width: 768px)")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>

      <LazyMotion features={domAnimation}>
        <Header />
        <Component {...pageProps} />
        {matches ? <ContactIconsMobile /> : <ContactIcons />}
      </LazyMotion>
    </>
  )
}

export default MyApp
