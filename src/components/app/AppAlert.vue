<script lang="ts" setup>
// Imports
import { PropType } from 'vue'
import type { TailwindColor } from './types'

// Props
defineProps({
  color: { type: String as PropType<TailwindColor>, default: 'black' },
  dark: { type: Boolean as PropType<boolean>, default: false },
})
</script>

<template>
  <div
    class="w-full rounded py-3 px-4 font-semibold"
    :class="[
      `bg-${color}/10 text-${color}/90`
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>