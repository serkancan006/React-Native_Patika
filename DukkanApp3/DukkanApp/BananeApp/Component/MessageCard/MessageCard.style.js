import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        margin:5,
        backgroundColor: '#00897b',
        borderRadius: 10,
        padding: 10,
    },
    inner_container: {
        height: Dimensions.get('window').height /20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    user: {
        color:'white',
        fontSize:18,
        fontStyle:'italic',
    },
    date: {
        color:'white',
        fontSize:18,
        fontStyle:'italic',
    },
    title: {
        color:'white',
        fontSize:22,
        fontWeight: 'bold',
    },
    footer_flex: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    footer: {
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems:'center',
        justifyContent: 'center',
        height: 30,
        width: 150,
        marginRight: 5,
    },
    dislike_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dislike_count_container: {
        backgroundColor: '#00897b',
        marginRight: 8,
        borderRadius: 50,
        height: 25,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dislike_count_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dislike_text: {
        color: '#00897b',
        fontWeight: 'bold',
        fontSize: 22,
    },
    delete: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    delete_container: {
        backgroundColor: 'red',
        borderRadius: 20,
        width: 50,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },


})