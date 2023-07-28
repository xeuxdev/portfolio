import { m } from "framer-motion"
import { contactItemVariant } from "../../../variants/contactVariants"

const ContactIcon = () => {
  return (
    <div className="max-w-xl mx-auto">
      <m.h1
        className="mb-5 text-4xl font-semibold text-center text-cyan md:text-6xl"
        initial={contactItemVariant.heading.init}
        variants={contactItemVariant.heading}
        whileInView={contactItemVariant.heading.show}
        viewport={{ once: true }}
      >
        Get In Touch
      </m.h1>
      <m.p
        className="text-lg text-center text-text md:text-xl"
        initial={contactItemVariant.p1.init}
        variants={contactItemVariant.p1}
        whileInView={contactItemVariant.p1.show}
        viewport={{ once: true }}
      >
        Do you have an Idea about anything? or want to bring your idea or
        presence to the web?. Have a chat with me about your idea via any of the
        links below or send me an email by filling the form below. My inbox is
        always open.
      </m.p>
    </div>
  )
}

export default ContactIcon
