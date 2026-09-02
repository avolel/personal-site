import { Tabs } from "expo-router/js-tabs";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#000",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Andre Volel" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
