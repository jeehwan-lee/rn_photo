import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { initFirebase } from "../api/firebase";
import AuthStack from "./AuthStack";
import { useUserState } from "../context/UserContext";
import MainStack from "./MainStack";
import ContentTab from "./ContentTab";

const Navigation = () => {
  const [user] = useUserState();

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
      {user.uid ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
