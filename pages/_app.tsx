import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ContactIcons, ContactIconsMobile, Header } from "../components"
import { LazyMotion, domAnimation } from "framer-motion"
import { useMediaQuery } from "../hooks/useMediaQuery"

function MyApp({ Component, pageProps }: AppProps) {
  const matches = useMediaQuery("(min-width: 768px)")

  return (
    <>
      <LazyMotion features={domAnimation}>
        <Header />
        <Component {...pageProps} />
        {!matches ? <ContactIconsMobile /> : <ContactIcons />}
      </LazyMotion>
    </>
  )
}

export default MyApp
