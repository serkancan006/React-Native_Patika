import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd1dc',
  },
  body_container: {
    padding: 10,
  },
  image_container: {},
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    // resizeMode:"contain",
    borderBottomRightRadius: 50,
  },
  title: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: '#76666e',
  },
  area: {
    margin: 10,
    textAlign: 'right',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4e4449',
  },
  instructions: {
    padding: 5,
    fontStyle: 'italic',
    marginVertical: 5,
    fontSize: 18,
    color: '#4e4449',
  },
  youtube: {
    marginVertical: 10,
    padding: 13,
    backgroundColor: '#c58bec',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  youtube_text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
