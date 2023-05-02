<script lang="ts" setup>
// Imports
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

const active = ref(false)
</script>

<template>
  <div
    class="relative"
    v-on-click-outside="() => active = false"
  >
    <!-- Trigger -->
    <div @click="active = !active">
      <slot name="trigger"></slot>
    </div>
    <!-- Content -->
    <div
      v-if="active"
      class="absolute top-full bg-white rounded shadow z-10 max-h-80 mt-2"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>