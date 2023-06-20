import { StyleSheet } from "react-native";
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        position:'absolute',
        left: 340,
        top:500,
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.darkblue,
    },
});