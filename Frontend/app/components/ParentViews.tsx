import React from "react";
import {
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const ParentView = ({ children, style }) => {
  return (
      <View style={styles.backgroundImage}>
        <StatusBar hidden={true} />
      <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
      <View style={styles.overlay} >
        <ScrollView contentContainerStyle={[styles.scrollView, style]}>
          <View style={styles.innerView}>{children}</View>
        </ScrollView>
        </View>
      </KeyboardAvoidingView>
      </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.90)', 
   },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  innerView: {
    flex: 1,
    justifyContent: "center",
  },
});
export default ParentView;
