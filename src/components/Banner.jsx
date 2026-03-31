import React from "react";
import dot from "../assets/dot.png";
import playIcon from "../assets/Play.png";
import banner from '../assets/banner.png'
import Button from "./common/Button";
const Banner = () => {
  return (
    <section className="md:py-20 py-10 flex flex-col md:flex-row  justify-between items-center wrapper gap-10">
      {/* left section */}
      <article className="left md:w-1/2 space-y-6">

        {/* design text */}
        <div className="bg-[#E1E7FF] md:w-70 md:text-base text-xs w-60  rounded-full flex items-center px-3 gap-2 my-1 py-1 mx-auto md:mx-0">
          <span className="w-3 ">
            <img src={dot} alt="dot.png" />
          </span>
          <h3 className="bg-linear-to-r from-violet-600 to-pink-600  text-transparent bg-clip-text   ">
            {" "}
            New: AI-Powered Tools Available
          </h3>
        </div>
        {/* main heading */}
        <h1 className="font-bold md:text-6xl text-2xl text-center md:text-left text-[#101727]">Supercharge Your Digital Workflow</h1>
        <p className="text-gray-400 leading-5 md:text-base md:text-left text-xs text-center">Access premium AI tools, design assets, templates, and productivity
software—all in one place. Start creating faster today.

Explore Products 
</p>

<div className="flex gap-2 my-2">




  
<div className="flex flex-col md:flex-row justify-center items-center  gap-4 text-center mx-auto md:mx-0 ">
  <Button title={'Explore Products'}/>
<Button title={'Watch Demo'} playIcon={playIcon}/>
</div>



</div>
      </article>
{/* Right section */}
<article className="md:w-1/2 ">
  <img src={banner} alt="bannerImage" className="w-[80%] mx-auto" />
</article>

    </section>
  );
};

export default Banner;
