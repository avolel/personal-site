import * as WebBrowser from "expo-web-browser";
import type { ReactNode } from "react";
import { Platform, Pressable, Text } from "react-native";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <Pressable
      onPress={() => {
        if (Platform.OS === "web") {
          window.open(href, "_blank", "noopener,noreferrer");
          return;
        }
        void WebBrowser.openBrowserAsync(href);
      }}
    >
      <Text className={className ?? "font-display text-accent hover:underline"}>
        {children}
      </Text>
    </Pressable>
  );
}
