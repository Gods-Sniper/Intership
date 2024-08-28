import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

export default function Errorsmsg() {
  return (
    <View style={styles.container}>
      <View style={styles.checkmarkContainer}>
        <Icon name="exclamation" size={60} color="#ffffff" />
      </View>

      <Text style={styles.title}>Error!</Text>
      <Text style={styles.message}>Your Password has not been reset successfully</Text>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  checkmarkContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#a31d4a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: '#a31d4a',
    width: 100,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});


