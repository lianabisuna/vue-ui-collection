<script lang="ts" setup>
// Imports
import { type PropType, computed, ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
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
  if (props.hideArrow) return
  switch (props.position) {
    case 'top': return ''
    case 'right': return ''
    case 'bottom': return ''
    case 'left': return ''
    default: return ''
  }
})

const active = ref(false)
</script>

<template>
  <div
    class="relative"
    v-on-click-outside="() => active = false"
  >
    <div @click="() => active = !active">
      <slot name="trigger"></slot>
    </div>
    <div
      v-if="active"
      :class="[
        `bg-${color}`,
        positionClass, arrowClass
      ]"
      class="absolute z-50 bg-transparent"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>