import { Button, StyleSheet, Text, View } from "react-native";
import { MainRoutes } from "../navigations/routes";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
      <Button
        title="Select"
        onPress={() => navigation.navigate(MainRoutes.SELECT_PHOTOS)}
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
export default HomeScreen;
