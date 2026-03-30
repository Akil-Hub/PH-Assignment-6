import React from 'react'
import GetStartCard from './GetStartCard'
import user from '../assets/user.png'
import box from '../assets/package.png'
import rocket from '../assets/rocket.png'
const GetStartedSection = () => {
  return (
   <article className='bg-gray-100 py-20'>
   <div className="text-center">
     <h2 className='text-3xl font-semibold pb-1'>Get Started in 3 Steps</h2>
    <p>Start using premium digital tools in minutes, not hours.</p>
   </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <GetStartCard img={user} title={'Create Amount'} desc={'Sign up for free in seconds. No credit card required to get started.'}/>
        <GetStartCard img={box} title={"Choose Products"} desc={'Browse our catalog and select the tools that fit your needs.'}/>
        <GetStartCard img={rocket} title={'Start Campaign'} desc={'Download and start using your premium tools immediately.'}/>
        
    </div>
   </article>
  )
}

export default GetStartedSection