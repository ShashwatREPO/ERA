import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    columnGap: 10,
  },
  queryInput: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 32,
    padding: 8,
    paddingTop: 10,
    paddingLeft: 28,
    marginBottom: 8,
    marginHorizontal: 10,
    fontSize: 18,
  },
  queryButtonText: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#006400",
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  queryBox: {
    flex: 1,
    flexDirection: "row",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    marginRight: 20,
  },
});
