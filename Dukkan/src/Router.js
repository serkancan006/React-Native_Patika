import React from 'react';
import {} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products/Products';
import Details from './pages/Details/Details';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductsPage"
          component={Products}
          options={{
            title: 'Products',
            headerStyle: {backgroundColor: '#f3399a'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="DetailsPage"
          component={Details}
          options={{
            title: 'Details',
            headerStyle: {backgroundColor: '#f3399a'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
