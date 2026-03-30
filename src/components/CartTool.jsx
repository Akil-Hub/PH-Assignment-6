import React from "react";
import { toast } from "react-toastify";

const CartTool = ({tool,cart,setCart}) => {
    const { icon, name, price, period,id } = tool


    const handleDelete   = (id) => {
        const filteredData = cart.filter((toolData )=> toolData.id !== id)
        setCart(filteredData)
        toast.error('Tools Removed Successfully..')
    };

  return (
    <div className="flex justify-between rounded-lg  bg-gray-100 p-5 col-span-3 my-2">
      <section className="flex gap-5 items-center">
        <span>
          <img src={icon} alt={name} className="w-12" />
        </span>

        <div className="">
          <h3 className="text-md font-semibold mb-1">{name}</h3>

          <span className=" font-bold">
            {price === 0 ? "Free" : `$${price}`}
          </span>
          {price !== 0 && (
            <span className="text-sm text-gray-500 ml-1">/{period}</span>
          )}
        </div>
      </section>
      <button onClick={()=>handleDelete(id)} className="text-red-500 font-bold ">Remove</button>
    </div>
  );
};

export default CartTool;
