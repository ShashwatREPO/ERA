import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
// import { MainLogo } from "../MainLogo";
import { styles } from "./Style";

function ChatHeader(props) {
  return (
    <View style={styles.header}>
      {/* <MainLogo
        altTitle={"App Logo"}
        resizeMode={"contain"}
        source={require("../../assets/projectImages/logo.png")}
        style={{ width: 200, height: 100 }}
      /> */}
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsButtonText}>S</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChatHeader;
