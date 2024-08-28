import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For icons like the back arrow and eye icon
// import { Picker } from '@react-native-picker/picker'; 

export default function SignUp( {navigation}) {
    const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View>
        {/* <View style={styles.header}>
            <Icon name="arrow-left" size={20} color="#a31d4a" />
        </View> */}

        <Text style={styles.welcomeText}>Welcome to beaware...</Text>

        <Text style={styles.title}>Sign up</Text>

        <TextInput 
            style={styles.input} 
            placeholder="First Name" 
            placeholderTextColor="#000" 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Last Name" 
            placeholderTextColor="#000" 
        />
        <TextInput 
            style={styles.input} 
            placeholder="Phone" 
            placeholderTextColor="#000" 
            keyboardType="phone-pad"
        />
        <TextInput 
            style={styles.input} 
            placeholder="Email" 
            placeholderTextColor="#000" 
            keyboardType="email-address"
        />
        <TextInput 
            style={styles.input} 
            placeholder="Location" 
            placeholderTextColor="#000" 
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
        
        <Text style={styles.termsText}>
            By signing up, you are agree to our <Text style={styles.linkText}>Terms & Conditions</Text> and <Text style={styles.linkText}>Policies</Text>
        </Text>
        
        <TouchableOpacity onPress={() => navigation.navigate('HomePage')} style={styles.continueButton}>
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        
        <View style={styles.footer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.signInText}>Log in</Text>
            </TouchableOpacity>
        </View>
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
  welcomeText: {
    marginTop: 30,
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
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
    marginBottom: 15,
    paddingHorizontal: 10,
  },

  passwordContainer: {
    flexDirection: 'row',
    width: "100",
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 5,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: '#C53030',
    textDecorationLine: 'underline',
  },
  continueButton: {
    backgroundColor: '#C53030',
    width: "300",
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
  signInText: {
    color: '#C53030',
    fontWeight: 'bold',
  },
});


