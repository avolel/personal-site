import { ExternalLink } from "@/components/ExternalLinkText";
import { GradientText } from "@/components/GradientText";
import { Section } from "@/components/Section";
import { site } from "@/site";
import { Image, Text, View } from "react-native";

export function Navbar() {
  return (
    <Section>
      <View className="flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <View className="flex-row items-center gap-x-3">
          <Image
            source={require("@/assets/images/logo.jpg")}
            style={{ width: 36, height: 36 }}
            className="rounded-md"
            resizeMode="cover"
            accessibilityLabel="Andre Volel logo"
          />
          <Text className="font-display text-xl font-bold">
            <GradientText>{site.name}</GradientText>
          </Text>
        </View>

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
