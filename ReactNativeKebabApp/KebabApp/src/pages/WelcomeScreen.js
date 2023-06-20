import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet} from 'react-native';

import Button from '../components/Button/Button';

function Welcome({navigation}) {
  function goToSingIn() {
    navigation.navigate('SingInScreen');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Mac Fitness Saloon</Text>
      <Button text="Sign in" onPress={goToSingIn} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 40,
  },
});

export default Welcome;
