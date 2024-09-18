import { View, Text, TextInput } from "react-native";
import { Link } from "expo-router";

export default function OTP() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100 px-8">
      <Text className="text-2xl font-bold text-gray-800 mb-4">OTP!! 👋</Text>
      <Text className="text-center text-gray-600 mb-9 px-2">
        An OTP has been sent to your registered phone number +91 70******32 . It's only valid for 30 mins.
      </Text>

      <Text className="text-base font-bold self-start text-gray-800 mb-4">Enter OTP</Text>
      <View className="flex flex-row justify-between mb-6 w-full  h-20 gap-x-3">
        <TextInput className="flex-1 border border-gray-300   text-center text-lg rounded-md" maxLength={1} />
        <TextInput className="flex-1 border border-gray-300  text-center  text-lg rounded-md " maxLength={1} />
        <TextInput className="flex-1 border border-gray-300  text-center text-lg rounded-md" maxLength={1} />
        <TextInput className="flex-1 border border-gray-300  text-center text-lg rounded-md" maxLength={1} />
        <TextInput className="flex-1 border border-gray-300  text-center text-lg rounded-md" maxLength={1} />
      </View>

      <Text className="text-blue-500 mb-8 font-bold">Resend OTP in <Text className="text-black font-bold ">30s</Text> </Text>

      <Link href="/gpsRequest" className="bg-primary text-center rounded-lg py-4 w-10/12 px-8 text-white font-bold">
        Done
      </Link>
    </View>
  );
}
