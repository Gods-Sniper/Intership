import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Tech({ navigation }) {
  const categories = [
    { id: '1', title: 'Workshops', image: require('../../assets/Tech2.jpg') },
    { id: '2', title: 'Conferences', image: require('../../assets/Tech1.jpg') },
    { id: '3', title: 'More', image: require('../../assets/Tech3.jpg') },
    
  ];


  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity> */}
        <Text style={styles.headerTitle}>Tech</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      {/* Category List */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryContainer}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoryList}
      />

      {/* Bottom Navigation (Mockup) */}
      {/* <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Icon name="home-outline" size={24} color="#C53030" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="grid-outline" size={24} color="#C53030" />
          <Text style={styles.navText}>Category</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Icon name="person-outline" size={24} color="#C53030" />
          <Text style={styles.navText}>Account</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C53030',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: '#333',
  },
  categoryList: {
    paddingHorizontal: 15,
  },
  categoryContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 2,
  },
  categoryImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  categoryTitle: {
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#C53030',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#C53030',
    marginTop: 5,
  },
});
