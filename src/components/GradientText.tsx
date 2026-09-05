import type { ReactNode } from "react";
import { Platform, Text } from "react-native";

/**
 * The theme's gradient text is a CSS-only trick (background gradient + clipped
 * to the glyphs + transparent fill). NativeWind's engine has no gradient
 * support on native, so `text-transparent` there yields invisible text.
 * Web gets the real thing; native falls back to the gradient's end color.
 */

export function GradientText({ children }: { children: ReactNode }) {
  return (
    <Text
      className={
        Platform.OS === "web"
          ? "font-display gradient-text"
          : "font-display text-accent"
      }
    >
      {children}
    </Text>
  );
}
