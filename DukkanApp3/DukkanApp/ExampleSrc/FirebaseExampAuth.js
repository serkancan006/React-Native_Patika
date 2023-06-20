import React from "react";
import { SafeAreaView,Text,Button } from "react-native";
import auth from '@react-native-firebase/auth';

export default () => {
    const signup = () => {
        auth().createUserWithEmailAndPassword(
            'jane.doe@example.com', 'SuperSecretPassword!'
        )
        .then(res => console.log(res))
        .catch(err => console.log(err));
    };
    const signin = () => {
        auth().signInWithEmailAndPassword(
            'jane.doe@example.com', 'SuperSecretPassword!'
        )
        .then(res => console.log('Signed in.'))
        .catch(err => console.log(err));
    }
    const signout = () => {
        auth()
        .signOut()
        .then(res => console.log('Signed Out.'))
        .catch(err => console.log(err));
    }
    const checkOut = () => {
        const user = auth().currentUser;
        console.log(user);
    }
    return (
        <SafeAreaView>
            <Text style={{fontSize: 70}}>Hello Fİrebase</Text>
            <Button title="Sign In" onPress={signin}/>
            <Button title="Sign Up" onPress={signup}/>
            <Button title="Sign Out" onPress={signout}/>
            <Button title="Check User" onPress={checkOut}/>
        </SafeAreaView>
    );
};