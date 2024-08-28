import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const activities = [
  { id: '1', name: 'Running', icon: 'directions-run' },
  { id: '2', name: 'Reading', icon: 'book' },
  { id: '3', name: 'Cooking', icon: 'restaurant-menu' },
  { id: '4', name: 'Gardening', icon: 'local-florist' },
  { id: '5', name: 'Cycling', icon: 'directions-bike' },
  { id: '6', name: 'Photography', icon: 'camera-alt' },
  { id: '7', name: 'Swimming', icon: 'pool' },
  { id: '8', name: 'Traveling', icon: 'flight' },
  
];

export default function SelectHobbies ({navigation}) {
  const [selectedActivities, setSelectedActivities] = useState([]);

  const toggleSelection = (id) => {
    if (selectedActivities.includes(id)) {
      setSelectedActivities(selectedActivities.filter((activityId) => activityId !== id));
    } else {
      setSelectedActivities([...selectedActivities, id]);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => toggleSelection(item.id)}>
      <Icon name={item.icon} size={40} color="#A31D4A" />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.tickBox}>
        {selectedActivities.includes(item.id) && <Icon name="check" size={20} color="#FFF" />}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.Text}>Tell Us more about What interrest You</Text>
      <FlatList
        data={activities}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
        <TouchableOpacity onPress={() => navigation.navigate('Create')} style={styles.continueButton}>
              <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
  },
  list: {
    paddingVertical: 8,
  },
  Text: {
    fontSize: 25,
    color: "#a31d4a",
    textAlign: 'center',
    margin: 25,
    fontWeight: 'bold',
    transform: [{ rotate: '-8deg' }],

  },
  card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
   
    elevation: 3,
  },
  name: {
    fontSize: 16,
    color: '#000',
    fontWeight: "bold",
    marginTop: 8,
  },
  tickBox: {
    marginTop: 16,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#A31D4A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButton: {
    backgroundColor: '#A31D4a',
    width: "90",
    paddingVertical: 7,
    borderRadius: 5,
    alignItems: 'center',
    margin: 4,
    color: "#FFF",
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});


