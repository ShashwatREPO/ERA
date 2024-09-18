import { View, Text, Image, ImageBackground } from "react-native";
import { Link, Redirect } from "expo-router";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  
  return (
    <View className="flex-1">
      <ImageBackground className="flex-1  " source={require("../assets/images/added/backgroundMap.jpg")} resizeMode="cover" >
      <View
          style={{ position: "absolute",top: 0,left: 0,right: 0,bottom: 0,backgroundColor: "rgba(255, 255, 255, 0.6)",}}/>
      <View className="flex-1 items-center justify-center">
      <Image
        source={require("../assets/images/added/siren.png")}
        className="w-36 h-36 mb-6"
      />
    </View>
      <View className="justify-center bg-black-600 p-9 align-bottom h-2/5">
      <Text className="text-3xl font-black text-left mb-3 text-primary ">
        Welcome to ERA
      </Text>
      <Text className="text-left text-textGrey  mb-10 font-medium text-base">
        Your AI-Powered Lifesaver. Whether you're facing an emergency or preparing for one, we’re here to guide you step by step.
      </Text>
      <Link href="/signup" className="bg-primary w-full rounded-lg py-4 px-8 text-white font-bold text-center ">
        Get Started
      </Link>
      </View>
      </ImageBackground>
    </View>
  );
}
