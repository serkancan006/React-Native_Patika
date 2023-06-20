import React, { useRef, useState } from 'react';
import { Text,SafeAreaView, View } from 'react-native';
//import MapView,{Marker} from 'react-native-maps';
import MapView from 'react-native-maps';
import useFetch from './hooks/useFetch';
import Loading from './components/Loading';
import UserMarker from './components/marker/UserMarker';
import InfoCard from './components/infoCard';


function App() {
  const mapRef = useRef();
  const [user, setUser] = useState();
  const [infoModalVisibility, setinfoModalVisibility] = useState(false);
  const {data,loading,error} = useFetch('https://random-data-api.com/api/users/random_user?size=20');

  //console.log({data, error, loading});

  const renderUserMarker = () => {
    return data.map(({id, avatar, address: {coordinates},
      first_name, last_name, username}) => {
      return(
        <UserMarker 
        key={id}
        coordinates={{
          latitude: coordinates.lat,
          longitude: coordinates.lng,
        }}
        userImageURL={avatar}
        onSelect={() => handleMarkerSelect(coordinates, {
          first_name, last_name, username
        })}
        />
      );
    });
  };

  function handleMarkerSelect(coor, selectedUser) {
    setUser(selectedUser);
    handleModalVisibile();
    mapRef.current.animateToRegion({
      latitude: coor.lat,
      longitude: coor.lng,
      latitudeDelta: 8,
      longitudeDelta: 8,
    })
    //console.log('on select : ' + coor.lat);
  }

  function handleModalVisibile() {
    setinfoModalVisibility(!infoModalVisibility);
  }
  
  return(
    <SafeAreaView style={{flex: 1}}>
      <MapView ref={mapRef} provider='google' style={{flex: 1}} >
        {data && renderUserMarker()}
      </MapView>
      { loading && <Loading /> }
     {user && ( 
     <InfoCard 
      user={user} 
      visible={infoModalVisibility} 
      close={handleModalVisibile}
      />
      )}
    </SafeAreaView>
  )
}

export default App;