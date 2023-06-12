import { motion } from "framer-motion"
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
      <main className="relative font-pop  min-h-screen flex items-center justify-center  w-full bg-body overflow-x-hidden py-16 ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 w-full">
          <PageTitle page="My" addon="Projects" />

          <section className="intro pt-10 lg:pt-20 pb-14">
            <motion.h1
              className="text-text text-lg md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              variants={projectVariant}
              whileInView={projectVariant.heading}
              viewport={{ once: true }}
            >
              Here are a few of the projects i have done{" "}
            </motion.h1>
          </section>

          <section className="pt-10 flex flex-col space-y-10 lg:space-y-24 xl:space-y-32 w-full">
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
