import React from 'react';

function TodayFood({ items, totalCalories, className }) {
  return (
    <div className={className}>
      <h1>Today's Food</h1>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} = {item.calories} cal
          </li>
        ))}
      </ul>
      <p>Total: {totalCalories} cal</p>
    </div>
  );
}

export default TodayFood;
