// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './pages/WelcomeScreen';
import SingIn from './pages/SignIn';
import SingInResult from './pages/SingInResult';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="SingInScreen" component={SingIn} />
        <Stack.Screen name="SingInResultScreen" component={SingInResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
