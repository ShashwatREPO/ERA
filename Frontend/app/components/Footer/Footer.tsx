import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { styles } from "./Style";

function Footer( {setMessageList} ) {
  const [text, setText] = useState("");

  const handleClick = () => {
    setMessageList( (prevData) => [...prevData, text]);
    setText("");
  }
  return (
    <View style={styles.footer}>
      <View style={styles.queryBox}>
        <TextInput
          style={styles.queryInput}
          placeholder="Ask Swastyamuni"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
        />
        <FontAwesome
          name="send-o"
          size={24}
          color="black"
          style={styles.arrow}
        />
      </View>
      <TouchableOpacity style={styles.sendButton} onPress={ handleClick} >
        <FontAwesome5 name="leaf" size={17} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

export default Footer;
