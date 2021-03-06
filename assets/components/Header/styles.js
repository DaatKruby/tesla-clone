import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container:{
position: 'absolute',
top: 50,
zIndex: 100,
flexDirection: 'row',
justifyContent: 'space-between',
width: '100%',
},
logo:{
width: 100,
height: 30,
resizeMode: 'contain',
},
menu:{
width: 50,
height: 50,
resizeMode: 'contain',
left: 0,
}
});

export default styles;