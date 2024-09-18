// app/settings.tsx
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function Settings() {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="mt-10 p-4">
        <Text className="text-2xl font-bold mb-4">Settings</Text>

        <TouchableOpacity className="bg-gray-100 p-4 mb-4 rounded-md">
          <Text className="text-lg">Update Patient Info</Text>
        </TouchableOpacity>

        <Text className="text-xl font-bold mb-2">Change Language</Text>

        <View className="bg-gray-100 p-4 rounded-md">
          <TouchableOpacity className="mb-2">
            <Text className="text-lg">Hindi</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-2">
            <Text className="text-lg">English</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-2">
            <Text className="text-lg">Telugu</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-2">
            <Text className="text-lg">Korean</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-2">
            <Text className="text-lg">Polish</Text>
          </TouchableOpacity>
          <TouchableOpacity className="mb-2">
            <Text className="text-lg">Tamil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
