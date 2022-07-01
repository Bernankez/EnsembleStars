import { ButtonTheme, ButtonThemeKey, ButtonType, ButtonTypeKey } from "./types";
import Theme from "@/styles/theme.module.scss";

export const buttonTheme: Record<ButtonThemeKey, ButtonTheme> = {
  default: {
    color: Theme.ESTextColor,
    referenceColor: Theme.ESTextGray,
    backgroundColor: Theme.ESBgColor,
    borderColor: Theme.ESColorPrimary,
  },
  highlight: {
    color: Theme.ESTextDark,
    backgroundColor: Theme.ESColorHighlight,
    borderColor: Theme.ESTextDark,
  },
  dark: {
    color: Theme.ESDarkText,
    referenceColor: Theme.ESDarkGray,
    backgroundColor: Theme.ESDarkBg,
    borderColor: Theme.ESDarkPrimary,
  },
} as const;

export const buttonType: Record<ButtonTypeKey, ButtonType> = {
  primary: {
    borderRadius: "0.375rem",
  },
  "half-rounded": {
    borderRadius: "0.75rem 0.375rem 0.75rem 0.375rem",
  },
  "half-rounded-op": {
    borderRadius: "0.375rem 0.75rem 0.375rem 0.75rem",
  },
  rounded: {
    borderRadius: "0.75rem",
  },
} as const;
