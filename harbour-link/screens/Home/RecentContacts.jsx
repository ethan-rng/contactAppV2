import React, { useState, useEffect } from 'react'
import { Text,View,StyleSheet} from "react-native"

const RecentContacts = () => {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        fetch(`${apiUrl}/api/contacts`)
        .then(response => response.json())
        .then(data => setContacts(data))
    }, [])

    return (
        <View>
            {contacts.map(contact => {
                return (
                    <View>
                        <Text>{contact.name}</Text>
                    </View>
                )
            })}
        </View>
    
    )
}

const styles = StyleSheet.create({})

export default RecentContacts;