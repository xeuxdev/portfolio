import { m } from "framer-motion"
import { contactFormVariant } from "../../../variants/contactVariants"

const ContactForm = () => {
  return (
    <m.form
      action="https://formsubmit.co/b8e64647abbe4a2a4830ff3022995db4"
      method="POST"
      className="flex flex-col items-center justify-center w-full space-y-6"
      initial={contactFormVariant.name.init}
      variants={contactFormVariant.name}
      animate={contactFormVariant.name.show}
    >
      <div className="w-full h-14 md:max-w-md lg:max-w-lg xl:max-w-xl">
        <input
          type="text"
          name="name"
          placeholder="what's your name?"
          className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-cyan focus:cyan hover:ring-cyan hover:ring-2 rounded-sm bg-gray text-white placeholder:text-text caret-cyan px-4 lg:px-6 text-base lg:text-lg"
          aria-label="enter your name"
          required
        />
      </div>
      <div className="w-full h-14 md:max-w-md lg:max-w-lg xl:max-w-xl">
        <input
          type="email"
          name="email"
          placeholder="What's your @email address?"
          className="h-full w-full outline-none focus-visible:ring-[3px] focus-visible:ring-cyan focus:cyan hover:ring-cyan hover:ring-2 rounded-sm bg-gray text-white placeholder:text-text caret-cyan px-4 lg:px-6 text-base lg:text-lg"
          required
        />
      </div>
      <div className="w-full h-14 md:max-w-md lg:max-w-lg xl:max-w-xl">
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
          className="w-full h-full duration-300 rounded-md outline-none bg-cyan hover:bg-cyan focus-visible:ring-cyan/70 focus-visible:ring-4 focus-visible:bg-cyan"
        >
          Send it to me
        </button>
      </div>
    </m.form>
  )
}

export default ContactForm
