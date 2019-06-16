import React from 'react';
import bg from '../../assets/images/bg.png';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity } from 'react-native';

const Welcome = ({navigation}) => {
  return (
      <ImageBackground source={bg} style={styles.container}>
          <View style={styles.over}>
              <View style={styles.top}>
                    <Text style={styles.head}>Get insights</Text>
                    <Text style={styles.head1}>Stay up to date</Text>
                    <Text style={styles.head1}>With credit score</Text>
            <View style={styles.btn}>
          <TouchableOpacity title="Sign Up" onPress={()=>navigation.navigate('Signup')} style={styles.tee}>
              <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity title="Sign in" onPress={()=>navigation.navigate('Signin')} style={styles.tee1}>
              <Text style={styles.btntext1}>Sign In</Text>
          </TouchableOpacity>
          </View>
            </View>
          </View>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height: '100%',
    resizeMode: 'cover',
  },
  over:{
      flex: 1,
  },
  top:{
      flex:1,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70%'
  },
  head:{
    color: '#7B1A77',
    fontSize: 28,
    padding: 20,
  },
  head1:{
    color: '#ffffff',
    fontSize: 28,
    padding: 20,
  },
  btn:{
    fontSize: 28,
      flex: 1,
      flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: "10%",
    marginTop: "37%",
  },
  tee:{
      color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
      backgroundColor: '#7B1A77',
      fontSize: 30,
      height:'90%',
      width: '60%',
  },
  tee1:{
    justifyContent: 'center',
    alignItems: 'center',
      backgroundColor: 'white',
      height:'60%',
      width: '60%', 
  },
  btntext:{
    fontSize: 28,
    color: 'white',
  },
  btntext1:{
    fontSize: 28,
    color: '#7B1A77',
  },
});
export default Welcome;