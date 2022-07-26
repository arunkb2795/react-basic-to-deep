import React from "react";

export default function Pet(props) {
  const { name, animal, breed, images } = props;
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <div>
      <h3>{name}</h3>
      <h4>{animal}</h4>
      <p>{breed}</p>
      <img src={hero} alt={name} width="150" height="150"></img>
    </div>
  );
}
