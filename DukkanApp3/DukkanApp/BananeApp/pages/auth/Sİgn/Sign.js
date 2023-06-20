import React, {useState} from "react";
import { View,Text,SafeAreaView, ScrollView } from "react-native";
import { Formik } from "formik";
import styles from './Sİgn.style';
import auth from '@react-native-firebase/auth';
import { showMessage, hideMessage } from "react-native-flash-message";

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import Input from '../../../Component/Input';
import Button from '../../../Component/Button';

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
};

function SignPage({navigation}){
    const [loading, setLoading] = useState(false);
    function handleLogin(){
        navigation.goBack();
    }

    async function handleFormSubmit(formValues){
        if(formValues.password != formValues.repassword ){
            showMessage({
                message: 'Şifreler uyuşmuyor',
                type: "danger",
            });
            return;
        }

        try {
            setLoading(true);
            await auth().createUserWithEmailAndPassword(
                formValues.usermail, 
                formValues.password
                );
                showMessage({
                    message: 'kullanıcı oluşturuldu',
                    type: "success",
                  });
                  navigation.navigate('LoginPage')
            //console.log(formValues);
            setLoading(false);
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "danger",
              });
            //console.log(error);
            setLoading(false);
        }
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Bana Ne?</Text>
            <Text style={styles.text}>SignPage</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
            {({values, handleChange, handleSubmit}) => (
            <>
            <Input
             placeholder='E-POSTANIZI GİRİNİZ...'
             onType={handleChange('usermail')} 
             value={values.usermail} 
             />
            <Input
             placeholder='ŞİFREİNİZİ GİRİNİZ...'
             onType={handleChange('password')} 
             value={values.password} 
             isSecure
              />
            <Input
             placeholder='ŞİFREİNİZİ TEKRAR GİRİNİZ...'
             onType={handleChange('repassword')} 
             value={values.repassword} 
             />
            <Button text='Kayıt Ol' loading={loading} theme='primary' onPress={handleSubmit}/>
            </>
             )}
            </Formik>
            <Button text='Geri Dön' theme='secondary' onPress={handleLogin}/>
        </ScrollView>
    )
}

export default SignPage;