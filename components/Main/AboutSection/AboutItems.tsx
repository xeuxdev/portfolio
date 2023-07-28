import { motion } from "framer-motion"
import Image from "next/image"
import { aboutVariant } from "../../../variants/aboutVariant"

const AboutItems = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10 ">
        {/* text */}
        <div className="text lg:flex-[45%]">
          <motion.h1
            className="flex items-start mb-6 space-x-2 text-xl font-normal text-white lg:text-2xl font-pop lg:space-x-3"
            initial={{ opacity: 0, y: 20 }}
            variants={aboutVariant}
            whileInView={aboutVariant.heading}
            viewport={{ once: true }}
          >
            <p>Hi{"👋, "} I am</p>
            <p className="relative font-semibold font-pop text-cyan w-fit">
              Tochukwu John,
            </p>
          </motion.h1>
          {/* info */}
          <div className="mb-10 md:mb-12 lg:mb-0">
            <motion.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p1}
              viewport={{ once: true }}
            >
              A sophomore computer science student, As a Frontend Developer, I
              specialize in building and launching dynamic user interfaces and
              experiences that captivate both clients and companies. I harness
              the power of the latest technologies and design systems to create
              interactive solutions that leave a lasting impression. My primary
              objective is to deliver the best, easiest, and most functional
              long-term solutions that not only meet the requirements of the
              company but also exceed the expectations of clients. With a strong
              commitment to user satisfaction, I strive to create seamless and
              engaging experiences that seamlessly blend aesthetic appeal with
              practical functionality.
            </motion.p>
            <motion.p
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
            </motion.p>
            <motion.p
              className="mb-6 text-lg font-normal text-text lg:text-xl md:mb-11"
              initial={{ opacity: 0, y: 20 }}
              variants={aboutVariant}
              whileInView={aboutVariant.p3}
              viewport={{ once: true }}
            >
              Additionally, i am a lover of open source softwares and i&apos;m
              also looking for internships and projects to boost my skills and
              to get experience in Frontend Development.
            </motion.p>
          </div>
        </div>
        {/* images/illustrsions */}
        <motion.div
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
                layout="fill"
                quality={100}
                placeholder={"blur"}
                blurDataURL={"/images/me.webp"}
              />
            </div>
          </div>
          <div className="absolute h-[28rem] md:w-[105%] md:h-[37.5rem] lg:h-[30rem] xl:h-[34.5rem] w-full top-5 left-3 border-2 border-body z-10 bg-buttonBg rounded-lg group-hover:top-4 group-hover:left-3 duration-500"></div>
        </motion.div>
      </div>
    </>
  )
}

export default AboutItems
