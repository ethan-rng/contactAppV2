import React, { useState, useEffect } from 'react'
import { Text,View,StyleSheet} from "react-native"

const RecentContacts = () => {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000/contacts')
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