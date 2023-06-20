import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';

import Input from '../components/Input/Input';

function SingIn({navigation}) {
  const [username, setUserName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState(null);
  const [from, setFrom] = useState(null);

  function handleSubmit() {
    if (!username || !surname || !age || !email || !from) {
      Alert.alert('Mac Fitness', 'You left an empty value');
      return;
    }

    const user = {
      username,
      surname,
      age,
      email,
      from,
    };

    navigation.navigate('SingInResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Text>Sign in</Text>
      <View style={{margin: 3}} />
      <Input
        label="Name"
        placeholder="Write your name"
        onChangeText={setUserName}
      />
      <Input
        label="Surname"
        placeholder="Write your surname"
        onChangeText={setSurname}
      />
      <Input label="Age" placeholder="Write your age" onChangeText={setAge} />
      <Input
        label="Email"
        placeholder="Write your email"
        onChangeText={setEmail}
      />
      <Input
        label="From"
        placeholder="Where are you from"
        onChangeText={setFrom}
      />
      <Button text="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default SingIn;
