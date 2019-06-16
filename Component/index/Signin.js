import React from 'react';
import signbg from '../../assets/images/signin.png';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Signin = ({navigation}) => {
  return (
    <ImageBackground source={signbg} style={styles.container}>
        <Text style={styles.weltext}>Welcome Back!</Text>
        <View style={styles.signcard}>
            <Text style={{marginTop:'-130%', fontSize:24, marginBottom: '5%'}}>SIGN IN</Text>
            <TextInput style={styles.tpt} placeholder='Email Address'></TextInput>
            <TextInput style={styles.tpt} placeholder='Email Address'></TextInput>
            <TouchableOpacity style={styles.btn}>
                <Text style={{textAlign:'center', color: '#fff'}}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={{color: 'rgba(123, 26, 119, 0.8)'}} onPress={ ()=> Linking.openURL('') } >Forgot password or username</Text>
       

        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    width:'100%',
    height: '60%',
  },
  weltext:{
    flex: 1,
    marginTop: '19%',
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
  },
  signcard:{
      flex: 1,
      textAlign: 'center',
      justifyContent:'center',
      marginTop: "-80%",
      marginLeft: "15%",
      height: "-20%",
      width: "70%",
      backgroundColor: 'white',
      borderRadius: 5,
      shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tpt: {
    width: 210,
    height: 35,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: ' rgba(123, 26, 119, 0.29)',
    borderRadius: 5,
    padding: 5,
    marginBottom: '5%',
  },
  btn: {
    width: 100,
    height: 35,
    backgroundColor: 'rgba(123, 26, 119, 0.8)',
    color: '#fff',
    marginTop: '10%',
    color: '#fff',
    alignContent: 'center',
    marginBottom: 8,
}
});
export default Signin;