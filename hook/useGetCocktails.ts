import { useEffect, useState } from "react";

const useGetCocktails = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=b');
      const cocktails = await response.json()

      setCocktails(cocktails.drinks)
    })()
  }, [])

  return cocktails
}

export default useGetCocktails