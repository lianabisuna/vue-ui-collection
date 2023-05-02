<script lang="ts" setup>
// Imports
import { PropType, computed } from 'vue';
import type { TailwindColor } from './types'

// Types
export type SpinerSize = 'xs'|'sm'|'lg'|'xl'

// Props
const props = defineProps({
  modelValue: { type: [String,Number], default: 0 },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  size: { type: String as PropType<SpinerSize>, default: '' },
  dark: { type: Boolean as PropType<boolean>, default: false },
})


/** CLASSES */

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'border-[3px] h-4 w-4'
    case 'sm': return 'border-[4px] h-6 w-6'
    case 'lg': return 'border-[6px] h-10 w-10'
    case 'xl': return 'border-[7px] h-12 w-12'
    default: return 'border-[5px] h-8 w-8'
  }
})
</script>

<template>
  <div
    class="bg-transparent rounded-[50%] inline-block animate-rotate"
    :class="[
      sizeClass,
      dark ? 'border-gray-600' : 'border-gray-300',
      `border-b-${color}`
    ]"
  >
  </div>
</template>

<style scoped></style>