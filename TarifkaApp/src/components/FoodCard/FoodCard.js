import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import styles from './FoodCard.style';

const FoodCard = ({foodItem, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: foodItem.strMealThumb}} />
        <View style={styles.title_container}>
          <Text style={styles.title}>{foodItem.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FoodCard;
