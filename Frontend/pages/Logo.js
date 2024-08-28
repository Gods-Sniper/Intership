import React, {useEffect, useState} from 'react';
import { View, Image, StyleSheet, Text, Button, } from 'react-native';
import logo from '../../assets/logo-beaware.png';


export default function LogoPage( {navigation}) {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace('SelectHobbies');
    }, 3000); 
  }, [navigation]);
  
    return (
      <View style={styles.container}>
        <Image  source={logo} style={styles.logo} />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    width: 100,
    height: 30,
    marginBottom: 50,
  },
  Button: {
    backgroundColor: '#a31d4a',
  },
});
