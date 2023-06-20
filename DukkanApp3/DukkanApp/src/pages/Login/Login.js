import React from "react";
import { SafeAreaView,Text,View, Image, Alert } from "react-native";
import {useDispatch} from 'react-redux';
//asyncstroga paketi
import AsyncStorage from '@react-native-async-storage/async-storage';
//formik liblary
import { Formik } from "formik";
//Custom component
import Input from '../../components/İnput';
import Button from '../../components/Button';
//Login style
import styles from './Login.style';
//Custom hook
import usePost from "../../hooks/usePost";
//Url Config
import config from "react-native-config";

const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values){
    //console.log(values);
    post(config.API_AUTH_URL + '/login',values);
  }

  if(error){
    Alert.alert('Dükkan',' Bir hata oluştu!');
  }
  if(data){
    if(data.status === 'Error'){
      Alert.alert('Dükkan','Kullanıcı bulunamadı!');
    }
    else{
      dispatch({type: 'SET_USER',payload: {user}});
      //AsyncStorage.setItem('@USER',JSON.stringify(user)); 
      //navigation.navigate('ProductsPage');
    }
    //console.log(data);
  }

  //AsyncStorage.setItem('@user','asdas')  ekle belleğe
  //AsyncStorage.getItem('@user')  getir
  //AsyncStorage.removeItem('@user')  sil

    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.logo_container}>
            <Image style={styles.logo} source={require('../../assets/login-logo.png')}/>
          </View>

          <Formik initialValues={{username: '', password: ''}} 
          onSubmit={handleLogin}
          //validationSchema yup paketi ile
          >
           {({handleSubmit, handleChange, values}) => (
            <View style={styles.body_container}>
            <Input 
            placeholder='Kullanıcı adını giriniz..' 
            value={values.username}
            onType= {handleChange('username')}
            iconname="account"
            />
            <Input 
            placeholder='Şifre giriniz...' 
            value={values.password}
            onType= {handleChange('password')}
            iconname="key"
            isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
           </View>
           )}
          </Formik>
        </SafeAreaView>
    )
}

export default Login;

const user = {
  "address":
{"geolocation": {
  "lat":"-37.3159",
  "long":"81.1496"
},
  "city":"kilcoole",
  "street":"new road",
  "number":7682,
  "zipcode":"12926-3874"
},
"id":1,
"email":"john@gmail.com",
"username":"johnd",
"password":"m38rmF$",
"name":
{"firstname":"john",
"lastname":"doe"
},
"phone":"1-570-236-7033",
"__v":0
}