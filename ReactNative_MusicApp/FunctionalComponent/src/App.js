import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import song_data from './components/songCards_data.json';
import SongCard from './components/SongCard/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [list, setList] = useState(song_data);
  const renderSong = ({item}) => <SongCard song={item} />;
  const itemSeperatorItem = () => <View style={styles.seperator}></View>;
  const handleSearch = text => {
    const filteredList = song_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={itemSeperatorItem}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {borderWidth: 1, borderColor: '#e0e0e0'},
});