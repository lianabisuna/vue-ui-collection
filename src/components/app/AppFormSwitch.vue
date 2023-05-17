<script lang="ts" setup>
// Imports
import { type PropType } from 'vue'
import type { TailwindColor } from './types'

// Types
export type SwitchSize = 'xs'|'sm'|'lg'|'xl'

// Props
defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<SwitchSize>, default: '' },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  label: { type: String as PropType<string>, default: '' },
})

// Emits
const emits = defineEmits(['update:modelValue'])


/** UPDATE MODEL VALUE */

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    emits('update:modelValue', target.checked)
  }
}
</script>

<template>
  <label class="flex cursor-pointer select-none items-center">
    <!-- Switch -->
    <div class="relative">
      <!-- Hidden -->
      <input  
        type="checkbox"
        :checked="modelValue"
        @change="updateModelValue"
        class="peer sr-only"
      >
      <!-- Display -->
      <slot>
        <div
          class="relative flex items-center justify-center bg-gray-300 h-8 w-14 rounded-full [&_span]:left-0 peer-checked:[&_span]:translate-x-full"
          :class="[
            `peer-checked:bg-${color}`
          ]"
        >
          <span
            class="transition absolute rounded-full h-6 w-6 mx-1 bg-white"
            :class="[ `bg-${color}` ]"
          >
          </span>
        </div>
      </slot>
    </div>
    <!-- Label -->
    <span class="ml-2">{{ label }}</span>
  </label>
</template>

<style scoped></style>