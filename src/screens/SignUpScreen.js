import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { AuthRoutes } from "../navigations/routes";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
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

export default SignUpScreen;
