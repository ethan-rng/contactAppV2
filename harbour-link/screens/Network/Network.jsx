import { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import ContactList from "./ContactList";
import { useIsFocused } from "@react-navigation/native";

const Network = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contacts, setContacts] = useState([]);
  const isFocused = useIsFocused();

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  useEffect(() => {
    fetch(`${apiUrl}/api/contacts`)
      .then((response) => response.json())
      .then((data) => setContacts(data));
  }, [isFocused]);

  return (
    <ScrollView>
      <SafeAreaView>
        <TextInput
          placeholder="Search for contacts"
          style={styles.searchBar}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {contacts
          .filter((contact) =>
            (contact.first_name + " " + contact.last_name)
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
          .map((contact) => {
            return (
              <ContactList
                key={contact.id}
                first_name={contact.first_name}
                last_name={contact.last_name}
                location="Western Founders Network"
                pronoun={contact.pronouns}
                image={contact.photo_url}
              />
            );
          })}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "#C5C2C2",
    borderWidth: 1,
    borderRadius: 30,
    margin: 15,
  },
  background: {
    flexDirection: "row",
    width: 360,
    height: 110,
    backgroundColor: "#DDDDDD",
    borderRadius: 20,
    margin: 15,
  },
  leftHalf: {
    margin: 10,
    padding: 10,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "red",
  },
  header: {
    paddingTop: 15,
    fontFamily: "Inter",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#000000",
  },
});
export default Network;
