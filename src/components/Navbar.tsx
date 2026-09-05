import { ExternalLink } from "@/components/ExternalLinkText";
import { GradientText } from "@/components/GradientText";
import { Section } from "@/components/Section";
import { site } from "@/site";
import { Text, View } from "react-native";

export function Navbar() {
  return (
    <Section>
      <View className="flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <Text className="font-display text-xl font-bold">
          <GradientText>{site.name}</GradientText>
        </Text>

        <View className="flex-row gap-x-3">
          <ExternalLink
            href={site.github}
            className="font-medium text-text-muted hover:text-text"
          >
            GitHub
          </ExternalLink>
        </View>
      </View>
    </Section>
  );
}
