import React from "react";
import { View,Text, StyleSheet } from "react-native";

const UserCard = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.username}>{props.username}</Text>
            <View style={styles.innercontainer}>

            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.email}>{props.email}</Text>
            </View>
        </View>
    );
}

export default UserCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightblue',
        marginVertical: 5,
        padding: 10,
        alignItems: 'center',
        //width: 400,
        //height: 50,
    },
    username:{
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    email:{
        fontSize: 18,
        fontStyle: 'italic',
        color: 'gray',
        marginLeft: 10,
    },
    innercontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 3,
    },
    name:{
        color: 'black',
        fontSize: 15,
    }
});