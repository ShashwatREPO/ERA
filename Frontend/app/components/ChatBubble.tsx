import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ChatBubbleProps{
  text:String;
}

function ChatBubble({text}:ChatBubbleProps) {
  return (
    <View style={styles.bubble}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: "white",
    padding: 20,
    color: "black",
    maxWidth: "70%",
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: 15,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});
export default ChatBubble;
