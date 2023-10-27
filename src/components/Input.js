import { TextInput, Text, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { forwardRef } from "react";
import { BLACK } from "../colors";

export const KeyboardTypes = {
  DEFAULT: "default",
  EMAIL: "email-address",
};

export const ReturnKeyTypes = {
  DONE: "done",
  NEXT: "next",
};

const Input = forwardRef(({ title, iconName, ...props }, ref) => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.title}>{title}</Text>
      <View>
        <TextInput
          ref={ref}
          {...props}
          style={[defaultStyles.input, iconName && { paddingLeft: 40 }]}
          textContentType="none"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={defaultStyles.icon}>
          <MaterialCommunityIcons name={iconName} size={24} color={BLACK} />
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
  },
  icon: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
});

export default Input;
