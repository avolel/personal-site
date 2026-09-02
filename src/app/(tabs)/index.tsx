import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="p-6 gap-4"
    >
      <Text className="text-3xl font-bold text-text">Andre Volel</Text>
      <Text className="text-base leading-6 text-text-secondary">
        Engineer. This is the intro paragraph.
      </Text>

      <View className="gap-2 pt-4">
        <Link href="/settings" className="text-text underline">
          Settings
        </Link>
      </View>
    </ScrollView>
  );
}
