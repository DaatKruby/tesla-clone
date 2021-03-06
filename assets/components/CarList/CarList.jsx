import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem/CarItem.jsx";

import styles from "./styles";
import cars from "./cars";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
      {/* A fuerzas item debe estar entre brackets => {item} */}
    </View>
  );
};

export default CarList;
