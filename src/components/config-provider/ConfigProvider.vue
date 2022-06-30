<template>
  <slot></slot>
</template>

<script lang="ts">
export default {
  name: "ESConfigProvider",
};
</script>
<script setup lang="ts">
import { provide } from "vue";
import { configProviderProps } from "@/components/config-provider/types";
import { Dark } from "@/types";

const props = defineProps(configProviderProps);

provide(Dark, props.dark);
</script>
