import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 

export default function HomePage ({navigation})  {
  // Sample data for events
  const events = [
    { id: '1', title: 'MTN Cameroun', description: 'Lorem ipsum dolor ' },
    { id: '2', title: 'Orange', description: 'Lorem ipsum dolor ' },
  ];

  const recentEvents = [
    { id: '3', title: 'Camtel', description: 'Lorem ipsum dolor ' },
    { id: '4', title: 'Realize', description: 'Lorem ipsum dolor ' },
  ];

  const images = {
    1: require('../../assets/first.png'),
    2: require('../../assets/sec.png'),
    3: require('../../assets/third.png'),
    4: require('../../assets/fourth.png'),
  }

  const renderEvent = ({ item }) => (
    <View style={styles.eventCard}>
      <Image source={images[item.id]} style={styles.eventImage} />

      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{item.title}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Eventsdetails')} style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
      </View>

    </View>
  );

  return (
    <ScrollView style={styles.container}>
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                    <Text style={styles.welcomeText}>Hey User Name !</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CreateEvent') } style={styles.createevent}>
                    <Text style={styles.createEventText}>Create event</Text>
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Icon name="search-outline" size={20} color="#666" />
                <TextInput
                style={styles.searchInput}
                placeholder="Search"
                placeholderTextColor="#666"
                />
            </View>

            {/* Upcoming Events Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Up Coming Events</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('UpcomingEvents')} style={styles.listMoreText}>
                    {/* <Text style={styles.listMoreText}>list more</Text> */}
                    <Icon name='list-outline' size={20} color="#000" />
                  </TouchableOpacity>
            </View>
              <FlatList
                  data={events}
                  renderItem={renderEvent}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.eventList}
              />

            {/* Recent Events Section */}
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Recent Events</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('RecentsEvents')} style={styles.listMoreText}>
                  <Icon name='list-outline' size={20} color="#000" />
                  </TouchableOpacity>
            </View>
              <FlatList
                  data={recentEvents}
                  renderItem={renderEvent}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.eventList}
              />

            {/* Bottom Navigation */}
            <View style={styles.bottomNavigation}>
                <TouchableOpacity>
                <Icon name="home" size={25} color="#a31d4a" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('EventCategory')}>
                <Icon name="albums" size={25} color="#a31d4a" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                <Icon name="person" size={25} color="#a31d4a" />
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // padding: , 
    backgroundColor: '#f7f7f7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  createEventText: {
    fontSize: 16,
    color: '#a31d4a',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  listMoreText: {
    fontSize: 14,
    color: '#C53030',
  },
  eventList: {
    paddingLeft: 20,
  },
  eventCard: {
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  eventImage: {
    width: '100%',
    height: 100,
  },
  eventContent: {
    padding: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#C53030',
  },
  eventDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  viewMoreButton: {
    backgroundColor: '#C53030',
    paddingVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
  },
  viewMoreText: {
    color: '#fff',
    fontSize: 14,
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
});


