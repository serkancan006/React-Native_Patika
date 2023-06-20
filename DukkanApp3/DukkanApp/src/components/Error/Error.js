// npm i --save lottie-react-native
import React from "react";
import Lottie from 'lottie-react-native';

function Error(){
    return (
        <Lottie source={require('../../assets/error.json')} autoPlay loop />
    );
}

export default Error;