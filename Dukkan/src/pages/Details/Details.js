import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import styles from './Details.style';

const Details = ({route}) => {
  const {id} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_URL}/${id}`);
  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>${data.price}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;
