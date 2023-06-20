import React from "react";
import { Text,TouchableOpacity,View } from "react-native";
import styles from './MessageCard.style';
import {formatDistance, parseISO} from 'date-fns';

function MessageCard({message, onBanane, Delete}){

    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.user}>{message.username}</Text>
                <Text style={styles.date}>{message.date}</Text>
            </View>
            <Text style={styles.title}>{message.text}</Text>
            <View style={styles.footer_flex}>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.dislike_container} onPress={onBanane}>
                    {!!message.dislike && (
                        <View style={styles.dislike_count_container}>
                            <Text style={styles.dislike_count_text}>{message.dislike}</Text>
                        </View>
                    )}
                    <Text style={styles.dislike_text}>bana ne?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.delete_container}>
                <TouchableOpacity onPress={Delete}>
                    <Text style={styles.delete} >Sil</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};

export default MessageCard;