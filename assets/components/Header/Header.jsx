import React from "react";
import { Image, View, ViewBase } from "react-native";

import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../images/logo.png")} />
      <Image style={styles.logo} source={require("../../images/menu.png")} />
    </View>
  );
};

export default Header;
