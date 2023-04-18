<script lang="ts" setup>
import { Console } from 'console';
import { PropType, computed, useSlots } from 'vue'

/** types */
export type ModalPosition = 'center'|'top'|'right'|'bottom'|'left'|'top-left'|'top-right'|'bottom-right'|'bottom-left'
export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = 'xs'|'sm'|'lg'|'xl'

/** props */
const props = defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  icon: { type: Boolean as PropType<boolean>, default: false },
  position: { type: String as PropType<ModalPosition>, default: 'top-right' },
  content: { type: String as PropType<string>, default: '' },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  bordered: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<ComponentSize>, default: '' },
})

const slots = useSlots()

/** classes */
const positionClass = computed(() => {
  switch (props.position) {
    case 'center': return 'top-1/2 left-1/2 -translate-y-1/2 -translate-x-2/4'
    case 'top': return 'bottom-auto left-1/2 left-0 top-0 -translate-y-1/2 -translate-x-2/4'
    case 'right': return 'top-1/2 left-auto right-0 -translate-y-1/2 translate-x-2/4'
    case 'bottom': return 'top-auto right-auto left-1/2 bottom-0 translate-y-1/2 -translate-x-2/4'
    case 'left': return 'top-1/2 right-auto left-0 -translate-y-1/2 -translate-x-2/4'
    case 'top-left': return 'bottom-auto right-auto left-0 top-0 -translate-y-1/2 -translate-x-2/4'
    case 'top-right': return 'bottom-auto left-auto right-0 top-0 -translate-y-1/2 translate-x-2/4'
    case 'bottom-right': return 'top-auto left-auto right-0 bottom-0 translate-y-1/2 translate-x-2/4'
    case 'bottom-left': return 'top-auto right-auto left-0 bottom-0 translate-y-1/2 -translate-x-2/4'
  }
})

const sizeClass = computed(() => {
  if ((props.content || slots.content) && !props.icon) return
  switch (props.size) {
    case 'xs': return 'h-2 w-2 text-opacity-0'
    case 'sm': return 'h-3 w-3 text-opacity-0'
    case 'lg': return 'h-5 w-5'
    case 'xl': return 'h-6 w-6'
    default: return 'h-4 w-4'
  }
})

const iconClass = computed(() => {
  if (props.icon) return 'aspect-square flex items-center justify-center leading-none'
})

const contentClass = computed(() => {
  if ((props.content || slots.content) && !props.icon) return 'leading-none px-2.5 py-1 whitespace-nowrap'
})

const borderClass = computed(() => {
  if (props.bordered) return 'border-2 border-gray-100'
})

const bgClass = computed(() => {
  return `bg-${props.color}`
})
</script>

<template>
  <div class="relative">
    <div
      v-if="modelValue"
      class="absolute rounded-full text-white font-semibold text-xs"
      :class="[ bgClass, positionClass, borderClass, iconClass, contentClass, sizeClass ]"
      v-bind="$attrs"
    >
      <slot name="content">{{ content }}</slot>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped></style>