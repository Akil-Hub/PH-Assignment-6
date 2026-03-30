import React, { useState } from "react";
import { Check } from "lucide-react";

const AiToolCard = ({ tool,setCart,cart }) => {

    const [selected, setSelected] = useState(false)
  const {id, name, description, price, period, tagType, features, icon } = tool;

//   btn click functins
const handleBtnClick = (tool) => {
    const isToolExist = cart.find((t)=>t.id === tool.id)
     !isToolExist && setCart(prevTool=>[...prevTool,tool])
     setSelected(true)

};


  return (
    <article className="shadow-md rounded-2xl hover:scale-105 duration-300 border border-gray-200">
      <div className="bg-white rounded-2xl p-5 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-500">
        {/* Top */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <img src={icon} alt={name} className="w-7" />

            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                tagType === "popular"
                  ? "bg-purple-100 text-purple-600"
                  : tagType === "best-seller"
                    ? "bg-green-100 text-green-600"
                    : tagType === "trending"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-blue-100 text-blue-600"
              }`}
            >
              {tagType}
            </span>
          </div>

          <h3 className="text-2xl font-semibold mb-1">{name}</h3>
          <p className="text-sm text-gray-500 mb-4">{description}</p>

          {/* pricing */}

          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                {price === 0 ? "Free" : `$${price}`}
              </span>
              {price !== 0 && (
                <span className="text-sm text-gray-500 ml-1">/{period}</span>
              )}
            </div>

            {/* Features  texts*/}
            <ul className="space-y-1 mb-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 flex gap-2 items-center"
                >
                  <Check size={15} className="text-green-500 " /> {feature}
                </li>
              ))}
            </ul>
          </div>

          <button onClick={()=>handleBtnClick(tool)} className={`w-full py-2 rounded-full ${selected ? ' bg-linear-to-r from-green-900 to-green-400':' bg-linear-to-r from-violet-600 to-purple-600'} text-white font-medium hover:opacity-90 transition-all duration-300 active:scale-95`}>
            {selected ? 'Added To Cart' :'Buy Now'}
          </button>
        </div>
      </div>
    </article>
  );
};

export default AiToolCard;
