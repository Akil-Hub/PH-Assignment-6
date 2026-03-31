import React from 'react'
import { IoMdClose } from 'react-icons/io'

const SideNav = ({setIsOpen,isOpen}) => {
  return (
    <aside className={`gradient
     absolute z-50 ${isOpen? '-right-2':'-right-100'} -top-2 h-screen w-60 transition-all duration-300 overflow-hidden`}>
         <IoMdClose size={30}  onClick={()=>setIsOpen(false)} className='absolute top-6 right-7 text-white cursor-pointer active:scale-95 duration-300'/>
          <div className="navbar-center  flex py-20">
                   
          <ul className={`menu ${isOpen ?'menu-vertical':'menu-horizontal'} px-1 text-white items-center   mx-auto font-semibold text-xl`}>
            <li>
              <a>Products</a>
            </li>

            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            
           <div className="flex flex-col gap-3 px-10 mt-5">
            <button className="btn">Login</button>
          <button className="btn bg-linear-to-r from-violet-500 via-purple-500 to-pink-500 text-white">
            Get Started
          </button>
           </div>
          </ul>
          
        </div>
    
        
    </aside>
  )
}

export default SideNav