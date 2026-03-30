import React from "react";
import PricingCard from "./PricingCard";
import { pricingData } from "../data/pricingData";
const PricingSection = () => {
  return (
    <>
      <div className="text-center py-10 mt-5">
        <h3 className="text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h3>
        <p className="py-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <section className="grid grid-cols-3 gap-8 wrapper">
        {pricingData.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing} />
        ))}
      </section>
    </>
  );
};

export default PricingSection;
