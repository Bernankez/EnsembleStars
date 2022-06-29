export const buttonProps = {
  text: {
    type: String,
    default: "",
  },
  reference: {
    type: String,
    default: "",
  },
};

export type ButtonProps = typeof buttonProps;

export type ButtonType = "default" | "bright" | "dark";
