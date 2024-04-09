import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ChatBox = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    // Here you can handle sending the message
    console.log("Sending message:", message);
    // For simplicity, let's clear the input field after sending the message
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
        multiline={true}
      />
      <Button
        title="Send"
        onPress={sendMessage}
        disabled={!message.trim()} // Disable the button if there's no message
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default ChatBox;