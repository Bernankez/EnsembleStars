import type { Component, ExtractPropTypes, PropType } from "vue";

export const iconProps = {
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  component: {
    type: Object as PropType<Component>,
  },
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
