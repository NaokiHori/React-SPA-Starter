import { globalStyle, createVar } from "@vanilla-extract/css";

export const colors = {
  focused: createVar(),
  unfocused: createVar(),
  background: createVar(),
};

globalStyle(":root", {
  fontFamily: "sans-serif",
  color: colors.focused,
  backgroundColor: colors.background,
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  "@media": {
    // colors for light theme
    "(prefers-color-scheme: light)": {
      vars: {
        [colors.focused]: "#242424",
        [colors.unfocused]: "#808080",
        [colors.background]: "#ffffff",
      },
    },
    // colors for dark theme
    "(prefers-color-scheme: dark)": {
      vars: {
        [colors.focused]: "#ffffff",
        [colors.unfocused]: "#808080",
        [colors.background]: "#242424",
      },
    },
  },
});
