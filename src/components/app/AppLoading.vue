<script lang="ts" setup>
// Imports
import { PropType } from 'vue'
import type { TailwindColor } from './types'
import AppSpinner from './AppSpinner.vue'

// Types
export type SpinerSize = 'xs'|'sm'|'lg'|'xl'

// Props
const props = defineProps({
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
})
</script>

<template>
  <div
    class="flex justify-center items-center"
    v-bind="$attrs"
  >
    <AppSpinner
      :color="color"
    >
    </AppSpinner>
  </div>
</template>

<style scoped></style>