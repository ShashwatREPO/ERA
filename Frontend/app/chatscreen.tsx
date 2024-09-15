import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, TextInput, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import ParentView from "./components/ParentViews";
import { router } from "expo-router";

export default function ChatScreen(){
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollViewRef = useRef();

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);

  const handleSend = async () => {
    if (inputText.trim() === "" && !selectedImage) return;

    const newUserMessage = { type: "user", content: inputText };
    if (selectedImage) {
      newUserMessage.image = selectedImage;
    }
    setMessages([...messages, newUserMessage]);

    try {
      const formData = new FormData();
      formData.append('prompt', inputText);
      if (selectedImage) {
        formData.append('image', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
      }

      const response = await fetch('http://192.168.221.71:3000/generate-response', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setMessages(prevMessages => [...prevMessages, { type: "bot", content: data.text }]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prevMessages => [...prevMessages, { type: "bot", content: "Sorry, there was an error processing your request." }]);
    }

    setInputText("");
    setSelectedImage(null);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const renderMessage = (message, index) => {
    if (message.type === "user") {
      return (
        <View key={index} style={styles.userMessage}>
          <Text>{message.content}</Text>
          {message.image && <Image source={{ uri: message.image }} style={styles.image} />}
        </View>
      );
    } else {
      return (
        <View key={index} style={styles.botMessage}>
          <View style={styles.botIcon}>
            <Text>🤖</Text>
          </View>
          <View style={styles.botContent}>
            <Text>{message.content}</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <ParentView>
      <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText} onPress={() => router.push("/searching")}>Request Ambulance</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        ref={scrollViewRef}
        style={styles.messageContainer}
        contentContainerStyle={styles.messageContent}
      >
        {messages.map(renderMessage)}
      </ScrollView>
      <View style={styles.inputContainer}>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.previewImage} />
        )}
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
          <Text>📷</Text>
        </TouchableOpacity>
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
    </ParentView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    fontSize: 16,
    color: 'blue',
  },
  requestButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  requestButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  messageContainer: {
    flex: 1,
  },
  messageContent: {
    padding: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#e6e6e6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
  botMessage: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  botIcon: {
    width: 30,
    height: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  botContent: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  imageButton: {
    marginRight: 10,
  },
  previewImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

