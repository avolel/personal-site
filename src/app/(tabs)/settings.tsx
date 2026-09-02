import { useColorScheme } from "nativewind";
import { Switch, Text, View } from "react-native";

export default function SettingsScreen() {
  const { colorScheme, setColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View className="flex-1 gap-4 bg-background p-6">
      <Text className="text-2xl font-bold text-text">Settings</Text>

      <View className="flex-row items-center justify-between rounded-xl bg-background-element p-4">
        <Text className="text-base text-text">Dark mode</Text>
        <Switch
          value={isDark}
          onValueChange={(next) => setColorScheme(next ? "dark" : "light")}
        />
      </View>
    </View>
  );
}
