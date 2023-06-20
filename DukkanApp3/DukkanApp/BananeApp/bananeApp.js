import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FlashMessage from "react-native-flash-message";
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sİgn';
import Message from './pages/Messages';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

export default () => {
    const [userSession, setuserSession] = React.useState();

    React.useEffect(() => {
        auth().onAuthStateChanged((user) => {
            setuserSession(!!user);
        })
    }, []);

    const AuthStack = () => {
        return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginPage" component={Login}/>
            <Stack.Screen name="SignPage" component={Sign}/>
        </Stack.Navigator>
        )
    }
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
            {
                !userSession ? (
                <Stack.Screen 
                name="AuthStack" 
                component={AuthStack}
                />
                ) : (
                <Stack.Screen 
                options={
                    {
                        headerShown:true,
                        headerTitle:'dertler',
                        headerTitleAlign:'center',
                        headerTitleStyle: {color: '#00897b'},
                        headerTintColor: 'white',
                        headerRight: () => <Icon name="logout" size={30} color='#00897b' 
                        onPress={() => {auth().signOut()}}
                        />,
                    }
                } 
                name="MessagePage" 
                component={Message}/>
            )}
            </Stack.Navigator>
            <FlashMessage position='top' />
        </NavigationContainer>
    );
};
