import { router } from "expo-router";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default function Counter() {
  const cocktails = [
    {
      id: 1,
      name: "Mojito",
      ingredients: ["Rhum blanc", "Menthe fraîche", "Sucre", "Citron vert", "Eau gazeuse"]
    },
    {
      id: 2,
      name: "Margarita",
      ingredients: ["Tequila", "Triple sec", "Jus de citron vert", "Sel (pour le verre)"]
    },
    {
      id: 3,
      name: "Cosmopolitan",
      ingredients: ["Vodka", "Triple sec", "Jus de canneberge", "Jus de citron vert"]
    },
    {
      id: 4,
      name: "Bloody Mary",
      ingredients: ["Vodka", "Jus de tomate", "Jus de citron", "Tabasco", "Sauce Worcestershire", "Sel", "Poivre", "Céleri (pour garnir)"]
    },
    {
      id: 5,
      name: "Martini",
      ingredients: ["Gin", "Vermouth sec", "Olives (ou zeste de citron)"]
    },
    {
      id: 6,
      name: "Piña Colada",
      ingredients: ["Rhum blanc", "Lait de coco", "Jus d'ananas"]
    },
    {
      id: 7,
      name: "Long Island Iced Tea",
      ingredients: ["Vodka", "Tequila", "Rhum blanc", "Gin", "Triple sec", "Jus de citron", "Sirop de sucre", "Coca-cola"]
    },
    {
      id: 8,
      name: "Old Fashioned",
      ingredients: ["Whiskey", "Sucre", "Angostura bitters", "Eau", "Glaçons"]
    },
    {
      id: 9,
      name: "Mai Tai",
      ingredients: ["Rhum blanc", "Rhum ambré", "Curaçao orange", "Sirop d'orgeat", "Jus de citron vert"]
    },
    {
      id: 10,
      name: "Whiskey Sour",
      ingredients: ["Whiskey", "Jus de citron", "Sirop de sucre", "Blanc d'œuf (facultatif)"]
    },
    {
      id: 11,
      name: "Daiquiri",
      ingredients: ["Rhum blanc", "Jus de citron vert", "Sirop de sucre"]
    },
    {
      id: 12,
      name: "Caipirinha",
      ingredients: ["Cachaça", "Sucre", "Citron vert"]
    },
    {
      id: 13,
      name: "Negroni",
      ingredients: ["Gin", "Vermouth rouge", "Campari"]
    },
    {
      id: 14,
      name: "Tequila Sunrise",
      ingredients: ["Tequila", "Jus d'orange", "Grenadine"]
    },
    {
      id: 15,
      name: "Gin Tonic",
      ingredients: ["Gin", "Eau tonique", "Glaçons", "Citron"]
    },
    {
      id: 16,
      name: "Mint Julep",
      ingredients: ["Bourbon", "Menthe fraîche", "Sucre", "Eau"]
    },
    {
      id: 17,
      name: "Pisco Sour",
      ingredients: ["Pisco", "Jus de citron vert", "Blanc d'œuf", "Sirop de sucre", "Angostura bitters"]
    },
    {
      id: 18,
      name: "Zombie",
      ingredients: ["Rhum blanc", "Rhum ambré", "Rhum vieux", "Jus de citron vert", "Jus d'orange", "Grenadine", "Sirop de grenadine", "Angostura bitters"]
    },
    {
      id: 19,
      name: "Tom Collins",
      ingredients: ["Gin", "Jus de citron", "Sirop de sucre", "Eau gazeuse"]
    },
    {
      id: 20,
      name: "Rum Punch",
      ingredients: ["Rhum blanc", "Rhum ambré", "Jus d'orange", "Jus d'ananas", "Grenadine"]
    },
    {
      id: 21,
      name: "Blue Lagoon",
      ingredients: ["Vodka", "Curaçao bleu", "Jus de citron", "Limonade"]
    },
    {
      id: 22,
      name: "Sex on the Beach",
      ingredients: ["Vodka", "Peach schnapps", "Jus de cranberry", "Jus d'orange"]
    },
    {
      id: 23,
      name: "Manhattan",
      ingredients: ["Whiskey", "Vermouth doux", "Angostura bitters", "Cerise"]
    },
    {
      id: 24,
      name: "Tomato Juice Cocktail",
      ingredients: ["Vodka", "Jus de tomate", "Tabasco", "Sauce Worcestershire", "Citron"]
    },
    {
      id: 25,
      name: "Sazerac",
      ingredients: ["Whiskey de seigle", "Absinthe", "Sucre", "Angostura bitters"]
    },
    {
      id: 26,
      name: "Bramble",
      ingredients: ["Gin", "Liqueur de mûre", "Jus de citron", "Sirop de sucre"]
    },
    {
      id: 27,
      name: "Mint Mojito",
      ingredients: ["Rhum blanc", "Menthe fraîche", "Sucre", "Jus de citron vert", "Eau gazeuse"]
    },
    {
      id: 28,
      name: "French 75",
      ingredients: ["Gin", "Champagne", "Jus de citron", "Sirop de sucre"]
    },
    {
      id: 29,
      name: "Gin Fizz",
      ingredients: ["Gin", "Jus de citron", "Sirop de sucre", "Eau gazeuse"]
    },
    {
      id: 30,
      name: "Vesper Martini",
      ingredients: ["Gin", "Vodka", "Lillet Blanc"]
    },
    {
      id: 31,
      name: "Apple Martini",
      ingredients: ["Vodka", "Liqueur de pomme", "Jus de citron"]
    },
    {
      id: 32,
      name: "Screwdriver",
      ingredients: ["Vodka", "Jus d'orange"]
    },
    {
      id: 33,
      name: "Espresso Martini",
      ingredients: ["Vodka", "Kahlúa", "Expresso"]
    },
    {
      id: 34,
      name: "Black Russian",
      ingredients: ["Vodka", "Kahlúa"]
    },
    {
      id: 35,
      name: "White Russian",
      ingredients: ["Vodka", "Kahlúa", "Crème fraîche"]
    },
    {
      id: 36,
      name: "Amaretto Sour",
      ingredients: ["Amaretto", "Jus de citron", "Sirop de sucre", "Blanc d'œuf"]
    },
    {
      id: 37,
      name: "Fuzzy Navel",
      ingredients: ["Peach schnapps", "Jus d'orange"]
    },
    {
      id: 38,
      name: "Lynchburg Lemonade",
      ingredients: ["Jack Daniel's", "Triple sec", "Jus de citron", "Limonade"]
    },
    {
      id: 39,
      name: "Frozen Daiquiri",
      ingredients: ["Rhum blanc", "Jus de citron vert", "Sirop de sucre", "Glace pilée"]
    },
    {
      id: 40,
      name: "Rum Runner",
      ingredients: ["Rhum blanc", "Rhum ambré", "Banane liqueur", "Grenadine", "Jus d'orange"]
    },
    {
      id: 41,
      name: "Cuba Libre",
      ingredients: ["Rhum blanc", "Coca-cola", "Citron vert"]
    },
    {
      id: 42,
      name: "Clover Club",
      ingredients: ["Gin", "Grenadine", "Jus de citron", "Blanc d'œuf"]
    },
    {
      id: 43,
      name: "Paloma",
      ingredients: ["Tequila", "Jus de pamplemousse", "Soda", "Citron vert"]
    },
    {
      id: 44,
      name: "Singapore Sling",
      ingredients: ["Gin", "Cherry liqueur", "Curaçao", "Grenadine", "Jus d'ananas", "Jus de citron"]
    },
    {
      id: 45,
      name: "Cherry Bounce",
      ingredients: ["Whiskey", "Cerises", "Sucre"]
    },
    {
      id: 46,
      name: "Rattlesnake",
      ingredients: ["Whiskey", "Absinthe", "Blanc d'œuf", "Sucre"]
    },
    {
      id: 47,
      name: "Scorpion",
      ingredients: ["Rhum blanc", "Rhum ambré", "Jus d'orange", "Jus de citron", "Grenadine"]
    },
    {
      id: 48,
      name: "Basil Smash",
      ingredients: ["Gin", "Basilic", "Jus de citron", "Sirop de sucre"]
    },
    {
      id: 49,
      name: "Mint Cooler",
      ingredients: ["Gin", "Menthe", "Jus de citron", "Eau gazeuse"]
    },
    {
      id: 50,
      name: "Champagne Cocktail",
      ingredients: ["Champagne", "Sucre", "Angostura bitters"]
    }
  ];
  
  const handleNavigateToCocktailSingle = (id: number) => {
    router.push(`cocktails/${id}`)
  }

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Liste des cocktails</Text>
      <View style={styles.container}>
        <FlatList
          data={cocktails}
          renderItem={({item}) =>
            <View>
              <Text style={styles.secondTitle}>{item.name}</Text>
              <Button title={"Voir le cocktail"} onPress={() => handleNavigateToCocktailSingle(item.id)} />
            </View>
          }
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
    backgroundColor: "#121212"
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
    color: "#FAFCFE",
    margin: 10
  },
  secondTitle: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: '#fff'
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