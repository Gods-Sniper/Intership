import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Button,ImageBackground } from 'react-native';
import bg from '../../assets/headerim.png'

export default function Create( {navigation}) {
  return (
    
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={styles.container}>
      {/* Header Image */}
      <View
        style={styles.headerImage}>
      <ImageBackground source={bg} style={styles.headerbgImage} >

      {/* Grid of Images */}
      <View style={styles.image}>
        <Image source={ require ("../../assets/first.png")} style={styles.smallImage} />
        <Image source={ require ("../../assets/sec.png")} style={styles.smallImage} />
        <Image source={ require ("../../assets/third.png")} style={styles.smallImage} />
        <Image source={ require ("../../assets/fourth.png")} style={styles.smallImage} />
        <Image source={ require ("../../assets/fifth.png")} style={styles.smallImage} />
        <Image source={ require ("../../assets/sixth.png")} style={styles.smallImage} />
      </View>

      </ImageBackground>

      </View>

      {/* Title and Subtitle */}
      <Text style={styles.title}>See what's happening in your area</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, Vivamus tristique sagittis eros, a ullamcorper consectetur adipiscing
      </Text>

      {/* Buttons */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.button}>
        <Text style={styles.buttonText}>Create Account </Text>
        
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Professional Account</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.button}>
        <Text style={styles.buttonText}>Already have an Account</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerbgImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 355,
    height: 200,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    transform: [{ rotate: '-13deg'}],
    marginTop: 180,
    padding: 5,
    
  },
  smallImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#C53030',
    textAlign: 'center',
    marginVertical: 10,
    marginTop:170,
  },
  subtitle: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
    marginTop:2,
  },
  button: {
    backgroundColor: '#C53030',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginTop:5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


