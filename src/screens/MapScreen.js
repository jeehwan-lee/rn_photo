import { Text, View } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MAP</Text>
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

export default MapScreen;
