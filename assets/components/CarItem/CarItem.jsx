import React from "react";
import { View, Text, ImageBackground } from "react-native";

import StyledButton from "../StyledButton/StyledButton.jsx";

import styles from "./styles";

const CarItem = ({ name, tagline, taglineCTA, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.bgImg} />
      {/* imgbackgorund Necesita a fuerzas esos dos props. */}
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline + ' '}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed.");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed.");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
