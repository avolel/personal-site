import { Section } from "@/components/Section";
import { site } from "@/site";
import { Text, View } from "react-native";

export function Footer() {
  return (
    <Section>
      <View className="border-t border-border pt-5">
        <Text className="font-display text-sm text-text-muted">
          © {new Date().getFullYear()} {site.name}
        </Text>
      </View>
    </Section>
  );
}
