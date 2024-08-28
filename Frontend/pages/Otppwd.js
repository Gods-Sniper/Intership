import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function OTPScreen ({navigation}) {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (value, index) => {
    const otpCopy = [...otp];
    otpCopy[index] = value;
    setOtp(otpCopy);
  };

  return (
    <ScrollView styles={styles.container}>
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Icon name="arrow-left" size={20} color="#000" />
      </View> */}

      <Image 
        source={require("../../assets/otp.png")} 
        style={styles.image}
      />

      <Text style={styles.title}>Enter OTP</Text>

      <Text style={styles.subtitle}>
        Enter 4 digit verification code sent to your registered mobile number.
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
          />
        ))}
      </View>

      <Text style={styles.resendText}>resend code in 01:00sec</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Resetpwd')} style={styles.submitButton}>
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
    // resizeMode: 'contain',
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
    marginHorizontal: 20,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 10,
  },
  otpInput: {
    width:40,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#f3f3f3',
  },
  resendText: {
    fontSize: 12,
    color: '#000',
    marginBottom: 5,
  },
  submitButton: {
    backgroundColor: '#C53030',
    width: "300",
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


