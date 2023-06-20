import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Welcome.style';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tarifka App</Text>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CategoryPage')}>
          <Text style={styles.button_text_middle}>Take Tarifka</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CategoryPage')}>
          <Text style={styles.button_text}>About App</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CategoryPage')}>
          <Text style={styles.button_text}>Check-up Codes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
