import React from "react";
import { SafeAreaView,Text,Image, View, ScrollView } from "react-native";
//Style
import styles from  './Detail.style';
//Custom Hook
import useFetch from "../../hooks/useFetch";
//URL Config
import config from 'react-native-config';
//Lottie Component
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";


const Detait = ({route}) => {
    const {id} = route.params;
    const {loading, error, data} = useFetch(`${config.API_URL}/${id}`);
    //const {loading, error, data} = useFetch(`${config.API_URL}/${id}as`); //error deneme
    //console.log(id);

    if(loading){
        //return <ActivityIndicator size="large"/>;
        return <Loading />;
     }
     if(error){
         //return <Text>{error}</Text>;
         return <Error />;
     }
    return(
            <ScrollView style={styles.container}>
                <Image source={{uri: data.image}} style={styles.image}/>
                <View style={styles.bodycontainer}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.desc}>{data.description}</Text>
                    <Text style={styles.price}>{data.price} TL</Text>
                </View>
            </ScrollView>
    )
}

export default Detait;