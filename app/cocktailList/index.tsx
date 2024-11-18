import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default function Counter() {
  const cocktails = [
    "Mojito", "Margarita", "Cosmopolitan", "Bloody Mary", "Martini", "Piña Colada",
    "Long Island Iced Tea", "Old Fashioned", "Mai Tai", "Whiskey Sour", "Daiquiri", "Caipirinha",
    "Negroni", "Tequila Sunrise", "Gin Tonic", "Mint Julep", "Pisco Sour", "Zombie", "Tom Collins",
    "Rum Punch", "Blue Lagoon", "Sex on the Beach", "Manhattan", "Tomato Juice Cocktail", "Sazerac",
    "Bramble", "Mint Mojito", "French 75", "Gin Fizz", "Vesper Martini", "Apple Martini", "Mai Tai",
    "Screwdriver", "Espresso Martini", "Black Russian", "White Russian", "Amaretto Sour", "Zombie",
    "Fuzzy Navel", "Lynchburg Lemonade", "Frozen Daiquiri", "Rum Runner", "Cuba Libre", "Clover Club",
    "Paloma", "Singapore Sling", "Cherry Bounce", "Rattlesnake", "Scorpion", "Basil Smash", "Mint Cooler",
    "Champagne Cocktail"
  ];

  useEffect(() => {
    
  }, [])

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Liste des cocktails</Text>
      <View style={styles.container}>
        <FlatList
          data={cocktails}
          renderItem={({item}) => <Text style={styles.paragraph}>· {item}</Text>}
        />
      </View>
    </View>
  )
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
    marginBottom: 80,
    marginLeft: 20,
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