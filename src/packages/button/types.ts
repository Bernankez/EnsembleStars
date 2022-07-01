import type { ExtractPropTypes, PropType } from "vue";

export const buttonProps = {
  text: {
    type: String,
    default: "",
  },
  reference: {
    type: String,
    default: "",
  },
  theme: {
    type: String as PropType<ButtonThemeKey>,
    default: "default",
  },
  customTheme: {
    type: Object as PropType<ButtonTheme>,
    default: () => ({}),
  },
  type: {
    type: String as PropType<ButtonTypeKey>,
    default: "primary",
  },
  block: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: undefined,
  },
} as const;

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;

export type ButtonTypeKey = "primary" | "half-rounded" | "half-rounded-op" | "rounded";

export type ButtonType = {
  borderRadius: string;
};

export type ButtonTheme = {
  color?: string;
  referenceColor?: string;
  backgroundColor?: string;
  borderColor?: string;
};

export type ButtonThemeKey = "default" | "highlight" | "dark";
