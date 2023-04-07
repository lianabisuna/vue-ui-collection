<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { PropType, computed } from 'vue'

/** types */
export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'|'full'
export type RoundedSize = 'sm'|'md'|'lg'|'xl'|'full'
export type ColorTone = 'dark'|'light'

/** props */
const props = defineProps({
  size: { type: String as PropType<ComponentSize>, default: '' },
  rounded: { type: [Boolean,String] as PropType<RoundedSize>, default: '' },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  outlined: { type: Boolean as PropType<boolean>, default: false },
  tone: { type: String as PropType<ColorTone>, default: '' },
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'px-1 py-px text-[10px]'
    case 'sm': return 'px-1.5 py-0.5 text-sm'
    case 'lg': return 'px-2 py-0.5 text-lg'
    case 'xl': return 'px-2.5 py-1 text-xl'
    default: return 'px-2.5 py-0.5 text-base'
  }
})

const bgClass = computed(() => {
  if (props.outlined) return `bg-${props.color}/10`
  else return `bg-${props.color}`
})

const textClass = computed(() => {
  if (props.outlined) {
    return `text-${props.color}`
  }
  else {
    switch (props.tone) {
      case 'light': return 'text-gray-800'
      case 'dark': default: return 'text-gray-100'
    }
  }
})

const roundedClass = computed(() => {
  if (props.rounded) return `rounded-${props.rounded}`
  else return 'rounded'
})

const borderClass = computed(() => {
  if (props.outlined) return `border border-${props.color}`
})
</script>

<template>
  <div
    class="inline-flex items-center justify-center text-center rounded font-medium"
    :class="[
      `outline-${color}/50`,
      sizeClass, bgClass, textClass, borderClass, roundedClass
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>