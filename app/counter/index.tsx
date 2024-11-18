import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Counter() {
  const [drinkNumber, setDrinkNumber] = useState(0)
  const [message, setMessage] = useState('Un petit verre ne fera pas de mal !')

  useEffect(() => {
    switch (true) {
      case drinkNumber < 10:
        setMessage('Un petit verre ne fera pas de mal !');
        break;
      case drinkNumber >= 10 && drinkNumber < 15:
        setMessage('Il faudrait commencer à ralentir !');
        break;
      case drinkNumber >= 15 && drinkNumber < 25:
        setMessage('Il faudrait commencer à s\'inquiéter !');
        break;
      case drinkNumber >= 25:
        setMessage('Appelez le SAMU !');
        break;
      default:
        break;
    }
  }, [drinkNumber])

  const addDrink = () => {
    setDrinkNumber(drinkNumber + 1)
  }

  const removeDrink = () => {
    if (drinkNumber > 0) {
      setDrinkNumber(drinkNumber - 1)
    }
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>{message}</Text>
      <Text style={styles.title}>Compteur</Text>
      <Text style={styles.title}>{drinkNumber}</Text>
      <Button onPress={addDrink} title="Boire un coup !" />
      <Button onPress={removeDrink} title="Vomir !" />
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