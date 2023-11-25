import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { initFirebase } from "../api/firebase";
import AuthStack from "./AuthStack";

const Navigation = () => {
  useEffect(() => {
    (async () => {
      try {
        const app = initFirebase();
        console.log(app);
      } catch (e) {
        console.log(e);
      } finally {
        console.log("done");
      }
    })();
  }, []);
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
