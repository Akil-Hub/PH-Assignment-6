import { use, useState } from "react";
import AiToolCard from "./AiToolCard";

const MainToolsSection = ({ promiseData, setCart, cart }) => {
  const data = use(promiseData);

  const [activeTab, setActiveTab] = useState("cart");
  return (
    <article className="wrapper">
      {/* tooggle tabs */}
      <div className="wrapper text-center">
        <h3 className="text-5xl text-gray-900 font-semibold">
          Premium Digital Tools
        </h3>
        <p className="text-gray-400 py-3 w-120 mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        <div
          role="tablist"
          className="tabs tabs-box justify-center gap-3 py-3 bg-white"
        >
          <a
            onClick={() => setActiveTab("products")}
            role="tab"
            className={`tab rounded-full px-8 border-2 font-semibold text-violet-600 border-violet-600 ${activeTab === "products" ? "tab-active    bg-linear-to-r  from-violet-800 to-purple-600  text-white transition-all duration-300" : null}`}
          >
            Products
          </a>
          <a
            onClick={() => setActiveTab("cart")}
            role="tab"
            className={`tab font-semibold rounded-full px-8 border-2 text-violet-600 border-violet-600 ${activeTab === "cart" ? "tab-active    bg-linear-to-r  from-violet-800 to-purple-600  text-white transition-all duration-300" : null}`}
          >
            Cart <span>({2})</span>
          </a>
        </div>
      </div>

      {/* Ai tools start form here */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {activeTab === "products"
          && data.map((tool) => (
              <AiToolCard
                key={tool.id}
                tool={tool}
                setCart={setCart}
                cart={cart}
              />
            ))
          }
        {activeTab === "cart"
          && cart.map((tool) => (
              <h2>{tool.name}</h2>
            ))
          }
      </section>
    </article>
  );
};

export default MainToolsSection;
