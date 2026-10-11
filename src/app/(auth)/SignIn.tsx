import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Link href="/(auth)/Signup">
        <Text>Create Account</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
