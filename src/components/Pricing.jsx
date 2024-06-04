import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "Free",
      features: [
        "Access to basic workout plans",
        "Limited client management",
        "Community support",
      ],
    },
    {
      title: "Pro",
      price: "₹2000/mo",
      features: [
        "Access to all workout plans",
        "Advanced client management",
        "Customizable workout plans",
        "Priority support",
      ],
    },
    {
      title: "Enterprise",
      price: "₹3000/mo",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Branded mobile app",
        "Advanced analytics and reporting",
        "Unlimited client management",
      ],
    },
  ];

  return (
    <section className="bg-black" id="pricing">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 py-10 text-white">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="p-8 bg-white rounded shadow py-10">
              <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <ul className="mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
