import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons like the back arrow


export default function Resetpwd({navigation}) {
  return (
    <ScrollView styles={styles.container}>
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Icon name="arrow-left" size={20} color="#a31d4a" />
      </View> */}

      <Image source={require ("../../assets/resetpwd.png")} style={styles.image}/>

      <Text style={styles.title}>Reset                                       Password?</Text>

     

      <TextInput 
        style={styles.input} 
        placeholder="New Password" 
        placeholderTextColor="#000" 
        keyboardType="email-address"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Confirm Mew Password" 
        placeholderTextColor="#000" 
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.submitButton}>
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
    height: 260,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a31d4a',
    marginBottom: 10,
  },
 
  input: {
    width: "100",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
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

