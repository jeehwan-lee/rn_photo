import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { View, Text, StyleSheet, Keyboard, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WHITE } from "../colors";
import Button from "../components/Button";
import HR from "../components/HR";
import Input, { KeyboardTypes, ReturnKeyTypes } from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import TextButton from "../components/TextButton";
import { AuthRoutes } from "../navigations/routes";
import {
  authFormReducer,
  AuthFormTypes,
  initAuthForm,
} from "../reducers/authFormReducer";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { top, bottom } = useSafeAreaInsets();

  const passwordRef = useRef();

  const [form, dispatch] = useReducer(authFormReducer, initAuthForm);

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch({ type: AuthFormTypes.RESET });
      };
    }, [])
  );

  const updateForm = (payload) => {
    const newForm = { ...form, ...payload };
    const disabled = !newForm.email || !newForm.password;

    dispatch({
      type: AuthFormTypes.UPDATE_FORM,
      payload: { ...payload, disabled },
    });
  };

  const onSubmit = () => {
    Keyboard.dismiss();

    if (!form.disabled && !form.isLoading) {
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
      console.log(form.email, form.password);
      dispatch({ type: AuthFormTypes.TOGGLE_LOADING });
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
            value={form.email}
            onChangeText={(text) => updateForm({ email: text.trim() })}
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
            value={form.password}
            onChangeText={(text) => updateForm({ password: text.trim() })}
            inputTypeProps="PASSWORD"
            ReturnKeyTypes={ReturnKeyTypes.DONE}
            onSubmitEditing={onSubmit}
          />
          <Button
            title="로그인"
            onPress={onSubmit}
            disabled={form.disabled}
            isLoading={form.isLoading}
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
