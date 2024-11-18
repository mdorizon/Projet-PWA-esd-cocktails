import { useRouter } from "expo-router";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();

  const goToCocktailList = () => {
    router.push("cocktails")
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
        <TouchableOpacity style={styles.button}>
          <Text>test</Text>
        </TouchableOpacity>
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
        <Text style={styles.paragraph}>copyright esd-cocktails 1850-2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 80,
    flexDirection: 'column',
    backgroundColor: "#121212"
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  secondTitle: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  paragraph: {
    fontSize: 14,
    margin: 10,
    color: "#fff"
  },
  footer: {
    flex: 1,
    flexDirection: "column-reverse",
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 50,
  }
})