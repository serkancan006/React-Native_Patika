import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './FoodList.style';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import FoodCard from '../../components/FoodCard';

const FoodList = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {loading, data, error} = useFetch(
    Config.API_URL + `filter.php?c=${strCategory}`,
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

  const handleFoodSelect = strMeal => {
    navigation.navigate('DetailPage', {strMeal});
  };
  const renderFoodList = ({item}) => (
    <FoodCard foodItem={item} onSelect={() => handleFoodSelect(item.strMeal)} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderFoodList} />
    </View>
  );
};

export default FoodList;
