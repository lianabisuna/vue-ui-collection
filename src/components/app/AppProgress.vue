<script lang="ts" setup>
import { PropType } from 'vue';

export type TailwindColor = `${string}-${number}`|'black'|'white'

defineProps({
  modelValue: { type: [String,Number], default: 0 },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
})
</script>

<template>
  <div
    class="relative w-full rounded-full bg-gray-300 h-auto min-h-[10px]"
  >
    <div
      :class="[
        `bg-${color} h-auto min-h-[10px] rounded-full text-xs flex items-center justify-center py-px font-semibold text-white`
      ]"
      :style="{ width: `${modelValue}%` }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>