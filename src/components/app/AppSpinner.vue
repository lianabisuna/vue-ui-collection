<script lang="ts" setup>
import { PropType, computed } from 'vue';

/** types */
export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = 'xs'|'sm'|'lg'|'xl'

const props = defineProps({
  modelValue: { type: [String,Number], default: 0 },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  size: { type: String as PropType<ComponentSize>, default: '' },
  dark: { type: Boolean as PropType<boolean>, default: false },
})

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