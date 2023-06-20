import React, {useState, useEffect} from "react";
import { SafeAreaView,View,Text,Button,FlatList,ActivityIndicator } from "react-native";
import axios from "axios";
import UserCard from "./component/UserCard/UserCard";

function App(){
  async function fetchData(){
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response);
    //axios.get('https://jsonplaceholder.typicode.com/users')
    //.then(res => console.log(res))
    //.catch(err => console.log(err));
  }

  return(
    <SafeAreaView>
      <View>
        <Text>Hello Api</Text>
        <Button 
        title="Fetch Data"
        onPress={fetchData}
        />
      </View>
    </SafeAreaView>
  );
}

const URL =  'https://jsonplaceholder.typicode.com/users';

function App2(){
  const [loading, setLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  /* async function fetchData(){
     const res = await axios.get(URL);
     setLoading(false);
     setUserList(res.data);
  } 
  */
  async function fetchData(){
   axios.get(URL).
   then(res => {
    setLoading(false);
    setUserList(res.data);
   });
 } 

  const renderUser = ({item}) => (
  <UserCard name={item.name} email={item.email} username={item.username}/>
  );

  useEffect(() => {
    fetchData();
  }, [])

  return(
    <SafeAreaView>
      <View>
        { 
          loading ? ( <ActivityIndicator size='large'/> )
          : (<FlatList  data={userList} renderItem={renderUser} />)
        }
        <Button title="Fetc Data" onPress={fetchData} />
      </View>
    </SafeAreaView>
  );
}

export default App2;