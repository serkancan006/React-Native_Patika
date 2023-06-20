import React from "react";
import { TextInput,View } from "react-native";
//Vector Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './input.style';

const input = ({placeholder,value, onType, iconname, isSecure}) => {
    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder={placeholder} 
            onChangeText={onType} 
            value={value}
            secureTextEntry={isSecure}
            />
            <Icon color={'black'} name={iconname} size={30}/>
        </View>
    );
};

export default input;