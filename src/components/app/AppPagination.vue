<script lang="ts" setup>
// Imports
import { PropType, useSlots } from 'vue'
import AppButton from './AppButton.vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import type { TailwindColor } from './types'

// Types
export type ButtonSize = 'xs'|'sm'|'lg'|'xl'

// Props
defineProps({
  modelValue: { type: Number as PropType<number>, default: 1 },
  length: { type: Number as PropType<number>, default: 1 },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  size: { type: String as PropType<ButtonSize>, default: '' },
})

// Slots
const slots = useSlots()

// Emits
const emits = defineEmits(['update:modelValue'])


/** UPDATE MODEL VALUE */
const updateModelValue = (value: number) => {
  emits('update:modelValue', value)
}
</script>

<template>
  <div
    class="flex flex-wrap items-center gap-2"
    v-bind="$attrs"
  >
    <AppButton
      :icon="!slots.previous"
      color="white"
      text-color="gray-800"
      :disabled="modelValue === 1"
      tone="light"
      :size="size"
      @click="updateModelValue(modelValue - 1)"
    >
      <slot name="previous">
        <ChevronLeftIcon class="h-5 w-5" />
      </slot>
    </AppButton>
    <AppButton
      v-for="(item,key) in length"
      :key="key"
      icon
      :color="modelValue === item ? color : 'white'"
      :tone="modelValue === item ? 'dark' : 'light'"
      :size="size"
      @click="updateModelValue(item)"
    >
      <div class="h-5 w-5 flex items-center justify-center relative">
        <span class="absolute">{{ item }}</span>
      </div>
    </AppButton>
    <AppButton
      :icon="!slots.next"
      color="white"
      text-color="gray-800"
      :disabled="modelValue === length"
      tone="light"
      :size="size"
      @click="updateModelValue(modelValue + 1)"
    >
      <slot name="next">
        <ChevronRightIcon class="h-5 w-5" />
      </slot>
    </AppButton>
  </div>
</template>

<style scoped></style>