import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#5f5dec",
        tabBarStyle: {
          display: route.name === "[id]" ? "none" : "flex",
        },
        tabBarLabelStyle: styles.bottomNavigation,
      })}
    >
      <Tabs.Screen
        name="all-calls"
        options={{
          title: "All Calls",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="phone" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="[id]"
        options={{
          title: "Start a New Call",
          unmountOnBlur: true,
          header: () => null,
          tabBarIcon: ({ color }) => (
            <View style={styles.bottomTabBar}>
              <FontAwesome size={28} name="plus-circle" color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="join-call"
        options={{
          title: "Join Call",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="sign-in" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="gear" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  bottomNavigation: {
    zIndex: 100,
  },
  bottomTabBar: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: -10,
    left: 20,
    right: 20,
    bottom: 0,
    margin: "auto",
    borderRadius: 50,
    zIndex: 100,
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 0.1,
    borderTopWidth: 1,
    borderBottomWidth: 0,
  },
});
