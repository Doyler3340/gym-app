import React from "react";

const Classes = () => {
  const classes = [
    { name: "Yoga", time: "9:30 AM - 10:30 AM" },
    { name: "HIIT", time: "12:00 PM - 1:00 PM" },
    { name: "Zumba", time: "5:30 PM - 6:30 PM" },
  ];

  return (
    <main className="classes">
      <h1>Classes that are on today.</h1>
      <ul>
        {classes.map((classItem, index) => (
          <li key={index}>
            <h2>{classItem.name}</h2>
            <p>{classItem.time}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Classes;
