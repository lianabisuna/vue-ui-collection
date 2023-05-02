<script lang="ts" setup>
// Imports
import { PropType, computed } from 'vue'
import type { TailwindColor, RoundedSize } from './types'

// Types
export type AvatarSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'|'full'

// Props
const props = defineProps({
  src: { type: String as PropType<string>, default: '' },
  color: { type: String as PropType<TailwindColor>, default: 'black' },
  size: { type: String as PropType<AvatarSize>, default: '' },
  rounded: { type: [Boolean,String] as PropType<RoundedSize>, default: 'full' },
  dark: { type: Boolean as PropType<boolean>, default: false },
})


/** CLASSES */

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'w-6 h-6'
    case 'sm': return 'w-8 h-8'
    case 'lg': return 'w-20 h-20'
    case 'xl': return 'w-32 h-32'
    default: return 'w-10 h-10'
  }
})

const roundedClass = computed(() => {
  if (props.rounded) return `rounded-${props.rounded}`
  else return ''
})
</script>

<template>
  <component
    :is="src ? 'img' : 'div'"
    :src="src"
    class="object-cover"
    :class="[
      color ? `bg-${color}` : '',
      src ? '' : 'flex items-center justify-center text-white',
      sizeClass, roundedClass,
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<style scoped></style>