import { TextInput, Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { forwardRef, useState } from "react";
import { BLACK, GRAY, PRIMARY } from "../colors";

export const KeyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
};

export const ReturnKeyTypes = {
  DONE: "done",
  NEXT: "next",
};

const InputTypeProps = {
  EMAIL: {
    title: "EMAIL",
    placeholder: "your@email.com",
    keyboardType: "email-address",
    secureTextEntry: false,
    iconName: { active: "email", inactive: "email-outline" },
  },
  PASSWORD: {
    title: "PASSWORD",
    placeholder: "PASSWORD",
    keyboardType: "default",
    secureTextEntry: true,
    iconName: { active: "lock", inactive: "lock-outline" },
  },
};

const Input = forwardRef(({ inputTypeProps, ...props }, ref) => {
  const {
    title,
    placeholder,
    keyboardType,
    secureTextEntry,
    iconName: { active, inactive },
  } = InputTypeProps[inputTypeProps];
  const { value } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={defaultStyles.container}>
      <Text
        style={[
          defaultStyles.title,
          { color: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK },
        ]}
      >
        {title}
      </Text>
      <View>
        <TextInput
          ref={ref}
          {...props}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            defaultStyles.input,
            {
              borderColor: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK,
              color: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK,
            },
          ]}
          textContentType="none"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={defaultStyles.icon}>
          <MaterialCommunityIcons
            name={isFocused ? active : inactive}
            size={24}
            color={value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK}
          />
        </View>
      </View>
    </View>
  );
});

const defaultStyles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    marginBottom: 4,
    fontWeight: "700",
  },
  input: {
    borderBottomWidth: 1,
    borderRadius: 8,
    height: 42,
    paddingHorizontal: 10,
    paddingLeft: 40,
  },
  icon: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
});

export default Input;
