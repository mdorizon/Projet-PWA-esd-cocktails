import { useEffect, useState } from "react";

const useGetCocktailsByID = (id: Number) => {
  const [cocktails, setcocktails] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const cocktail = await response.json()

      setcocktails(cocktail.drinks[0])
    })()
  }, [])

  return cocktails
}

export default useGetCocktailsByID