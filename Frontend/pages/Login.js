import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function LoginScreen ( {navigation}) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
      <ScrollView contentContainerStyle={styles.container}>
          <View>
          <Image 
              source={require ("../../assets/Loginimg.png")} 
              style={styles.image}
          />

          <Text style={styles.title}>Log in</Text>

          <TextInput 
              style={styles.input} 
              placeholder="Email Address" 
              placeholderTextColor="#000"
              keyboardType="email-address"
          />

          <View style={styles.passwordContainer}>
              <TextInput 
              style={styles.passwordInput} 
              placeholder="Password" 
              placeholderTextColor="#000"
              secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
              <Icon name={passwordVisible ? "eye" : "eye-slash"} size={20} color="#000" />
              </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Forgetpwd')} style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.continueButton}>
              <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>or</Text>

          <TouchableOpacity style={styles.googleButton}>
              <Text style={styles.buttonText}>Continue with Google</Text>
              {/* <Icon name={googleButton ? "google" : ""} size={20} color="#000" /> */}
          </TouchableOpacity>

            <View style={styles.alreadytext}>
              <Text style={styles.signupText}>
                  Don't have an account? 
              </Text>
                  
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.signupLink}>Sign in</Text>
                </TouchableOpacity>
            </View>
          
          </View>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 10,
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
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C53030',
    marginBottom: 10,
  },
  input: {
    width: "100",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "'100%'",
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#C53030',
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#C53030',
    width: "100",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 4,
  },
  orText: {
    fontSize: 14,
    color: '#000',
    marginVertical: 10,
    textAlign: 'center'
  },
  googleButton: {
    backgroundColor: '#C53030',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupText: {
    fontSize: 14,
    color: '#000',
  },
  signupLink: {
    color: '#a31d4a',
    fontWeight: 'bold',
  },
  alreadytext:{
    flexDirection: 'row',
    alignItems: 'center',
  }
});


