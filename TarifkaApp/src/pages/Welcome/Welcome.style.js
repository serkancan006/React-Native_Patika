import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fdd7eb',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: '#E53154',
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    paddingLeft: 40,
    paddingRight: 40,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#dfbace',
    borderWidth: 2,
    borderColor: '#d0acbf',
  },
  button_text: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#E53154',
    fontWeight: 'bold',
    fontSize: 18,
  },
  button_text_middle: {
    textAlign: 'center',
    borderRadius: 0,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
