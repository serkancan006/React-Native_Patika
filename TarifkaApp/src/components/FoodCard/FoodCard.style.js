import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#d0acbf',
    borderColor: '#d0acbf',
    borderWidth: 3,
    margin: 5,
    borderRadius: 10,
  },
  image: {
    // width:Dimensions.get("screen").width,
    minHeight: 170,
    // resizeMode:"contain",
    backgroundColor: 'white',
    borderRadius: 10,
  },
  title_container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#00000099',
    justifyContent: 'flex-end',
    alignItems: 'center',

    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    bottom: 0,
    right: 0,
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
});
