<script lang="ts" setup>
// Imports
import { type PropType } from 'vue'
import type { TailwindColor } from './types'

// Types
export type CheckboxSize = 'xs'|'sm'|'lg'|'xl'

// Props
defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<CheckboxSize>, default: '' },
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
    <!-- Checkbox -->
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
          class="bg-transparent flex h-5 w-5 items-center justify-center rounded border border-gray-400 [&_span]:opacity-0 peer-checked:[&_span]:opacity-100 peer-checked:text-white fill-white"
          :class="[
            `peer-checked:bg-${color} peer-checked:border-${color}`
          ]"
        >
          <span class="h-3 w-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
            </svg>
          </span>
        </div>
      </slot>
    </div>
    <!-- Label -->
    <span class="ml-2">{{ label }}</span>
  </label>
</template>

<style scoped></style>