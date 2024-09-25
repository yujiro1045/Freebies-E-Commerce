import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
  const activeColor = "#3669C9";
  const inactiveColor = "#000";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#3669C9" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: "WISHLIST",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color={focused ? "#3669C9" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="order"
        options={{
          title: "ORDER",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "bag" : "bag-outline"}
              color={focused ? "#3669C9" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "LOGIN",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={focused ? "#3669C9" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
