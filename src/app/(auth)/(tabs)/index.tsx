import { Link } from "expo-router";

import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-7xl font-sans-xtrabold text-primary">Home</Text>

      <Link href="/Onboarding" className="mt-4 rounded-full bg-primary p-4">
        <Text className="font-sans-bold text-white">Goto Onboarding</Text>
      </Link>

      <Link href="/(auth)/SignIn" className="mt-4 rounded-full bg-primary p-4">
        <Text className="font-sans-bold text-white">Goto Sign In</Text>
      </Link>

      <Link href="/(auth)/Signup" className="mt-4 rounded-full bg-primary p-4">
        <Text className="font-sans-bold text-white">Goto Sign Up</Text>
      </Link>
    </SafeAreaView>
  );
}
