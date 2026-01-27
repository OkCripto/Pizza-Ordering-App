import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

import Colors from "@/constants/Colors";
import { useAuth } from "@/providers/AuthProvider";
import { useColorScheme } from "@components/useColorScheme";
import { Redirect } from "expo-router";
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={20} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Redirect href="/" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.background,
        tabBarInactiveTintColor: "gainsboro",
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="menu"
        options={{
          headerShown: false,
          title: "Menu",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cutlery" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
    </Tabs>
  );
}
