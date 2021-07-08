import React from "react";

const FilteredEvents = () => {
  const obj = [
    { id: "wacken", name: "Wacken", location: "Germany" },
    { id: "resu", name: "Resurrection Fest", location: "Spain" },
  ];
  return (
    <div>
      <ul>
        {obj.map((festival) => (
          <li key={`${festival.id}`}>
            Festival: <h2>{festival.name}</h2>
            in: <p>{festival.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredEvents;
