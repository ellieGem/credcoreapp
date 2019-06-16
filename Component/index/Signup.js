import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';

const Signup = (navigation) => {
  return (
      <ScrollView>
    <View style={styles.container}>
      <Text style={{
fontWeight: 'bold',
fontSize: 18}}>NEW</Text>
      <Text style={{
fontWeight: 'normal',
fontSize: 18, marginBottom: '15%'}}>ACCOUNT</Text>

      <TextInput style={styles.tpt} placeholder='First Name'></TextInput>
      <TextInput style={styles.tpt} placeholder='Last Name'></TextInput>
      <TextInput style={styles.tpt} placeholder='Gender'></TextInput>
      <TextInput style={styles.tpt} placeholder='+233 (030) 777 777'></TextInput>
      <TextInput style={styles.tpt} placeholder='Email Address'></TextInput>
      <TextInput style={styles.tpt} placeholder='Password'></TextInput>
      <TextInput style={styles.tpt} placeholder='ID Number'></TextInput>

      <TouchableOpacity style={{backgroundColor: 'rgba(123, 26, 119, 0.8)', width: 100,
height: 25, marginLeft: 50}}>
          <Text style={{color: '#fff', fontSize: 14, textAlign: 'center', paddingTop: 5}} onPress={()=>navigation.navigate('Dashboard')}>SIGN UP</Text>
      </TouchableOpacity>
     <Text style={{color: '#000000', fontSize: 12, marginTop: 20, marginBottom: 10}}>'I agree to the terms and conditions of CredCore Inc. and agree
  to receive marketing promotions, special offers, inspiration,
  and policy updates via email.'</Text> 
        <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: '#000000'}}>Already a user?</Text>
            <TouchableOpacity style={{backgroundColor: '#fff'}} onPress={()=>navigation.navigate('Signin')}>
                <Text style={{color: 'rgba(123, 26, 119, 0.8)'}}>SIGN IN</Text>
            </TouchableOpacity>
        </View>

    </View>
    <View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: '10%',
    marginLeft: '15%',
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
});
export default Signup;