import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Input, { KeyboardTypes, ReturnKeyTypes } from "../components/Input";
import { AuthRoutes } from "../navigations/routes";

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Input inputTypeProps="EMAIL" ReturnKeyTypes={ReturnKeyTypes.NEXT} />
      <Input inputTypeProps="PASSWORD" ReturnKeyTypes={ReturnKeyTypes.DONE} />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
      />
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

export default SignInScreen;
