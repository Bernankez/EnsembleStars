<template>
  <slot>
    <component v-if="props.component" :is="props.component"></component>
  </slot>
</template>

<script lang="ts">
export default {
  name: "Icon",
};
</script>
<script setup lang="ts">
import { iconProps } from "./types";

const props = defineProps(iconProps);
</script>

<style lang="scss" scoped></style>
