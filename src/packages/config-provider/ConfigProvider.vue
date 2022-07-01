<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "ESConfigProvider",
};
</script>
<script setup lang="ts">
import { provide, computed } from "vue";
import { configProviderProps } from "@/packages/config-provider/types";
import { Dark } from "@/types";

const props = defineProps(configProviderProps);

provide(
  Dark,
  computed(() => props.dark)
);
</script>
