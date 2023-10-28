import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Keyboard, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WHITE } from "../colors";
import Button from "../components/Button";
import HR from "../components/HR";
import Input, { KeyboardTypes, ReturnKeyTypes } from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import TextButton from "../components/TextButton";
import { AuthRoutes } from "../navigations/routes";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

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
      <StatusBar style="light" />
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={StyleSheet.absoluteFill}>
          <Image
            source={require("../../assets/cover.png")}
            style={{ width: "100%" }}
            resizeMode="cover"
          />
        </View>
        <View
          style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 40 }]}
        >
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
            title="로그인"
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
          <HR
            text={"OR"}
            styles={{
              container: {
                marginVertical: 30,
              },
            }}
          />
          <TextButton
            title="회원가입"
            onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
          />
        </View>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    alignItems: "center",
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default SignInScreen;
