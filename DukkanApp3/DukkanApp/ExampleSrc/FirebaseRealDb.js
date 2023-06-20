import React from "react";
import { Text,SafeAreaView, Button } from "react-native";
import database from '@react-native-firebase/database';

export default () => {
    function checkDB (){
        const reference = database().ref('books');
        reference.once('value').then(snapshot => {
          const response = snapshot.val();
          console.log(response);
        });
    };
    function ListenDB(){
        const reference = database().ref('books');
        reference.on('value', snapshot => {
            console.log(snapshot.val());
          });
    };
    function SetDB(){
        const reference = database().ref('car/rentable');
        reference.set({
            brand: 'Audi',
            model: 'A8',
            price: 128,
        })
    };
    function UpdateDB(){
        const reference = database().ref('car/rentable');
        reference.update({
            model: 'A3',
        })
    };
    function PushDB(){
        const reference = database().ref('car/rentable');
        reference.push({
            brand: 'Passat',
            model: '81',
            price: 650,
        })
    };
    return(
        <SafeAreaView>
            <Text style={{fontSize: 70}}>Hello Firebase</Text>
            <Button title="Check DB" onPress={checkDB}/>
            <Button title="Listen DB" onPress={ListenDB}/>
            <Button title="Set DB" onPress={SetDB}/>
            <Button title="Update DB" onPress={UpdateDB}/>
            <Button title="Push DB" onPress={PushDB}/>
        </SafeAreaView>
    )
}