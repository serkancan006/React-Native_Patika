import { StyleSheet, Platform} from "react-native";
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    text: {
        color:'black',
        fontSize:18,
        fontStyle:'italic'
    },
    header: {
        color: colors.darkgreen,
        margin: 5,
        fontSize: Platform.OS === 'android' ? 100 : 140,
    },
});