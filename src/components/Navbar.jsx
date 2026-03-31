import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import SideNav from "./SideNav";

const Navbar = ({ cart }) => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="  sticky top-0 z-50 shadow-md navbar bg-white  ">
      <nav className="navbar bg-base-100  w-full flex justify-between  wrapper ">
        <div className=" w-30">
          <a className="  bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-transparent bg-clip-text font-bold text-2xl  ">
            DigiTools
          </a>
        </div>
        <div className="">
          <ul className="  px-1 hidden md:flex gap-5 font-semibold ">
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
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <CiShoppingCart size={40} />
            <span className="bg-red-500 w-6 h-6    rounded-full absolute top-0 right-0 z-50 flex justify-center items-center text-white ">
              {cart.length}
            </span>
          </div>

          {/* mobile menu  bar  */}


   <SideNav setIsOpen={setIsOpen} isOpen={isOpen} className=""/>


  



         <div className="hidden md:block">
           <button className="btn mr-3">Login</button>
          <button className="btn bg-linear-to-r from-violet-500 via-purple-500 to-pink-500 text-white">
            Get Started
          </button>
         </div>
         
          <FaBars size={27} onClick={()=>setIsOpen(true)}  className=" cursor-pointer active:scale-95 duration-300 block md:hidden"/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
