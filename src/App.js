import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import Navigation from "./navigations/Navigation";

const App = () => {
  LogBox.ignoreLogs([
    "You are initializing Firebase Auth for React Native without providing AsyncStorage.",
  ]);
  return (
    <>
      <StatusBar style="dark" />
      <Navigation />
    </>
  );
};

export default App;
