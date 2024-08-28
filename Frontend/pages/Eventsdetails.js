import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
// import { ImageBackground } from 'react-native-web';

export default function Eventsdetails({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          {/* Menu Icon */}
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        
        <Text style={styles.title}>MTN Cameroun</Text>
      </View>

      <View style={styles.eventheader}>
            {/* Event Image */}
            <ImageBackground style={styles.eventImage} source={require ('../../assets/sec.png')}>
            <View style={styles.eventName}>
                <Text style={styles.eventName}>MTN ZIK</Text>
                <Text style={styles.eventSubtitle}>Nullam sagittis erat, a ullamcorper ligula lacinia sit amet...</Text>
            </View>
            </ImageBackground>
                 {/* Event Name */}
            
      </View>

      {/* Event Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.label}>Date</Text>
        <TextInput style={styles.input} value="01 November 2024" editable={false} />

        <Text style={styles.label}>Event Time</Text>
        <View style={styles.timeContainer}>
          <TextInput style={styles.timeInput} placeholder="15H00" />
          <TextInput style={styles.timeInput} placeholder="22h30" />
        </View>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>
          Vivamus tristique sagittis eros, a ullamcorper ligula lacinia sit amet. Quisque eu velit ut magna
          efficitur euismod et id lacus. Nullam malesuada turpis sit amet orci ultrices fringilla.
        </Text>

        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} value="Hotel Hilton" editable={false} />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.interestedButton}>
          <Text style={styles.buttonText}>Interested</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')} style={styles.buyTicketButton}>
          <Text style={styles.buttonText}>Buy Ticket</Text>
        </TouchableOpacity>
      </View>

   
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuButton: {
    padding: 8,
  },
  alertButton: {
    padding: 8,
  },
  menuIcon: {
    fontSize: 24,
  },
  eventheader: {

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 20,
  },
  eventName: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: "#a31d4a",
    fontStyle: 'italic',
    padding: 10,
    
  },
  eventSubtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: '#F0F0F0',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  timeInput: {
    flex: 1,
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8,
    backgroundColor: '#F0F0F0',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  interestedButton: {
    flex: 1,
    backgroundColor: '#a31d4a',
    paddingVertical: 12,
    borderRadius: 4,
    marginRight: 8,
    alignItems: 'center',
  },
  buyTicketButton: {
    flex: 1,
    backgroundColor: '#a31d4a',
    paddingVertical: 12,
    borderRadius: 4,
    marginLeft: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#F8F8F8',
    borderTopWidth: 1,
    borderColor: '#E7E7E7',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 14,
    color: '#FF69B4',
  },
});
