<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "ConfigProvider",
};
</script>
<script setup lang="ts">
import { provide, computed } from "vue";
import { Dark } from "@/types";
import { configProviderProps } from "./types";

const props = defineProps(configProviderProps);

provide(
  Dark,
  computed(() => props.dark)
);
</script>
