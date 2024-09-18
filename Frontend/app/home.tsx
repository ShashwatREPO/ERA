// app/home.tsx
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter(); 
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-6">Hello, John Doe</Text>
      <TouchableOpacity className="flex-row justify-center items-center mb-4">
        {/* <Image source={require('../assets/images/locationicon.png')} /> */}
        <Text className="text-xl font-medium">789, Green Avenue, Vasant Kunj</Text>
      </TouchableOpacity>

      <Text className="text-xl font-bold mb-4">Why use Era?</Text>
      <Text>Quickly get the help you need</Text>

      <View className="flex-row justify-around w-full mt-6">
        <View>
          {/* <Image source={require('../assets/images/tutorial1.png')} /> */}
          <Text className="text-center">How to use chatbot</Text>
        </View>
        <View>
          {/* <Image source={require('../assets/images/tutorial2.png')} /> */}
          <Text className="text-center">How to request ambulance</Text>
        </View>
        <View>
          {/* <Image source={require('../assets/images/tutorial3.png')} /> */}
          <Text className="text-center">How to contact driver</Text>
        </View>
      </View>

      <TouchableOpacity className="bg-blue-500 rounded-full px-6 py-2 mt-8" onPress={() => router.push("/settings")}>
        <Text className="text-white text-xl">Request Ambulance</Text>
      </TouchableOpacity>
    </View>
  );
}
