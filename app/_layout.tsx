import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Accueil", headerShown: false}}/>
      <Stack.Screen name="counter/index" options={{title: "Compteur", headerTintColor: "#000"}}/>
      <Stack.Screen name="cocktailList/index" options={{title: "Liste des cocktails", headerTintColor: "#000"}}/>
    </Stack>
  )
}
