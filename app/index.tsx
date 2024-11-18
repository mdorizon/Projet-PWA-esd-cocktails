import { useRouter } from "expo-router";
import { Button, Text, View, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();

  const goToCocktailList = () => {
    router.push("cocktailList")
  }
  
  const goToCounter = () => {
    router.push("counter")
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>titre principal</Text>
        <Text style={styles.subtitle}>sous titre</Text>
        <Button onPress={goToCounter} title="Boire des cocktails" />
        <Button onPress={goToCocktailList} title="Voir tout les cocktails" />
        <View style={styles.container}>
          <Text style={styles.paragraph}>Un cocktail est une boisson mêlant alcools, jus, et autres ingrédients pour créer des saveurs uniques, souvent agrémentée de glaçons et de décorations.</Text>
          <Text style={styles.secondTitle}>les meilleurs cocktails</Text>
          <View>
            <Text style={styles.paragraph}>· Mojito</Text>
            <Text style={styles.paragraph}>· Piña Colada</Text>
            <Text style={styles.paragraph}>· Margarita</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>copyright esd-cocktails 1850-2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'column',
    backgroundColor: "#F5FCFF"
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    margin: 10
  },
  secondTitle: {
    fontSize: 18,
    textAlign: "center",
    margin: 10
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    margin: 10
  },
  paragraph: {
    fontSize: 14,
    margin: 10
  },
  footer: {
    flex: 1,
    flexDirection: "column-reverse",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 50
  }
})