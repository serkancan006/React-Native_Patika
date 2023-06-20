import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    // backgroundColor:"#FCD63B",
    backgroundColor: '#ffcbdb',
    borderColor: '#f97ebe',
    borderWidth: 2,
    margin: 5,
    flexDirection: 'row',
    borderRadius: 0,
    borderBottomRightRadius: 35,
    borderTopLeftRadius: 35,
    alignItems: 'center',
  },
  image: {
    width: 100,
    minHeight: 75,
    resizeMode: 'contain',
    backgroundColor: '#ffcbdb',
    borderRadius: 15,
    borderTopLeftRadius: 35,
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'normal',
    fontSize: 22,
    color: '#000',
  },
  description: {
    textAlign: 'right',
    color: '#000',
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '500',
  },
});
