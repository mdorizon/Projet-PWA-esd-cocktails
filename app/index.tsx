import useGetCocktails from "@/hook/useGetCocktails";
import useGetIngredients from "@/hook/useGetIngredients";
import styles from "@/styles/styles";
import { Text, View, Image, ScrollView } from "react-native";

export default function Index() {
  const cocktails = useGetCocktails()
  const ingredients = useGetIngredients()

  return (
    <ScrollView style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Cocktails :</Text>
        {cocktails.slice(-6).map((cocktail, index) => (
          <View key={index}>
            <Image style={styles.image} source={{ uri: cocktail.strDrinkThumb }} />
            <Text style={styles.paragraph}>{cocktail.strDrink}</Text>
          </View>
        ))}
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Ingrédients :</Text>
        {ingredients.slice(-6).map((cocktail, index) => (
          <View key={index}>
            <Text style={styles.paragraph}>{cocktail.strIngredient1}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}