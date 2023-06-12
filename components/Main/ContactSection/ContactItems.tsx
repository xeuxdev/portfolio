import { motion } from "framer-motion"
import { contactItemVariant } from "../../../variants/contactVariants"

const ContactIcon = () => {
  return (
    <div className="max-w-xl mx-auto">
      <motion.h1
        className="text-center text-cyan text-4xl md:text-6xl font-semibold mb-5"
        initial={contactItemVariant.heading.init}
        variants={contactItemVariant.heading}
        whileInView={contactItemVariant.heading.show}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h1>
      <motion.p
        className="text-text text-lg md:text-xl text-center"
        initial={contactItemVariant.p1.init}
        variants={contactItemVariant.p1}
        whileInView={contactItemVariant.p1.show}
        viewport={{ once: true }}
      >
        Do you have an Idea about anything? or want to bring your idea or
        presence to the web?. Have a chat with me about your idea via any of the
        links below or send me an email by filling the form below. My inbox is
        always open.
      </motion.p>
    </div>
  )
}

export default ContactIcon
