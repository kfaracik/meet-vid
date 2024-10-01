import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";
import { useAuth } from "@clerk/clerk-expo";

const SettingsScreen = () => {
  const [signOutDialogOpen, setSignOutDialogOpen] = useState(false);
  const { signOut } = useAuth();

  const onCancelDialogPress = () => {
    setSignOutDialogOpen(false);
  };

  const onSignOutPress = () => {
    setSignOutDialogOpen(true);
  };

  const onSignOutDialogPress = () => {
    setSignOutDialogOpen(false);
    signOut();
  };

  return (
    <View>
      <Button
        mode="outlined"
        icon={() => (
          <MaterialCommunityIcons name="logout" size={20} color="#5f5dec" />
        )}
        onPress={onSignOutPress}
      >
        Sign Out
      </Button>
      <Dialog.Container visible={signOutDialogOpen}>
        <Dialog.Title style={styles.dialogTitle}>Sign Out</Dialog.Title>
        <Dialog.Description>
          Do you want to logout this account?
        </Dialog.Description>
        <Dialog.Button label="Cancel" onPress={onCancelDialogPress} />
        <Dialog.Button label="Sign Out" onPress={onSignOutDialogPress} />
      </Dialog.Container>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  dialogTitle: {
    color: "black",
  },
});
