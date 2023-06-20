import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <SafeAreaView style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: product.image}} />
        </View>
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.button}>Buy</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
