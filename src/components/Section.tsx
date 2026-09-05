import type { ReactNode } from "react";
import { Text, View } from "react-native";

type SectionProps = { title?: ReactNode; children: ReactNode };

export function Section({ title, children }: SectionProps) {
  return (
    <View className="mx-auto w-full max-w-screen-lg px-3 py-6">
      {title ? (
        <Text className="font-display mb-6 text-2xl font-bold text-text">
          {title}
        </Text>
      ) : null}
      {children}
    </View>
  );
}
