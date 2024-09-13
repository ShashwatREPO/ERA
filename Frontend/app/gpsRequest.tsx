import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function GPSTracking() {
  return (
    <View className="flex h-full w-full justify-center bg-white">
      <View
          style={{ position: "absolute",top: 0,left: 0,right: 0,bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.3)",}}/>
          <Link href="/" className="absolute top-16 right-8 text-black font-bold text-xl mt-4 self-end">
        Skip
      </Link>
      <View className="bg-blue-500 absolute flex bottom-0 px-8 rounded-3xl w-full justify-center align-middle pt-12">
      <Text className="text-2xl font-bold text-white mb-4 text-center">
        Enable GPS Tracking
      </Text>
      <Text className="text-center text-white mb-6 px-4 text-sm font-medium">
        Enabling GPS tracking allows us to send the Ambulance at the exact place it needs the service.
      </Text>
      <View
          style={{ position: "absolute",top: 0,left: 0,right: 0,bottom: 0,backgroundColor: "rgba(0, 0, 0, 0.3)",}}/>
      <View className="w-full mb-28 bg-white  p-7 rounded-3xl ">
        <Text className="text-center font-bold text-lg text-gray-800 mb-4 px-5">
          Allow Maps to access this device's precise location?
        </Text>
          <View className="flex-row gap-x-4 justify-center align-middle">
          <View>
            <Image source={require("../assets/images/added/precise.png")} resizeMode="contain" className="w-25 h-25 mb-2"/>
          <Text className="text-black-500 font-semibold text-center mb-2">Precise</Text>
          </View>
          <View>
          <Image source={require("../assets/images/added/approx.png")} resizeMode="contain" className="w-25 h-25 mb-2"/>
          <Text className="text-black-500 font-semibold text-center mb-2">Approximate</Text>
          </View>
          </View>
      <View className="w-full">
        <TouchableOpacity>
        <Text className="bg-gpsbutton text-center rounded-t-xl mb-1 py-4 font-medium" >While Using the app</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text className="bg-gpsbutton text-center py-4 font-medium" >Only this time</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text className="bg-gpsbutton mt-1 rounded-b-xl text-center py-4 font-medium" >Don't allow</Text>
        </TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  );
}
