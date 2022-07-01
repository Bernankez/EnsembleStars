<template>
  <button :class="name">
    <div :class="bem('', 'text')">
      <slot>{{ props.text }}</slot>
    </div>
    <div :class="bem('', 'reference')">
      <slot name="reference">{{ props.reference }}</slot>
    </div>
  </button>
</template>

<script lang="ts">
export default {
  name: "ESButton",
};
</script>
<script setup lang="ts">
import { computed, inject, unref } from "vue";
import { buttonProps } from "@/packages/button/types";
import { Dark } from "@/types";
import { createNamespace } from "@/utils";
import { buttonTheme, buttonType } from "./theme";
import { assign } from "lodash-es";

const [name, bem] = createNamespace("button");

const props = defineProps(buttonProps);
const _inject_dark = inject(Dark);
const dark = computed(() => props.dark ?? unref(_inject_dark));
const theme = computed(() => assign({}, buttonTheme.default, buttonTheme[props.theme], unref(dark) ? buttonTheme.dark : {}, props.customTheme));
const type = computed(() => assign({}, buttonType.primary, buttonType[props.type]));
const width = computed(() => (props.block ? { width: "100%" } : { width: "auto" }));
const styles = computed(() => assign({}, unref(theme), unref(type), unref(width)));
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.__es-button {
  @apply relative text-center active:scale-95 ease-in-out duration-75 border-2 border-solid px-6 py-2 box-border;
  width: v-bind("styles.width");
  border-color: v-bind("styles.borderColor");
  border-radius: v-bind("styles.borderRadius");
  background-color: v-bind("styles.backgroundColor");
  box-shadow: 3px 3px 4px 0 #00000022;
  // hover & active color
  &::before {
    content: " ";
    @apply absolute top-1/2 left-1/2 w-full h-full bg-black border-black transform -translate-x-1/2 -translate-y-1/2 opacity-0;
  }
  &:hover::before {
    color: #333;
    opacity: $es-opacity-hover;
  }
  &:active::before {
    opacity: $es-opacity-active;
  }
}

.__es-button--text {
  @apply leading-4 font-bold;
  color: v-bind("styles.color");
}

.__es-button--reference {
  @apply text-xs leading-3;
  color: v-bind("styles.referenceColor");
}
</style>
