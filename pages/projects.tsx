import { m } from "framer-motion"
import type { NextPage } from "next"
import { HeadSection, PageTitle, ProjectsCard } from "../components"
import { projectVariant } from "../variants/projectVariant"
import projects from "../public/data/projects.json"

const Projects: NextPage = () => {
  const random = () => {
    return Math.floor(Math.random() * 2)
  }
  return (
    <>
      <HeadSection page="Projects" title="Portfolio - Project Page" />
      <main className="relative flex items-center justify-center w-full min-h-screen py-16 overflow-x-hidden font-pop bg-body ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 w-full">
          <PageTitle page="My" addon="Projects" />

          <section className="pt-10 intro lg:pt-20 pb-14">
            <m.h1
              className="text-lg text-text md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              variants={projectVariant}
              whileInView={projectVariant.heading}
              viewport={{ once: true }}
            >
              Here are my personal projects
            </m.h1>
          </section>

          <section className="flex flex-col w-full pt-10 space-y-10 lg:space-y-24 xl:space-y-32">
            {projects?.map((item, index) => (
              <ProjectsCard
                key={index}
                name={item.name}
                image={item.image}
                link={item.link}
                about={item.about}
                builtWith={item.builtWith}
                liveLink={item.liveLink}
                orientation={random()}
              />
            ))}
          </section>
        </div>
      </main>
    </>
  )
}

export default Projects
