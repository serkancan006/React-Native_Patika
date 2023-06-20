import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 5,
        margin : 10,
        backgroundColor: 'lightgray',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
    },
    input: {
        flex: 1,
        padding: Platform.OS ==='android' ? 0 : 5,
    },
});