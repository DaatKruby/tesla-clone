import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CarItem from "./assets/components/CarItem/CarItem.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name="Model 3"
        tagline="Order Online For"
        taglineCTA={"Touchless Delivery"}
        image={require("./assets/images/ModelS.jpeg")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
