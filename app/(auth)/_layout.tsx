import React from "react";
import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, } from "react-native";

const AuthLayout = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href="/all-calls" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack
        screenOptions={{
          headerTintColor: "white",
          headerTransparent: true,
        }}
      >
        <Stack.Screen
          name={"sign-in"}
          options={{
            title: "Sign In to get started",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"sign-up"}
          options={{
            title: "Create new account",
          }}
        />
      </Stack>
    </SafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5f5dec",
  },
});
