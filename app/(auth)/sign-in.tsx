import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { StyledButton } from "@/components/StyledButton";
import { SignInWithOAuth } from "@/components/auth";

const SignInScreen = () => {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <MaterialIcons
        name="video-chat"
        size={160}
        color="white"
        style={styles.chatIcon}
      />
      <TextInput
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Email..."
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        style={styles.textInput}
      />
      <TextInput
        value={password}
        placeholder="Password..."
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        style={styles.textInput}
      />
      <Divider bold style={styles.divider} />
      <StyledButton title="Sign In" onPress={onSignInPress} />
      <Text style={styles.text}>OR</Text>
      <SignInWithOAuth />
      <Divider bold style={styles.divider} />
      <View style={styles.linkContainer}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Link href="/sign-up">
          <Text style={styles.link}>Sign up</Text>
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5f5dec",
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 10,
  },
  linkContainer: {
    alignItems: "center",
  },
  chatIcon: {
    alignSelf: "center",
    paddingBottom: 20,
  },
  textInput: {
    padding: 12,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  divider: {
    margin: 5,
  },
  link: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
