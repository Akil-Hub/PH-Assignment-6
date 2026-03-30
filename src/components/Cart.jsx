import React from "react";
import CartTool from "./CartTool";
import { toast } from "react-toastify";
import EmptyCart from "./EmptyCart";





const Cart = ({ cart, setCart }) => {

    const total = cart.reduce((sum,item)=>sum+item.price,0)
    
    const handlePayment = () => {
        if (cart.length > 0) {
            toast.success('Payment Successful..')
        } 
        setCart([])
        
    };

  return (
    <div>
      {cart.length < 1 ? <EmptyCart/>:cart.map((tool) => (
        <CartTool tool={tool} key={tool.id} cart={cart} setCart={setCart} />
      ))}

      <section className="text-2xl mt-8 flex mb-3 justify-between py-4 bg-violet-400 rounded-lg px-4 font-semibold ">Total Price: <span>${total}</span> </section>

      <button onClick={handlePayment} className="text-2xl w-full text-white mb-20 py-2 bg-linear-to-r from-violet-600 to-purple-600 rounded-full active:scale-95 duration-300  px-4 font-semibold ">Proceed To Checkout</button>
    </div>
  );
};

export default Cart;
