import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ContactIcons, ContactIconsMobile, Header } from "../components"
import { useEffect, useState } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const [screenSize, setScreenSize] = useState("")

  const handleResize = () => {
    const size = window.screen.width
    size < 768 ? setScreenSize("small") : setScreenSize("large")
  }

  useEffect(() => {
    window.onload = () => handleResize()
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [screenSize])
  return (
    <>
      <Header />
      <Component {...pageProps} />
      {screenSize == "small" ? <ContactIconsMobile /> : <ContactIcons />}
    </>
  )
}

export default MyApp
