import { Slot, useRouter } from "expo-router";
import "react-native-reanimated";
import { ClerkProvider, ClerkLoaded, useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";
import { useClerkConfig } from "@/hooks/useClerkConfig";

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (isSignedIn) {
      router.replace("/all-calls");
    } else if (!isSignedIn) {
      router.replace("/sign-in");
    }
  }, [isSignedIn]);

  return <Slot />;
};

const RootLayout = () => {
  const { tokenCache, publishableKey } = useClerkConfig();

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>
        <InitialLayout />
      </ClerkLoaded>
    </ClerkProvider>
  );
};

export default RootLayout;
