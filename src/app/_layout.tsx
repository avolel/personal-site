import "@/global.css";
import { DarkTheme, Stack, ThemeProvider } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider value={DarkTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="+not-found"
            options={{ headerShown: true, title: "Not found" }}
          />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
