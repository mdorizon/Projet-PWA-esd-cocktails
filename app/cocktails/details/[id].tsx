import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import styles from "@/styles/styles";
import useGetCocktailByID from "@/hook/useGetCocktailByID";

export default function Index() {
  const local = useLocalSearchParams()
  const cocktail = useGetCocktailByID(local.id);

  if (!cocktail) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{cocktail.strDrink}</Text>
      <Image style={styles.image} source={{ uri: cocktail.strDrinkThumb }} />
      <Text style={styles.paragraph}>Ingrédients : </Text>
      <Text style={styles.paragraph}>{cocktail.strIngredient1}</Text>
      <Text style={styles.paragraph}>{cocktail.strIngredient2}</Text>
      <Text style={styles.paragraph}>{cocktail.strIngredient3}</Text>
    </View>
  );
}