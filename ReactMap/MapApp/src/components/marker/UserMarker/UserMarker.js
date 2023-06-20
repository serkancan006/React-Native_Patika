import React from "react";
import { View, Image } from "react-native";
import { Marker } from "react-native-maps";
import styles from './UserMarker.style';

const UserMarker = ({coordinates, userImageURL, onSelect}) => {
    return(
        <View>
            <Marker coordinate={coordinates} onPress={onSelect}>
                <Image style={styles.image} source={{uri: userImageURL}} />
            </Marker>
        </View>
    )
}

export default UserMarker;