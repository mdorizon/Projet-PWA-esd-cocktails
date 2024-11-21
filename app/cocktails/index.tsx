import useGetCocktails from "@/hook/useGetCocktails";
import styles from "@/styles/styles";
import { router } from "expo-router";
import { Text, View, Button, FlatList } from "react-native";

export default function Counter() {
  const cocktails = useGetCocktails()

  const handleNavigateToCocktailSingle = (id) => {
    router.push(`cocktails/details/${id}`)
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Liste des cocktails</Text>
      <View style={styles.container}>
        <FlatList
          data={cocktails}
          renderItem={({item}) =>
            <View>
              <Text style={styles.secondTitle}>{item.strDrink}</Text>
              <Button title={"Voir le cocktail"} onPress={() => handleNavigateToCocktailSingle(item.idDrink)} />
            </View>
          }
        />
      </View>
    </View>
  )
}