import { Text, View } from "react-native";

const tagColors = {
  sky: "bg-sky-400 text-sky-900",
  fuchsia: "bg-fuchsia-400 text-fuchsia-900",
  lime: "bg-lime-400 text-lime-900",
  rose: "bg-rose-400 text-rose-900",
  violet: "bg-violet-400 text-violet-900",
  amber: "bg-amber-400 text-amber-900",
} as const;

export type TagColor = keyof typeof tagColors;

export function Tag({
  color,
  children,
}: {
  color: TagColor;
  children: string;
}) {
  return (
    <View className={`rounded-md px-2 py-1 ${tagColors[color]}`}>
      <Text
        className={`font-display text-xs font-semibold ${tagColors[color]}`}
      >
        {children}
      </Text>
    </View>
  );
}
