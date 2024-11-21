import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useGetCocktailsByID from "@/hook/useGetCocktailsByID";
import styles from "@/styles/styles";

export default function Index() {
  const local = useLocalSearchParams()
  const cocktails = useGetCocktailsByID(local.id);

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{cocktails.strDrink}</Text>
      <Image style={styles.image} source={{ uri: cocktails.strDrinkThumb }} />
      <Text style={styles.paragraph}>Ingrédients : </Text>
      <Text style={styles.paragraph}>{cocktails.strIngredient1}</Text>
      <Text style={styles.paragraph}>{cocktails.strIngredient2}</Text>
      <Text style={styles.paragraph}>{cocktails.strIngredient3}</Text>
    </View>
  );
}