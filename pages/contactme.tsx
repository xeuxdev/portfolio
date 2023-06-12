import type { NextPage } from "next"
import { ContactForm, ContactItems, HeadSection } from "../components"

const ContactMe: NextPage = () => {
  return (
    <>
      <HeadSection page="Contact" title="Portfolio - Contact Page" />
      <main className="relative font-pop  min-h-screen w-full bg-body overflow-x-hidden py-16 ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0 mx-auto">
          <div className="flex items-center justify-center flex-col">
            <section className="pt-11 md:pt-20 lg:pt-24 pb-14">
              <ContactItems />
            </section>
            <section className="pt-7 md:pt-10 lg:pt-14 flex justify-center flex-col w-full">
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

export default ContactMe
