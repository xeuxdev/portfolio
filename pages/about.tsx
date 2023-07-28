import { m } from "framer-motion"
import type { NextPage } from "next"
import { AboutItems, HeadSection, PageTitle, Technologies } from "../components"

const About: NextPage = () => {
  return (
    <>
      <HeadSection title="About Tochukwu John Onuabueke" page="About" />
      <main className="relative flex items-center justify-center w-full min-h-screen py-16 overflow-x-hidden font-pop bg-body ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0">
          <PageTitle page="About" addon="Me" />
          <section className="pt-10 lg:pt-20 pb-14">
            <AboutItems />
          </section>
          {/* technologies */}
          <section className="flex flex-col justify-center pt-7 md:pt-10 lg:pt-14">
            {/* heading */}
            <m.div
              className="mb-4 text-center heading"
              aria-label="Heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            >
              <h2
                className="mb-4 text-2xl font-semibold tracking-wide text-white capitalize lg:text-4xl"
                id="heading"
              >
                technologies that i use
              </h2>
              <p className="text-lg text-text">
                Here are some technologies i am using or have used recently
              </p>
            </m.div>
            {/* techs */}
            <Technologies />
          </section>
        </div>
      </main>
    </>
  )
}

export default About
