import { signOut } from "../api/auth";
import { useUserState } from "../context/UserContext";
import { View, Text, StyleSheet, Button } from "react-native";

const ProfileScreen = () => {
  const [user, setUser] = useUserState();
  console.log(user.uid, user.displayName, user.photoURL);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="로그아웃"
        onPress={async () => {
          await signOut();
          setUser({});
        }}
      />
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
