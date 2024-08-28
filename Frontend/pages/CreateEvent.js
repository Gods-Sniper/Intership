import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import RNPickerSelect from "react-native-picker-select";

export default function CreateEvent({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(null);
  const [data, setData] = useState("");
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        {/* <Icon name="arrow-left" size={24} color="#900" /> */}
        <Text style={styles.title}>Create Event</Text>
      </View>

      <TextInput style={styles.input} placeholder="Event Title" />

      <TouchableOpacity style={styles.dropdown}>
        <TextInput style={styles.dropdownText}>Event type</TextInput>

        {/* <Icon name="chevron-down" size={20} color="#900" /> */}
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
          fixAndroidTouchableBug={true}
          useNativeAndroidPickerStyle={false}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={data}
        onChangeText={setData}
        placeholder="Event Date"
      />

      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Subscription Plan</Text>
        <Icon name="chevron-down" size={20} color="#900" />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("TicketSetting")}
        style={styles.dropdown}
      >
        <Text style={styles.dropdownText}>Tickets Setting</Text>
        {/* <Icon name="chevron-down" size={20} color="#900" /> */}
      </TouchableOpacity>

      <View style={styles.timeContainer}>
        <TextInput style={styles.timeInput} placeholder="Start time" />
        <TextInput style={styles.timeInput} placeholder="End time" />
      </View>

      <View style={styles.addressContainer}>
        <TextInput style={styles.addressInput} placeholder="Country" />
        <TextInput style={styles.addressInput} placeholder="City" />
        <TextInput style={styles.addressInput} placeholder="Online" />
      </View>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Description"
        multiline
        numberOfLines={4}
      />

      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton}>
          <Icon name="image" size={24} color="#900" />
          <Text>Upload Images</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.uploadButton}>
          <Icon name="video-camera" size={24} color="#900" />
          <Text>Upload Video</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#900",
    marginLeft: 10,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 5,
    fontWeight: "light",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
    padding: 10,
  },
  dropdownText: {
    color: "#999",
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  timeInput: {
    width: "48%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  addressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  addressInput: {
    width: "30%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  uploadContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  uploadButton: {
    width: "48%",
    height: 80,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  saveButton: {
    backgroundColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  createButton: {
    backgroundColor: "#900",
    padding: 15,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
