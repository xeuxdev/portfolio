import type { NextPage } from "next"
import { HeroSection, HeadSection } from "../components"

const Home: NextPage = () => {
  return (
    <>
      <HeadSection title="Tochukwu John" page="Home" />

      <main className="relative w-full overflow-x-hidden font-pop bg-body bg-[url('/bg-hero.webp')]">
        <section className="relative z-20 flex items-center justify-center min-h-screen pt-28 pb-14 font-pop">
          <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 relative w-full ">
            <HeroSection />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
