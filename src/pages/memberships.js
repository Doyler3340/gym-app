import React from "react";

const Memberships = () => {
  const plans = [
    { name: "Monthly Plan", price: "€37/month" },
    { name: "Annual Plan", price: "€444/year" },
    { name: "Family Plan", price: "€555/year for 4 members" },
  ];

  return (
    <main className="memberships">
      <h1>Membership Plans</h1>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Memberships;
