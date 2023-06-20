import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
    },
    image: {
        width: 100,
        minHeight: 100,
        //height: 100,
        borderRadius: 10,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    body_container:{
        padding: 5,
        flex: 1,
        justifyContent: 'space-between',
    },
    title:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
    price:{
        textAlign: 'right',
        color: 'black',
        fontStyle: 'italic',
        //fontWeight: 'bold',
        fontSize: 18,
    },
});