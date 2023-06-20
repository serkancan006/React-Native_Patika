import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffa6c9',
    borderWidth: 1,
    borderColor: '#1f1f1f',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    margin: 3,
    flexDirection: 'row',
    color: '#4d2d3d',
  },
  image: {
    width: 100,
    minHeight: 120,
    resizeMode: 'contain',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
  },
  body_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '800',
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textDecorationColor: '#00008b',
  },
  button: {
    position: 'absolute',
    margin: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#660099',
    borderColor: 'white',
    color: 'white',
    overflow: 'hidden',
    right: 0,
    bottom: 0,
  },
});
