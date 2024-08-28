import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function TicketSetting( {navigation}) {
    
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View>
        {/* <View style={styles.header}>
            <Icon name="arrow-left" size={20} color="#a31d4a" />
        </View> */}

        {/* <Text style={styles.welcomeText}>Welcome to beaware...</Text> */}

        <Text style={styles.title}>Ticket</Text>

      
        <TextInput 
            style={styles.input} 
            placeholder="Classic" 
            placeholderTextColor="#000" 
            keyboardType="phone-pad"
        />
        <TextInput 
            style={styles.input} 
            placeholder="Medium" 
            placeholderTextColor="#000" 
            keyboardType="phone-pad"
        />
        <TextInput 
            style={styles.input} 
            placeholder="Premium" 
            placeholderTextColor="#000" 
            keyboardType="phone-pad"
        />
        <TextInput 
            style={styles.input} 
            placeholder="VIP +" 
            placeholderTextColor="#000" 
            keyboardType="phone-pad"
        />
        <TextInput 
            style={styles.input} 
            placeholder="VIP Premium" 
            placeholderTextColor="#000" 
            keyboardType="phone-pad"
        />
        
        <TouchableOpacity onPress={() => navigation.navigate('CreateEvent')} style={styles.continueButton}>
            <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        
      
        </View>
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#C53030',
    marginBottom: 20,

  },
  input: {
    width: "100",
    height: "30",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 35,
    paddingHorizontal: 10,
  },
  
  continueButton: {
    backgroundColor: '#C53030',
    width: "200",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


