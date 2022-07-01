<template>
  <ESConfigProvider dark>
    <ESButton dark theme="default" type="primary"
      >卡片
      <template v-slot:reference>CARD</template>
    </ESButton>
    <ESIcon></ESIcon>
  </ESConfigProvider>
</template>

<script setup lang="ts">
import { ESButton } from "es-ui";

console.log(ESButton.name);
</script>
