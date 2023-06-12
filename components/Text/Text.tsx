import React from "react"

type Props = {
  text: string
}

const Text = ({ text }: Props) => {
  return (
    <span className="text-cyan font-bold font-pop inline-block">{text}</span>
  )
}

export default Text
