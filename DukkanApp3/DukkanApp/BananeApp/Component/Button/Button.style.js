import { StyleSheet } from "react-native";

const base_style = StyleSheet.create({
    container: {
        padding: 5,
        margin : 10,
        borderRadius: 0,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 5,
    },
    button_container: {
        flexDirection:'row',
        alignItems:'center',
    },
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: '#00897b',
        },
        title: {
            ...base_style.title,
            color: 'white',
        },
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container: {
            ...base_style.container,
            backgroundColor: 'white',
            borderColor: '#00897b',
            borderWidth: 2,
        },
        title: {
            ...base_style.title,
            color: '#00897b',
        },
    }),
};