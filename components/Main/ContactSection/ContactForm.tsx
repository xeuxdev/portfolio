import { motion } from "framer-motion"
import { contactFormVariant } from "../../../variants/contactVariants"

const ContactForm = () => {
  return (
    <motion.form
      action="https://formsubmit.co/b8e64647abbe4a2a4830ff3022995db4"
      method="POST"
      className="flex flex-col justify-center items-center space-y-6 w-full"
      initial={contactFormVariant.name.init}
      variants={contactFormVariant.name}
      animate={contactFormVariant.name.show}
    >
      <div className="h-14 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
        <input
          type="text"
          name="name"
          placeholder="what's your name?"
          className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-cyan focus:cyan hover:ring-cyan hover:ring-2 rounded-sm bg-gray text-white placeholder:text-text caret-cyan px-4 lg:px-6 text-base lg:text-lg"
          aria-label="enter your name"
          required
        />
      </div>
      <div className="h-14 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
        <input
          type="email"
          name="email"
          placeholder="What's your @email address?"
          className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-cyan focus:cyan hover:ring-cyan hover:ring-2 rounded-sm bg-gray text-white placeholder:text-text caret-cyan px-4 lg:px-6 text-base lg:text-lg"
          required
        />
      </div>
      <div className="h-14 w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
        <input
          type="text"
          name="textarea"
          placeholder="what do you have for me / offer "
          className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-cyan focus:cyan hover:ring-cyan hover:ring-2 rounded-sm bg-gray text-white placeholder:text-text caret-cyan px-4 lg:px-6 text-base lg:text-lg"
          required
        />
        <input type="hidden" name="_captcha" value="false" />
      </div>
      <div className="w-full h-14 md:max-w-md lg:max-w-lg xl:max-w-xl">
        <button
          type="submit"
          aria-label="send me the email"
          className="w-full h-full outline-none rounded-md bg-cyan_dark hover:bg-cyan duration-300 focus-visible:ring-cyan/70 focus-visible:ring-4 focus-visible:bg-cyan"
        >
          Send it to me
        </button>
      </div>
    </motion.form>
  )
}

export default ContactForm
