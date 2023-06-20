import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import styles from './Detail.style';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';

const Detail = ({route}) => {
  const {strMeal} = route.params;
  const {loading, data, error} = useFetch(
    Config.API_URL + `search.php?s=${strMeal}`,
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.image_container}>
        <Image
          source={{uri: data.meals[0].strMealThumb}}
          style={styles.image}
        />
      </View>
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.meals[0].strMeal}</Text>
        <Text style={styles.area}>{data.meals[0].strArea}</Text>
        <View style={{borderColor: '#eeeeee80', borderWidth: 1}}></View>
        <Text style={styles.instructions}>{data.meals[0].strInstructions}</Text>
        <TouchableOpacity
          style={styles.youtube}
          onPress={() => Linking.openURL(data.meals[0].strYoutube)}>
          <Text style={styles.youtube_text}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Detail;
