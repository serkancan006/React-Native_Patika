import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories/Categories';
import Detail from './pages/Detail/Detail';
import FoodList from './pages/FoodList/FoodList';
import Welcome from './pages/Welcome/Welcome';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomePage"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CategoryPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerStyle: {backgroundColor: '#f97ebe'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FoodListPage"
          component={FoodList}
          options={{
            title: 'Meals',
            headerStyle: {backgroundColor: '#f97ebe'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: '#f97ebe'},
            headerTitleStyle: {color: '#fff'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
