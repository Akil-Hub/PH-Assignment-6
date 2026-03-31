import React from 'react'

const Button = ({title,className,playIcon}) => {
  return (
    <button
      className="px-5 py-2 rounded-full bg-white
        hover:bg-linear-to-r border-2 border-violet-600
        hover:from-violet-800 hover:to-purple-600
        hover:border-transparent transition-all
        duration-300 group
        flex items-center gap-2 active:scale-95 w-fit"
    >
      <img
        src={playIcon? playIcon:null}
      />
      <span
        className="bg-gradient-to-r from-violet-800
          to-purple-600 bg-clip-text text-transparent
          group-hover:text-white font-semibold
          transition-colors duration-500"
      >
       {title}
      </span>
    </button>
  )
}

export default Button