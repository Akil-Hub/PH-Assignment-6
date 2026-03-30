import React from 'react'

const GetStartCard = ({img,title,desc}) => {
  return (
    <div className='rounded-md p-4 flex flex-col text-center bg-white mt-5 py-10 shadow-lg hover:scale-105 duration-300 active:scale-95 cursor-pointer'>
        <span className='mx-auto'>
        <img src={img}/>

        </span>
        <h3 className='text-2xl font-semibold py-2'>{title}</h3>
        <p className='text-gray-600'>{desc}</p>

    </div>
  )
}

export default GetStartCard