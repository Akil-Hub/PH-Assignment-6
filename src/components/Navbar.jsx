import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({cart}) => {
  return (

    <header className="  sticky top-0 z-50 shadow-md navbar bg-white ">

    <nav className="navbar bg-base-100  w-full   wrapper ">
      <div className="navbar-start">
        <a className="  bg-linear-to-r from-[#4F39F6] to-[#9514FA] inline-block text-transparent bg-clip-text font-bold text-2xl  ">DigiTools</a>
      </div>
      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal px-1">
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
      <div className="navbar-end gap-3">
<div className="relative">
        <CiShoppingCart size={45} />
        <span className="bg-red-500 w-6 h-6    rounded-full absolute top-0 right-0 z-50 flex justify-center items-center ">{cart.length}</span>

</div>
        <button className="btn">Login</button>
        <button className="btn bg-linear-to-r from-violet-500 via-purple-500 to-pink-500 text-white">Get Started</button>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
