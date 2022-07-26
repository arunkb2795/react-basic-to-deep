import React, { useState, useEffect } from "react";
import Pet from "./Pet";
import useBreedList from "./hooks/useBreedList";
import { ANIMALS } from "./constants";

export default function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const breeds = useBreedList(animal);
  console.log({ breeds });

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const value = await res.json();
    setPets(value.pets);
  };

  useEffect(() => {
    requestPets();
  }, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="search">
          Search
          <input
            id="search"
            name="location"
            type="text"
            value={location}
            placeholder="Search location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="animals">
          Animals
          <select
            id="animals"
            name="animals"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setLocation("");
            }}
            onBlur={(e) => {
              setAnimal(e.target.value);
              setLocation("");
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal.charAt(0).toUpperCase() + animal.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breeds">
          Breed
          <select
            id="breeds"
            name="breeds"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
          />
        ))
      ) : (
        <div>No pets found!</div>
      )}
    </div>
  );
}
