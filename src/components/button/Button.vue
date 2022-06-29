<template>
  <button class="border-2 border-blue-500">
    <div>
      <slot>{{ props.text }}</slot>
    </div>
    <div>
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
import { inject } from "vue";
import { buttonProps } from "@/components/button/types";
import { Dark } from "@/types";

const props = defineProps(buttonProps);

const dark = inject(Dark, false);
</script>
