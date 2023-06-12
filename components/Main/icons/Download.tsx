import React from "react"

type Props = {
  width: string
  height: string
}

const Download = ({ width, height }: Props) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-text w-${width} h-${height}`}
    >
      <path
        d="M1.55908 12.0276V12.9095C1.55908 13.6112 1.83782 14.2841 2.33398 14.7803C2.83014 15.2764 3.50307 15.5552 4.20475 15.5552H13.0236C13.7253 15.5552 14.3982 15.2764 14.8944 14.7803C15.3906 14.2841 15.6693 13.6112 15.6693 12.9095V12.0276M12.1417 8.50006L8.61419 12.0276M8.61419 12.0276L5.08664 8.50006M8.61419 12.0276V1.44495"
        stroke="white"
        strokeWidth="2.64567"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Download
