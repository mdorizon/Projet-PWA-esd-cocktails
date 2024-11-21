import { useEffect, useState } from "react";

const useGetCocktailByID = (id: Number) => {
  const [cocktail, setcocktail] = useState(null);

  useEffect(() => {
    (async () => {

      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const cocktail = await response.json()

      setcocktail(cocktail.drinks[0])
    })()
  }, [])

  return cocktail
}

export default useGetCocktailByID