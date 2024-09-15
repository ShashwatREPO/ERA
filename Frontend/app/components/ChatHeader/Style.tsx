import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    paddingLeft: 30,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: 16,
  },
  settingsButton: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ff69b4",
  },
  settingsButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
