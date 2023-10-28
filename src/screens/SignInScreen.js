import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import Button from "../components/Button";
import Input, { KeyboardTypes, ReturnKeyTypes } from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import { AuthRoutes } from "../navigations/routes";

const SignInScreen = () => {
  const navigation = useNavigation();

  const passwordRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!disabled && !isLoading) {
      setIsLoading(true);
      console.log(email, password);
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Text>Sign In</Text>
        <Input
          styles={{
            container: { marginBottom: 20, paddingHorizontal: 20 },
            input: { borderWidth: 1 },
          }}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          inputTypeProps="EMAIL"
          ReturnKeyTypes={ReturnKeyTypes.NEXT}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          styles={{
            container: { marginBottom: 20, paddingHorizontal: 20 },
            input: { borderWidth: 1 },
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          inputTypeProps="PASSWORD"
          ReturnKeyTypes={ReturnKeyTypes.DONE}
          onSubmitEditing={onSubmit}
        />
        <Button
          title="Sign Up"
          onPress={onSubmit}
          disabled={disabled}
          isLoading={isLoading}
          styles={{
            container: {
              paddingHorizontal: 20,
              marginTop: 20,
            },
          }}
        />
      </View>
    </SafeInputView>
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
