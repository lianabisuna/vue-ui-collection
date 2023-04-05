<script lang="ts" setup>
import { PropType, computed } from 'vue'

/** types */
export type TooltipPosition = 'top'|'right'|'bottom'|'left'
export type TailwindColor = `${string}-${number}`|'black'|'white'

/** props */
const props = defineProps({
  position: { type: String as PropType<TooltipPosition>, default: 'top' },
  color: { type: String as PropType<TailwindColor>, default: 'gray-500' },
  hideArrow: { type: Boolean as PropType<boolean>, default: false },
})

const positionClass = computed(() => {
  switch (props.position) {
    case 'top': return 'mb-3 bottom-full left-1/2 -translate-x-1/2'
    case 'right': return 'ml-3 left-full top-1/2 -translate-y-1/2'
    case 'bottom': return 'mt-3 top-full left-1/2 -translate-x-1/2'
    case 'left': return 'mr-3 right-full top-1/2 -translate-y-1/2'
  }
})

const arrowClass = computed(() => {
  if (!props.hideArrow) {
    switch (props.position) {
      case 'top': return ''
      case 'right': return ''
      case 'bottom': return ''
      case 'left': return ''
    }
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