import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 29,
    fontWeight: 'bold',
  },
  info_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  info_container_text: {
    color: 'black',
    fontSize: 15,
    padding: 10,
  },
  text_container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'red',
  },
  content_container: {
    flexDirection: 'row',
    flex: 1,
  },
  artist: {
    fontSize: 15,
  },
  year: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'grey',
  },
});