import React from "react";
import dot from "../assets/dot.png";
import playIcon from "../assets/play.png";
import banner from '../assets/banner.png'
const Banner = () => {
  return (
    <section className="py-20 flex justify-between items-center wrapper gap-10">
      {/* left section */}
      <article className="left w-1/2 space-y-6">

        {/* design text */}
        <div className="bg-[#E1E7FF] w-70 rounded-full flex items-center px-3 gap-2 my-1 py-1">
          <span className="w-3 ">
            <img src={dot} alt="dot.png" />
          </span>
          <h3 className="bg-linear-to-r from-violet-600 to-pink-600  text-transparent bg-clip-text   ">
            {" "}
            New: AI-Powered Tools Available
          </h3>
        </div>
        {/* main heading */}
        <h1 className="font-bold text-6xl text-[#101727]">Supercharge Your Digital Workflow</h1>
        <p className="text-gray-400 leading-5">Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products 
</p>

<div className="flex gap-2 my-2">




  <button className="px-5 py-2 rounded-full bg-white  hover:bg-linear-to-r border-2 border-violet-600 hover:from-violet-800 hover:to-purple-600 transition-all duration-300 active:scale-95 group">
    <span className="bg-linear-to-r from-violet-800 to-purple-600 bg-clip-text text-transparent group-hover:text-white font-semibold transition-all duration-700">
      Explore Products
    </span>
  </button>

<button
  className="px-5 py-2 rounded-full bg-white
    hover:bg-linear-to-r border-2 border-violet-600
    hover:from-violet-800 hover:to-purple-600
    hover:border-transparent transition-all
    duration-300 group
    flex items-center gap-2 active:scale-95"
>
  <img
    src={playIcon}
  />
  <span
    className="bg-gradient-to-r from-violet-800
      to-purple-600 bg-clip-text text-transparent
      group-hover:text-white font-semibold
      transition-colors duration-500"
  >
    Explore Products
  </span>
</button>



</div>
      </article>
{/* Right section */}
<article className="w-1/2 ">
  <img src={banner} alt="bannerImage" className="w-[80%] mx-auto" />
</article>

    </section>
  );
};

export default Banner;
