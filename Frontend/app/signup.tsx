import { View, Text, TextInput } from "react-native";
import { Link } from "expo-router";

export default function Signup() {
  return (
    <View className="flex w-full h-full items-center justify-center bg-gray-100 px-8  ">
      <View className="flex h-5/6 w-full align-middle justify-center ">
      <Text className="text-2xl text-center font-semibold text-gray-800 mb-4">Hello!! 👋</Text>
      <Text className="text-center text-gray-600 mb-9 px-4">
        Sign up to stay connected and get real-time assistance when you need it most.
      </Text>

      <Text className="text-base font-bold self-start text-gray-800 mb-2">Full Name</Text>
      <TextInput
        placeholder="Full Name"
        className="border border-gray-300 rounded-lg w-full py-4 px-6 mb-4 bg-white"
      />
      <Text className="text-base font-bold text-gray-800 mb-2 self-start">Phone Number</Text>
      <TextInput
        placeholder="000-000-000"
        keyboardType="numeric"
        className="border border-gray-300 rounded-lg w-full py-4 px-6 mb-4 bg-white"
      />
      </View>
      <Link href="/otp" className="bg-primary w-full  rounded-lg py-3 px-8 text-white text-center  font-bold text-base ">
        Next
      </Link>
    </View>
  );
}
