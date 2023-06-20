import React, { Fragment, useState } from "react";
import { View,Text,SafeAreaView, ScrollView } from "react-native";
import styles from './Login.style';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Input from '../../../Component/Input';
import Button from '../../../Component/Button';

const initialFormValues = {
    usermail: '',
    password: '',
};

function LoginPage({navigation}){
    const [loading, setLoading] = useState(false);
    function handleSignUp(){
        navigation.navigate('SignPage');
    };

    async function handleFormSubmit(formValues){
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
                );
                setLoading(false);
                navigation.navigate('MessagePage');
                //console.log(formValues);
        } catch (error) {
            //console.log(error);
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
              });
              setLoading(false);
        };
    };
    
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Bana Ne?</Text>
            <Text style={styles.text}>LoginPage</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit}) => (
             <Fragment >
              <Input 
              onType={handleChange('usermail')} 
              value={values.usermail} 
              placeholder='E-POSTANIZI GİRİNİZ...'
              />
              <Input 
              onType={handleChange('password')} 
              value={values.password} 
              placeholder='ŞİFREİNİZİ GİRİNİZ...'
              isSecure
              />
              <Button text='Giriş yap' theme='primary' loading={loading} onPress={handleSubmit}/>
             </Fragment>
                )}
            </Formik>
            <Button text='Kayıt Ol' theme='secondary' onPress={handleSignUp}/>
            <Button text='Test'/>
        </ScrollView>
    )
}

export default LoginPage;