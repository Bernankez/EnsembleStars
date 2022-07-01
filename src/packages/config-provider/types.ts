export const configProviderProps = {
  dark: {
    type: Boolean,
    default: false,
  },
} as const;

export type ConfigProviderProps = typeof configProviderProps;
