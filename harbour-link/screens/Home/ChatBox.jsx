import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  ScrollView,
} from "react-native";

const ChatBox = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [result, setResult] = useState("");
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const sendMessage = () => {
    Keyboard.dismiss();
    // Add the message to the array of messages
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sentByMe: true },
    ]);
    // Send message to backend
    // fetch(`${apiUrl}/voicecommands/textcommand`, {
    fetch(`${apiUrl}/voicecommands/textcommand/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        command: message.toLowerCase(),
      }),
    })
      .then((response) => response.json())
      .then((data) =>
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data["message"], sendByMe: false },
        ])
      )
      .catch((error) => console.log(error));
    // For simplicity, let's clear the input field after sending the message
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.messagesContainer}
        ref={(scrollView) => {
          scrollView?.scrollToEnd({ animated: true });
        }}
      >
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageContainer,
              msg.sentByMe ? styles.sentByMe : styles.received,
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={message}
          onChangeText={setMessage}
          multiline={true}
        />
        <Button title="Send" onPress={sendMessage} disabled={!message} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  messagesContainer: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  messageContainer: {
    maxWidth: "80%",
    alignSelf: "flex-end",
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#007AFF",
  },
  messageText: {
    fontSize: 16,
    color: "white",
  },
  received: {
    alignSelf: "flex-start",
    backgroundColor: "#BBBBBB",
    color: "black",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    minHeight: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default ChatBox;
