import React from 'react';
import {
  FlatList,
  Text,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';
import styles from './Products.style';

import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailsPage', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return <FlatList data={data} renderItem={renderProduct} />;
};

export default Products;
