import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {flex: 1,marginTop:1,backgroundColor:'lightgray'},
    bodycontainer: {padding: 10},
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 2.2,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title: {fontWeight: 'bold',fontSize: 27,color: 'black'},
    desc: {fontStyle: 'italic', marginVertical: 5,fontSize:20,color: 'black',fontWeight:'500'},
    price: {fontWeight: 'bold', fontSize: 22,textAlign: 'right',color: 'black'},
})