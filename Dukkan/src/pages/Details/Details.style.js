import {StyleSheet, Dimensions} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    color: '#4d2d3d',
    backgroundColor: '#fdd7eb',
  },
  image: {
    borderWidth: 5,
    borderColor: '#d0acbf',
    resizeMode: 'contain',
    width: deviceSize.width,
    height: deviceSize.height / 3,
    minHeight: 100,
    backgroundColor: 'white',
  },
  body_container: {
    margin: 10,
    padding: 5,
    color: '#4d2d3d',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  desc: {
    marginTop: 10,
    fontSize: 16,
  },
  price: {
    margin: 20,
    textAlign: 'right',
    fontSize: 20,
    fontStyle: 'italic',
  },
});
