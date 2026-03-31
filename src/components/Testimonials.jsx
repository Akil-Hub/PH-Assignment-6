import React from 'react'

const Testimonials = () => {
  return (
    <section className='bg-linear-to-r from-violet-800 to-purple-600 py-6 mb-20'>

        <article className="wrapper grid gap-4 grid-cols-1 md:grid-cols-3 items-center place-items-center">

            <div className='w-70 md:border-r border-gray-300  text-center md:text-left'>
                <h4 className='text-4xl font-semibold text-white'>50K+</h4>
                <p className='text-gray-100 py-1 text-xl'>Active Users</p> 
            </div>
            <div className='w-70 md:border-r border-gray-300 text-center md:text-left'>
                <h4 className='text-4xl font-semibold text-white'>200+</h4>
                <p className='text-gray-100 py-1 text-xl'>Premium Tools</p> 
            </div>
            <div className='w-40 text-center md:text-left '>
                <h4 className='text-4xl font-semibold text-white'>4.9</h4>
                <p className='text-gray-100 py-1 text-xl'>Ratting</p> 
            </div>



             
        </article>
        

    </section>
  )
}

export default Testimonials