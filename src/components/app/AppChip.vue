<script lang="ts" setup>
// Imports
import { type PropType, computed } from 'vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

// Types
export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'|'full'
export type RoundedSize = 'sm'|'md'|'lg'|'xl'|'full'
export type ColorTone = 'dark'|'light'

// Props
const props = defineProps({
  size: { type: String as PropType<ComponentSize>, default: '' },
  rounded: { type: [Boolean,String] as PropType<RoundedSize>, default: '' },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  outlined: { type: Boolean as PropType<boolean>, default: false },
  closable: { type: Boolean as PropType<boolean>, default: false },
  tone: { type: String as PropType<ColorTone>, default: '' },
})


/** CLASSES */

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'px-1.5 py-1 text-[10px]'
    case 'sm': return 'px-2.5 py-1 text-sm'
    case 'lg': return 'px-3 py-1 text-lg'
    case 'xl': return 'px-3 py-1.5 text-xl'
    default: return 'px-2.5 py-1 text-base'
  }
})

const bgClass = computed(() => {
  if (props.outlined) return `bg-transparent hover:bg-${props.color}/5`
  else return `bg-${props.color} hover:bg-${props.color}/90`
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
  if (!props.outlined) return
  return `border border-${props.color}`
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
    <button
      v-if="closable"
      type="button"
      class="ml-1.5 rounded-full outline-none p-px flex items-center justify-center"
      :class="[
        outlined
          ? `text-${color} hover:bg-${color}/20`
          : `text-white hover:bg-black/10`
      ]"
    >
      <XMarkIcon class="h-4 w-4" />
    </button>
  </div>
</template>

<style scoped></style>