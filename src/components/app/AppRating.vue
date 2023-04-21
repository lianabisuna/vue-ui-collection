<script lang="ts" setup>
import { PropType, computed } from 'vue'

/** types */
export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'|'full'

/** props */
const props = defineProps({
  modelValue: { type: [Number,String] as PropType<number|string>, default: 0 },
  size: { type: String as PropType<ComponentSize>, default: '' },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'h-3 w-3'
    case 'sm': return 'h-5 w-5'
    case 'lg': return 'h-9 w-9'
    case 'xl': return 'h-11 w-11'
    default: return 'h-7 w-7'
  }
})
</script>

<template>
  <div class="flex items-center gap-3">
  <svg
    v-for="item in 5"
    :key="item"
    aria-hidden="true"
    :class="[
      item <= +modelValue ? `fill-${color}` : 'fill-gray-600',
      sizeClass
    ]"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
  </div>
</template>

<style scoped></style>