import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="chatscreen" />
      <Stack.Screen name="afterfinding" />
      <Stack.Screen name="searching" />
      <Stack.Screen name="index" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="otp" />
      <Stack.Screen name="gpsRequest" />
      <Stack.Screen name="home" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}
