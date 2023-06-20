import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#64b5f6',
    },
    logo:{
        height: Dimensions.get('window').height /3,
        width: Dimensions.get('window').width * 0.9,
        resizeMode: 'contain',
        //backgroundColor: '#64b5f6',
        alignSelf: 'center',
        //tintColor: 'white',
    },
    logo_container: {
        //backgroundColor: 'green',
        flex:1,
        justifyContent: 'center',
    },
    body_container: {
        //backgroundColor: 'yellow',
        flex:1,
    },
})