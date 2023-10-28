import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import TextButton from "../components/TextButton";
import { AuthRoutes } from "../navigations/routes";

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TextButton title="로그인" onPress={navigation.goBack} />
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
