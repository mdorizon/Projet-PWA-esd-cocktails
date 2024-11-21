import { useEffect, useState } from "react";

const useGetIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    (async () => {

      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const ingredients = await response.json()

      setIngredients(ingredients.drinks)
    })()
  }, [])

  return ingredients
}

export default useGetIngredients