import type { NextPage } from "next"
import Image from "next/image"
import { HeroSection, HeadSection } from "../components"

const Home: NextPage = () => {
  return (
    <>
      <HeadSection title="My Portfolio - Home Page" page="Home" />

      <main className="relative w-full font-pop bg-body overflow-x-hidden">
        <section className="relative min-h-screen flex justify-center items-center z-20 pt-28 pb-14 font-pop">
          <div className="absolute inset-0 -z-10">
            <Image src={"/bg-hero.png"} alt="" layout="fill" priority />
          </div>
          <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 relative w-full ">
            {/* hero items' */}
            <HeroSection />
          </div>
        </section>
      </main>

      <footer className="relative z-30 font-pop"></footer>
    </>
  )
}

export default Home
