import { ExternalLink } from "@/components/ExternalLinkText";
import { GradientText } from "@/components/GradientText";
import { Section } from "@/components/Section";
import { site } from "@/site";
import { Image, Text, View } from "react-native";

export function Hero() {
  return (
    <Section>
      <View className="flex-col items-center md:flex-row md:justify-between md:gap-x-24">
        <View className="flex-1">
          <Text className="font-display text-3xl font-bold text-text">
            Hi there, I'm <GradientText>Andre</GradientText> 👋
          </Text>

          <Text className="font-display mt-6 text-xl leading-9 text-text">
            {site.description}
          </Text>

          <View className="mt-3 flex-row gap-1">
            <ExternalLink
              href={site.github}
              className="rounded-md bg-background-element px-4 py-2 font-medium text-text hover:text-accent"
            >
              GitHub
            </ExternalLink>
          </View>
        </View>

        <View className="mt-8 shrink-0 md:mt-0">
          <Image
            source={require("@/assets/images/logo.jpg")}
            style={{ width: 256, height: 256 }}
            className="rounded-2xl"
            resizeMode="cover"
            accessibilityLabel="Andre Volel logo"
          />
        </View>
      </View>
    </Section>
  );
}
