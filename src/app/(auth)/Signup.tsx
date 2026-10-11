import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <Link href="/(auth)/SignIn">
        <Text>Already have an account? Sign In</Text>
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

export default Signup;
