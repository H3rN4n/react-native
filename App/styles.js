import { StyleSheet } from 'react-native';

export default function getStyles(){
  const primary = '#3399db';
  //const primary = '#5BFF1B';
  return StyleSheet.create({
    subheader: {
      color: '#F4F4F4',
      fontSize: 20,
      textAlign: 'center',
      backgroundColor: primary, //'#F4F4F4',
      padding: 15
    },
    viewWhite:{
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: 'white',
      padding: 10,
      margin: 0,
      justifyContent:'center'
    },
    bgview: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#000000',
      padding: 0,
      margin: 0
    },
    white:{
      backgroundColor: 'white',
    },
    transparent:{
      backgroundColor: 'transparent',
    },
    view: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#F4F4F4',
      padding: 0,
      margin: 0
    },

    viewrow: {
      flex: 0,
      flexDirection: 'row',
      backgroundColor: '#F4F4F4',
      padding: 15
    },

    viewrowWhite:{
      flex: 0,
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 15
    },

    viewContainer: {
      flex: 1,
      marginLeft: 15,
      marginRight: 15,
    },
    
    input: {
      height: 45,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 15,
      marginBottom: 10,
      lineHeight: 28
    },
    centerView: {
      paddingLeft: 15,
      paddingTop: 10,
      flex: 1,
      justifyContent:'center'
    },
    title: {
      fontSize: 26,
      textAlign: 'center',
      backgroundColor: primary,
      color: 'white',
      marginTop: 20
    },
    subtitle: {
      flex: 1,
      fontSize: 13,
      color: primary,
      marginTop: 10,
      paddingLeft: 35,
      paddingTop: 30
    },
    statusText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 20
    },
    TouchableHighlight:{
      borderRadius: 10,
      backgroundColor: primary,
      padding: 15,
      paddingTop: 20,
      paddingBottom: 20,
      marginTop: 15,
      
    },
    button: {
      color: '#FFF',
      fontSize: 22,
      textAlign: 'center',
    },
    message: {
      backgroundColor: '#FFF',
      color: primary,
      padding: 26,
      textAlign: 'center',
      marginTop: 8,
      fontSize: 24,
    },
    messageHome: {
      backgroundColor: '#FFF',
      color: primary,
      padding: 10,
      textAlign: 'left',
      marginTop: 8,
      fontSize: 16,
    },
    login: {
      backgroundColor: primary,
      color: '#FFF',
      padding: 15,
      textAlign: 'center',
      marginTop: 15,
      fontSize: 16,
    },
    navigationBar:{
      flex: 1, 
      backgroundColor: '#fff', 
      height: 70,
    },
    navigationBarTitle:{
      fontSize: 18,
      fontWeight: 'bold',
    },
    navigationBarLeft:{
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft: 10,
    },
    loading: {
      opacity: 0.5
    },
    tileTitle: {
      fontSize: 20
    },
    imageContainer: {
      alignItems: 'stretch',
      paddingTop: 20
    },
    imageContainerWhite: {
      alignItems: 'stretch',
      backgroundColor: 'white',
      marginTop:8,
      paddingLeft:10,
      paddingBottom:10,
    },
    imageWifi: {
      width: 60,
      height: 54,
      padding: 0,
      margin: 0,
      marginTop:20,
      
    },
    imageCloud: {
      width: 77,
      height: 50,
      padding: 0,
      margin: 0,
      marginTop: 10,
    },
    imageCloudFiles: {
      width: 77,
      height: 50,
      padding: 0,
      marginTop:20,
      margin: 0,
    }
  });
}