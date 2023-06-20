import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import React from 'react';
import styles from './CategoryCard.style';

const CategoryCard = ({categoryItem, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: categoryItem.strCategoryThumb}}
        />
        <View style={styles.body_container}>
          <Text style={styles.title}>{categoryItem.strCategory}</Text>
          {/* <Text style={styles.description}>{categoryItem.strCategoryDescription}</Text> */}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
