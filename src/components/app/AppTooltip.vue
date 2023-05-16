<script lang="ts" setup>
// Imports
import { type PropType, computed } from 'vue'
import type { TailwindColor } from './types'

// Types
export type TooltipPosition = 'top'|'right'|'bottom'|'left'

// Props
const props = defineProps({
  position: { type: String as PropType<TooltipPosition>, default: 'top' },
  color: { type: String as PropType<TailwindColor>, default: 'gray-500' },
  hideArrow: { type: Boolean as PropType<boolean>, default: false },
})


/** CLASSES */

const positionClass = computed(() => {
  switch (props.position) {
    case 'right': return 'ml-3 left-full top-1/2 -translate-y-1/2'
    case 'bottom': return 'mt-3 top-full left-1/2 -translate-x-1/2'
    case 'left': return 'mr-3 right-full top-1/2 -translate-y-1/2'
    case 'top': default: return 'mb-3 bottom-full left-1/2 -translate-x-1/2'
  }
})

const arrowClass = computed(() => {
  if (props.hideArrow) return;
  switch (props.position) {
    case 'right': return ''
    case 'bottom': return ''
    case 'left': return ''
    case 'top': default: return ''
  }
})
</script>

<template>
  <div class="relative inline-block group">
    <slot name="trigger"></slot>
    <div
      :class="[
        `bg-${color}`,
        positionClass, arrowClass
      ]"
      class="absolute whitespace-nowrap rounded py-2 px-3 font-semibold text-white opacity-0 group-hover:opacity-100"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>