import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';


const events = [
    { id: '1', title: 'MTN Cameroun', description: 'Nullam sagittis orci in magna posuere bibendum.' },
    { id: '2', title: 'MTN Cameroun', description: 'Nullam sagittis orci in magna posuere bibendum.' },
    { id: '3', title: 'MTN Cameroun', description: 'Nullam sagittis orci in magna posuere bibendum.' },
    { id: '4', title: 'MTN Cameroun', description: 'Nullam sagittis orci in magna posuere bibendum.' },
    { id: '5', title: 'MTN Cameroun', description: 'Nullam sagittis orci in magna posuere bibendum.' },
    { id: '6', title: 'MTN Cameroun', description: 'Nullam sagittis orci in magna posuere bibendum.' },
];

export default  function RecentsEvents ({ navigation }) {
    const renderItem = ({ item }) => (
        <View style={styles.eventItem}>
            <Image
                source={require('../../assets/favicon.png')} 
                style={styles.eventIcon}
            />
            <View style={styles.eventDetails}>
                <Text style={styles.eventTitle}>{item.title}</Text>
                <Text style={styles.eventDescription}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.viewMoreButton}>
                <Text style={styles.viewMoreButtonText}>View More</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView styles={styles.container}>
            <View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Recents Events</Text>
                </View>
                <FlatList
                    data={events}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    backIcon: {
        fontSize: 24,
        color: '#000',
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ff0055',
    },
    logo: {
        fontSize: 18,
        color: '#000',
    },
    listContent: {
        paddingHorizontal: 20,
    },
    eventItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    eventIcon: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    eventDetails: {
        flex: 1,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff0055',
    },
    eventDescription: {
        fontSize: 14,
        color: '#666',
    },
    viewMoreButton: {
        backgroundColor: '#ff0055',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    viewMoreButtonText: {
        color: '#fff',
        fontSize: 14,
    },
});


