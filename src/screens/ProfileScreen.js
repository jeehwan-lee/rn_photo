import { useUserState } from "../context/UserContext";
import { View, Text, StyleSheet, Button } from "react-native";

const ProfileScreen = () => {
  const [, setUser] = useUserState();

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button title="로그아웃" onPress={() => setUser({})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
