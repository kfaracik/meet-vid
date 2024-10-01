import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

type StyledButtonProps = {
  title: string;
  onPress: VoidFunction;
  style?: ViewStyle;
};

export const StyledButton = ({ title, onPress, style }: StyledButtonProps) => {
  return (
    <Button onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 2,
    borderRadius: 5,
    width: "100%",
  },
  text: {
    color: "#5f5dec",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
