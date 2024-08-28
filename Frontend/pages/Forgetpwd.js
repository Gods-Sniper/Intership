import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Forgetpwd( {navigation}) {
  return (
    <ScrollView styles={styles.container}>
        <View style={styles.container}>
      {/* <View style={styles.header}>
        <Icon name="arrow-left" size={20} color="#a31d4a" />
      </View> */}

      <Image source={require ("../../assets/forgetpwd.png")} style={styles.image}/>

      <Text style={styles.title}>Forgot                                      your Password?</Text>

      {/* <Text style={styles.subtitle}>
        Please enter the email address  like your password reset information sent to
      </Text> */}

      <TextInput 
        style={styles.input} 
        placeholder="Email Address/ Mobile Number" 
        placeholderTextColor="#000" 
        keyboardType="email-address"
      />

      <TouchableOpacity onPress={() => navigation.navigate('OTPScreen')} style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C53030',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#C53030',
    width: "100",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

