import { m } from "framer-motion"
import Image from "next/image"
import { aboutVariant } from "../../../variants/aboutVariant"

const AboutItems = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10 ">
        {/* text */}
        <div className="text lg:flex-[45%]">
          <m.h1
            className="flex items-start mb-6 space-x-2 text-xl font-normal text-white lg:text-2xl font-pop lg:space-x-3"
            initial={{ opacity: 0, y: 20 }}
            variants={aboutVariant}
            whileInView={aboutVariant.heading}
            viewport={{ once: true }}
          >
            <p>Hi{"👋, "} I&apos;m</p>
            <p className="relative font-semibold font-pop text-cyan w-fit">
              Tochukwu John,
            </p>
          </m.h1>
          {/* info */}
          <div className="mb-10 md:mb-12 lg:mb-0">
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p1}
              viewport={{ once: true }}
            >
              A penultimate computer science student, As a results and performance
              driven Frontend Developer with 2+ years of professional
              experience, specializing in crafting interactive and visually
              appealing user interfaces. Proficient in leveraging the latest
              technologies and design systems, my goal is to deliver superior,
              user-centric solutions that align with both client and company
              requirements.
            </m.p>
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p2}
              viewport={{ once: true }}
            >
              My approach involves a deep understanding of project requirements,
              collaborating closely with cross-functional teams to make informed
              decisions that ensure optimal functionality. Committed to
              delivering the best and most user-friendly experiences, I am adept
              at meeting project goals efficiently and on schedule.
            </m.p>
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p2}
              viewport={{ once: true }}
            >
              Transformng my creativity and knowledge into websites have been my
              passion for months now. During this time, I have helped various
              clients establish their presence online. I also love learning new
              technologies and frameworks.
            </m.p>
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl md:mb-11"
              initial={{ opacity: 0, y: 20 }}
              variants={aboutVariant}
              whileInView={aboutVariant.p3}
              viewport={{ once: true }}
            >
              Additionally, i am a lover of open source softwares and i&apos;m
              also looking for internships and projects to boost my skills and
              to get experience in Frontend Development.
            </m.p>
          </div>
        </div>
        {/* images/illustrsions */}
        <m.div
          className="lg:flex-[40%] w-full md:max-w-md relative cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          variants={aboutVariant}
          whileInView={aboutVariant.image}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-full h-[28rem] md:h-[37rem] lg:h-[30rem] xl:h-[34rem] relative rounded-md overflow-hidden border-2 border-cyan backdrop-blur-sm bg-cyan/20 z-20 ">
            <div className="relative w-full h-full duration-500 grayscale group-hover:grayscale-0">
              <Image
                src={"/images/me.webp"}
                alt="moi"
                priority={true}
                fill
                quality={100}
                placeholder={"blur"}
                blurDataURL={"/images/me.webp"}
              />
            </div>
          </div>
          <div className="absolute h-[28rem] md:w-[105%] md:h-[37.5rem] lg:h-[30rem] xl:h-[34.5rem] w-full top-5 left-3 border-2 border-body z-10 bg-buttonBg rounded-lg group-hover:top-4 group-hover:left-3 duration-500"></div>
        </m.div>
      </div>
    </>
  )
}

export default AboutItems
