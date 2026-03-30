import { Check, Dot } from "lucide-react";
import React from "react";

const PricingCard = ({pricing}) => {
  const {
  name,
  description,
  price,
  period,
  tag,
  tagType,
  features,
  services,
  buttonText
} = pricing
  return (
    <article className="group p-0.5 rounded-2xl hover:bg-linear-to-r hover:from-violet-600 hover:to-purple-600 transition-colors duration-500  shadow-xl border-violet-600 border-2 hover:scale-[1.02] hover:text-white ">

      <div className="h-full flex flex-col justify-between  rounded-2xl p-6   ">

        {}
        <div>
      

          {/* Title */}
          <h3 className="text-2xl font-bold mt-3 group-hover:text-white">
            {name}
          </h3>

          <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-200">
            {description}
          </p>

          {/* Price */}
          <div className="mt-4">
            <span className="text-3xl font-bold group-hover:text-white">
              {price === 0 ? "Free" : `$${price}`}
            </span>
              <span className="text-sm text-gray-500 ml-1 group-hover:text-gray-200">
                /{period}
              </span>
            
          </div>

          {/* Features */}
          <ul className="mt-4 space-y-2">
            {features.map((item, i) => (
              <li
                key={i}
                className="text-sm text-gray-600 group-hover:text-gray-100 flex gap-2"
              >
                <Check size={18}/> {item}
              </li>
            ))}
          </ul>

          <ul className="mt-4 space-y-1">
            {services.map((item, i) => (
              <li
                key={i}
                className="text-xs text-gray-400 group-hover:text-gray-200 flex gap-2 items-center"
              >
                <Dot /> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Button */}
        <button className="mt-6 w-full py-2 rounded-full bg-linear-to-r from-violet-600 to-purple-600 text-white font-medium 
  group-hover:bg-none group-hover:bg-white group-hover:text-purple-600 
  transition-all duration-300 active:scale-95">
          {buttonText}
        </button>

      </div>
    </article>
  );
};

export default PricingCard;
