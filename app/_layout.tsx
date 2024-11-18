import { Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";

export default function RootLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Accueil", headerShown: false}}/>
      <Stack.Screen name="counter/index" options={{title: "Compteur", headerStyle: {backgroundColor: "#121212"}, headerTintColor: "#FAFCFE"}}/>
      <Stack.Screen name="cocktails/index" options={{title: "Liste des cocktails", headerStyle: {backgroundColor: "#121212"}, headerTintColor: "#FAFCFE"}}/>
      <Stack.Screen name="cocktails/[id]" options={{title: "Liste des cocktails", headerStyle: {backgroundColor: "#121212"}, headerTintColor: "#FAFCFE"}}/>
    </Stack>
  )
}
