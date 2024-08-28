import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Payment({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment</Text>

      {/* Payment Method Section */}
      <Text style={styles.label}>Choose a payment method</Text>
      <View style={styles.paymentMethods}>
        <Image source={require('../../assets/OM.png')} style={styles.methodIcon} />
        <Image source={require("../../assets/MOMO.png")} style={styles.methodIcon} />
        
      </View>

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
      />

      {/* Event Title Input */}
      <TextInput
        style={styles.input}
        placeholder="Event Title"
      />

      {/* Ticket and Price Section */}
      <View style={styles.ticketRow}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Ticket"
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Price"
          keyboardType="numeric"
        />
      </View>

      {/* Total Section */}
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>0Frs</Text>
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  methodIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FFFF',
  },
  input: {
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  payButton: {
    backgroundColor: '#A31D4A',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
