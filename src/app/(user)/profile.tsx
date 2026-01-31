import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

const ProfileScreen = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    // Dismiss all modals (like cart) and clear navigation stack
    router.dismissAll();
    router.replace("/(auth)/sign-in");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default ProfileScreen;
