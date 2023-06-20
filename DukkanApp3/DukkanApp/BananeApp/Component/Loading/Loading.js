//npm i --save lottie-react-native
import React from "react";
import Lottie from 'lottie-react-native';

function Loading(){
  return (
    <Lottie source={require('../../assets/loading.json')} autoPlay loop />
);
}

export default Loading;