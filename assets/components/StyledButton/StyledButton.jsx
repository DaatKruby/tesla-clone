import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "../StyledButton/styles";

const StyledButton = ({ type, content, onPress }) => {

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={()=>onPress() }
        // Se hace un arreglo de estilos, y se le pasa un estilo predeterminado, en este caso depende del "type" del botón (primary o secondary)
      >
        <Text style={[styles.textbtn, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
