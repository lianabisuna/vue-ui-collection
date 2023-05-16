<script lang="ts" setup>
// Imports
import { type PropType } from 'vue'
import type { TailwindColor } from './types'

// Types
export type RadioSize = 'xs'|'sm'|'lg'|'xl'

// Props
defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<RadioSize>, default: '' },
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
    <!-- Radio -->
    <div class="relative">
      <!-- Hidden -->
      <input  
        type="radio"
        :checked="modelValue"
        @change="updateModelValue"
        class="peer sr-only"
      >
      <!-- Display -->
      <slot>
        <div
          class="bg-transparent flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 [&_span]:opacity-0 peer-checked:[&_span]:opacity-100 peer-checked:text-white fill-white"
          :class="[
            `peer-checked:border-${color} p-1`
          ]"
        >
          <span>
            <div
              class="rounded-full h-3 w-3"
              :class="[ `bg-${color}` ]"
            >
            </div>
          </span>
        </div>
      </slot>
    </div>
    <!-- Label -->
    <span class="ml-2">{{ label }}</span>
  </label>
</template>

<style scoped></style>