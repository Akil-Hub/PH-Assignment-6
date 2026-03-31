import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101727] py-20">
      <section className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_2fr]  gap-10 wrapper justify-items-center">
        <div className="px-5">
          <h4 className="text-gray-100 text-3xl font-semibold">DigiTools</h4>
          <p className="text-gray-400 py-3">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="space-y-3 text-gray-400">
          <h4 className="text-xl text-gray-100 font-semibold">Product</h4>
          <h6>
            <a href="">Features</a>
          </h6>
          <h6>
            <a href="">Pricing</a>
          </h6>
          <h6>
            <a href="">Templates</a>
          </h6>
          <h6>
            <a href="">Integrations</a>
          </h6>
        </div>
        <div className="space-y-3 text-gray-400 ">
          <h4 className="text-xl   text-gray-100 font-semibold">Company</h4>
          <h6>
            <a href="">About</a>
          </h6>
          <h6>
            <a href="">Blog</a>
          </h6>
          <h6>
            <a href="">Careers</a>
          </h6>
          <h6>
            <a href="">Press</a>
          </h6>
        </div>
        <div className="space-y-3 text-gray-400">
          <h4 className="text-xl text-gray-100 font-semibold">Resources</h4>
          <h6>
            <a href="">Documentation</a>
          </h6>
          <h6>
            <a href="">Help Center</a>
          </h6>
          <h6>
            <a href="">Community</a>
          </h6>
          <h6>
            <a href="">Contact</a>
          </h6>
        </div>
        <div className=" text-gray-400 col-span-2 md:col-span-1">
          <h4 className="text-xl text-gray-100 font-semibold">Social Links</h4>
          <div className="flex gap-4 mt-4 text-3xl text-white">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </section>

      <hr className="text-gray-600 py-1 my-3" />

      <section className="text-gray-400 flex flex-col md:flex-row wrapper gap-5 md:gap-0 justify-between">
        <div className="md:text-base text-sm">© 2026 Digitools. All rights reserved.</div>
        <div className="flex gap-5 text-xs md:text-base">
          <h4>Privacy Policy </h4>
          <h4>Terms of Service </h4> 
          <h4>Cookies </h4>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
