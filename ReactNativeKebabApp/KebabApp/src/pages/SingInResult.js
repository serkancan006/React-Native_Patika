import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function SingInResult({route}) {
  const {user} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.head}>Access granted</Text>
      <Text style={styles.content}>Name :{user.username}</Text>
      <Text style={styles.content}>Surname : {user.surname} </Text>
      <Text style={styles.content}>Age : {user.age} </Text>
      <Text style={styles.content}>Email : {user.email}</Text>
      <Text style={styles.content}>From : {user.from}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 0.3,
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  head: {
    paddingBottom: 10,
    fontSize: 30,
    color: 'red'
  },
  content: {
    width: Dimensions.get('window').width / 1.2,
    margin: 10,
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
});

export default SingInResult;
