import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Account({navugation}) {
    return (
        <ScrollView styles={styles.container}>
            <View style={styles.container}>
                <Text style={styles.header}>Account</Text>
                <View style={styles.profileIconContainer}>
                    <View style={styles.profileIcon}>
                        <Text style={styles.profileIconText}>y</Text>
                    </View>
                </View>
                <View style={styles.menu}>
                    <Icon name="person-circle" label="Personal Details" />
                    <Icon name="mail" label="Address" />
                    <Icon name="cash" label="Payment Method" />
                    <Icon name="help-circle" label="About" />
                    <Icon name="exit" label="Log out" />
                </View>
            </View>
        </ScrollView>
    );
};

const MenuItem = ({ icon, label }) => (
    <TouchableOpacity style={styles.menuItem}>
        <Image source={{ Icon }} style={styles.menuIcon} />
        <Text style={styles.menuText}>{label}</Text>
        <Text style={styles.menuArrow}>&gt;</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        // paddingTop: 40,
        // paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#c81063',
        textAlign: 'center',
        marginBottom: 20,
    },
    profileIconContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    profileIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#e4e4e4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileIconText: {
        fontSize: 36,
        color: '#c81063',
    },
    menu: {
        flex: 1,
    },
    menuItem: {
        flexDirection: 'row',
        // alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    menuIcon: {
        width: 30,
        height: 30,
        marginRight: 20,
    },
    menuText: {
        flex: 1,
        fontSize: 16,
    },
    menuArrow: {
        fontSize: 16,
        color: '#c81063',
    },
});


