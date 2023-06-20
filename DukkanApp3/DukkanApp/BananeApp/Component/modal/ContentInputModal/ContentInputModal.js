import React, { useState } from "react";
import { TextInput,View } from "react-native";
import Modal from "react-native-modal";
import Button from '../../Button';

import styles from './ContentInputModal.style';

const ContentInputModal = ({visible = 'false',onClose,onSend}) => {
    const [text,setText] = useState(null);

    function handleSend() {
        if(!text) {
            return;
        }

        onSend(text);
        setText(null);
    }

    return(
        <Modal 
        style= {styles.modal}
        isVisible={visible} 
        swipeDirection='down'
        onSwipeComplete={onClose} 
        onBackdropPress={onClose}
        onBackButtonPress={onClose} >
         <View style={styles.container}>
            <View style={styles.input_container}>
            <TextInput
              placeholder="Darla hadi milleti..."
              onChangeText={setText}
              multiline
              />
            </View>
            <Button text='Gönder' onPress={handleSend} />
         </View>
        </Modal>
    );
};

export default ContentInputModal;
