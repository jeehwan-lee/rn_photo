import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ContentRoutes } from "./routes";
import ProfileScreen from "../screens/ProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ListScreen from "../screens/ListScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();

const ContentTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ContentRoutes.HOME} component={HomeScreen} />
      <Tab.Screen name={ContentRoutes.LIST} component={ListScreen} />
      <Tab.Screen name={ContentRoutes.MAP} component={MapScreen} />
      <Tab.Screen name={ContentRoutes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default ContentTab;
