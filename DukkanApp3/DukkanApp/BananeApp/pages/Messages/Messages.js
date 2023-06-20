import React from "react";
import { Text,SafeAreaView,FlatList, View, ScrollView } from "react-native";

import FloatIngButton from '../../Component/FloatingButton';
import ContentInputModal from '../../Component/modal/ContentInputModal';
import MessageCard from "../../Component/MessageCard";

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import styles from './Messages.style';

import parseContentData from '../../utils/parseContentData';

const Messages = () => {
    const [inputModalVisible, setinputModalVisible] = React.useState(false);
    const [contentList, setcontentList] = React.useState([]);

    React.useEffect(()=> {
        database()
        .ref('messages/')
        .on('value', snapshot => {
            const contentData = snapshot.val();
            const parsedData = parseContentData(contentData || {});
            setcontentList(parsedData);
            //console.log(parsedData);
        });
    }, []);

    function handleInputToggle() {
        setinputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {
        handleInputToggle();
        sendContent(content);
    }

    function sendContent(content) {
        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            username: userMail.split('@')[0],
            date: new Date().toDateString(),
            dislike: 0,
        };

        database().ref('messages/').push(contentObject);
    }

    function handleBanane(item) {
        database()
        .ref('messages/'+item.id+'/')
        //.ref(`messages/${item.id}/`)
        .update({dislike: item.dislike + 1});
    }

    function handleDelete(item) {
        database()
        .ref('messages/'+item.id+'/')
        .remove();
    }

    const renderContent = ({item}) => <MessageCard message={item} 
    onBanane={() => handleBanane(item)} 
    Delete={() => handleDelete(item)} 
    />;
   
    return(
        <SafeAreaView style={styles.container}>
            <Text>Burası Message Sayfasıdır</Text>
            <FlatList
            data={contentList}
            renderItem={renderContent}
            />
        
            <FloatIngButton icon="plus" onPress={handleInputToggle} />

            <ContentInputModal 
            visible={inputModalVisible}
            onClose={handleInputToggle}
            onSend={handleSendContent}
            />
        </SafeAreaView>
    );
};

export default Messages;