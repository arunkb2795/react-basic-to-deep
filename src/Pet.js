import React from "react";

export default function Pet(props) {
  const { name, animal, breed } = props;
  return (
    <div>
      <h3>{name}</h3>
      <h4>{animal}</h4>
      <p>{breed}</p>
    </div>
  );
}
