import React, {useState,useEffect}from "react";
import { SafeAreaView,View,Text, FlatList, ActivityIndicator,Button } from "react-native";
import config from 'react-native-config';
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
// Custom Compenent
import ProductCard from '../../components/ProductCard';
//Custom hook
import useFetch from "../../hooks/useFetch"; 
//Lottie Component
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

const Products = ({navigation}) => {
    const user = useSelector(s => s.user);
    const {loading, data, error} = useFetch(config.API_URL); //custom hook
    /*
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() => {
        try {
            const {data: productData} = await axios.get(config.API_URL);
            //const data = (await res).data;
            setData(productData);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }
*/

    const handleProductSelect = (id) => {
        navigation.navigate('DetailPage', {id});
    };

    const renderProduct = ({item}) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)}/>;

    if(loading){
       //return <ActivityIndicator size="large"/>;
       return <Loading />;
    }
    if(error){
        //return <Text>{error}</Text>;
        return <Error />;
    }
    return(
        <View>
            <Text>Hello: {user.name.firstname}</Text>
            <FlatList
            data={data}
            renderItem={renderProduct}
             />
            <Text>Products! {config.API_URL}</Text>
        </View>
    );
};

export default Products;