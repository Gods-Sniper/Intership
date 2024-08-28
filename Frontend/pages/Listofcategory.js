import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const eventCategories = [
  { id: '1', name: 'Music', icon: 'music-note', description: 'Concerts, Festivals, and more', page: 'Music' },
  { id: '2', name: 'Sports', icon: 'sports-football', description: 'Football, Basketball, and more', page: 'Sports'},
  { id: '3', name: 'Art', icon: 'brush', description: 'Art Exhibitions, Galleries, and more', page: 'Art' },
  { id: '4', name: 'Theatre', icon: 'theater-comedy', description: 'Plays, Musicals, and more',page: 'Theatre' },
  { id: '5', name: 'Tech', icon: 'computer', description: 'Conferences, Workshops, and more' ,page: 'Tech'},
  { id: '6', name: 'Food', icon: 'restaurant-menu', description: 'Food Festivals, Tasting Events, and more',page: '' },
  { id: '7', name: 'Fitness', icon: 'fitness-center', description: 'Marathons, Yoga, and more' ,page: 'Music'},
  { id: '8', name: 'Film', icon: 'local-movies', description: 'Film Festivals, Screenings, and more' ,page: ''},
  { id: '9', name: 'Fashion', icon: 'style', description: 'Fashion Shows, Expos, and more',page: '' },
  { id: '10', name: 'Charity', icon: 'volunteer-activism', description: 'Fundraisers, Charity Events, and more',page: '' },
];

const buttom = {
  
}
export default  function EventCategory ({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate(item.page, { category: item })}>
      <Icon name={item.icon} size={40} color="#a31d4a" />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View >
            <FlatList
                data={eventCategories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  list: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  cardContent: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  description: {
    fontSize: 14,
    color: '#777777',
    marginTop: 4,
  },
});








