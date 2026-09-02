import "@/global.css";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useColorScheme } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  // NativeWind's useColorScheme, not React Native's. It's the same value that
  // drives Tailwind's `dark:` variants, so navigation chrome and utility
  // classes can't drift out of sync.
  const { colorScheme } = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="+not-found"
            options={{ headerShown: true, title: "Not found" }}
          />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
