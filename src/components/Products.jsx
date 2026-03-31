import React from "react";
import AiToolCard from "./AiToolCard";

const Products = ({ data, cart, setCart }) => {
  return (
    <div>
      {/* Ai tools start form here */}
      {
        <section className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((tool) => (
            <AiToolCard
              key={tool.id}
              tool={tool}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </section>
      }
    </div>
  );
};

export default Products;
