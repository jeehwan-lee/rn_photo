import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ContentRoutes } from "./routes";
import ProfileScreen from "../screens/ProfileScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ListScreen from "../screens/ListScreen";
import HomeScreen from "../screens/HomeScreen";
import MapScreen from "../screens/MapScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GRAY, PRIMARY } from "../colors";
import TabBarAddButton from "../components/TabBarAddButton";

const Tab = createBottomTabNavigator();

const getTabBarIcon = ({ focused, color, size, name }) => {
  const iconName = focused ? name : `${name}-outline`;

  return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
};

const AddButtonScreen = () => null;

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: PRIMARY.DARK,
        tabBarInactiveTintColor: GRAY.DARK,
      }}
    >
      <Tab.Screen
        name={ContentRoutes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: "home" }),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={ContentRoutes.LIST}
        component={ListScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: "post" }),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={"AddButton"}
        component={AddButtonScreen}
        options={{ tabBarButton: () => <TabBarAddButton /> }}
      />
      <Tab.Screen
        name={ContentRoutes.MAP}
        component={MapScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: "map" }),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={ContentRoutes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => getTabBarIcon({ ...props, name: "account" }),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
