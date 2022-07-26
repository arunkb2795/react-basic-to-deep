import { useState, useEffect } from "react";

export default function useBreedList(animal) {
  const [breeds, setBreeds] = useState([]);

  const requestBreeds = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );
    const data = await res.json();
    setBreeds(data.breeds);
  };

  useEffect(() => {
    if (!animal) {
      setBreeds([]);
    } else {
      requestBreeds();
    }
  }, [animal]);

  return breeds;
}
