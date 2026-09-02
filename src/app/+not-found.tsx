import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "404" }} />
      <View className="flex-1 items-center justify-center gap-4 bg-background p-6">
        <Text className="text-2xl font-bold text-text">
          This page doesn't exist.
        </Text>
        <Link href="/" className="text-text-secondary underline">
          Go home
        </Link>
      </View>
    </>
  );
}
