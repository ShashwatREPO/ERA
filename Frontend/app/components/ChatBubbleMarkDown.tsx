import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Markdown from "react-native-markdown-display";


interface ChatBubbleMarkDownProps{
  text:String;
}
function ChatBubbleMarkDown({ text }:ChatBubbleMarkDownProps) {
  return (
    <View style={styles.bubble}>
      <Markdown style={markdownStyles}>{text}</Markdown>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    padding: 20,
    color: "black",
    backgroundColor: "white",
    marginRight: 15,
    marginLeft: 15,
    elevation: 10,
    shadowColor: "#000",
    borderRadius: 16,
  },
});

const markdownStyles = {
  body: {
    fontSize: 16,
  },
  heading1: {
    fontSize: 24,
  },
  heading2: {
    fontSize: 22,
  },
};
export default ChatBubbleMarkDown;
