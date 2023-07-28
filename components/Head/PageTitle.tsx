import { m } from "framer-motion"

type Props = {
  page: string
  addon: string
}

const PageTitle = ({ page, addon }: Props) => {
  return (
    <m.div
      className="flex items-center pt-16 space-x-5 lg:pt-28"
      aria-label="heading"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.3 } }}
    >
      <p className="text-3xl font-bold text-white md:text-4xl" id="heading">
        {page}{" "}
        <span className="relative text-cyan after:bg-cyan after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1">
          {addon}
        </span>
      </p>
    </m.div>
  )
}

export default PageTitle
