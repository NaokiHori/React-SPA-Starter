import { style } from "@vanilla-extract/css";
import { colors as themeColors } from "../theme.css";

export const header = style({
  textAlign: "center",
  fontSize: "xx-large",
});

export const body = style({
  textAlign: "center",
  fontSize: "x-large",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  alignItems: "flex-start",
});

export const text = style({
  flexGrow: "1",
  flexShrink: "1",
  flexBasis: "10em",
});

export const button = style({
  flexGrow: "0",
  flexShrink: "0",
  flexBasis: "8em",
  marginLeft: "1em",
  marginRight: "1em",
  marginTop: "1em",
  marginBottom: "1em",
  paddingLeft: "0em",
  paddingRight: "0em",
  paddingTop: "1em",
  paddingBottom: "1em",
  fontSize: "medium",
  color: themeColors.focused,
  backgroundColor: themeColors.background,
  borderColor: themeColors.focused,
  borderWidth: "1px",
  borderStyle: "solid",
  ":disabled": {
    borderColor: themeColors.unfocused,
    color: themeColors.unfocused,
  },
});
