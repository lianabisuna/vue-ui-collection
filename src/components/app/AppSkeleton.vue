<script lang="ts" setup>
import { PropType } from 'vue';

defineProps({
  modelValue: { type: [String,Number], default: 0 },
  dark: { type: Boolean as PropType<boolean>, default: false },
})

const sizes = [
  'h-4 w-2/4 mb-1',
  'h-3 w-full',
  'h-3 w-full',
  'h-3 w-4/5',
  'h-3 w-11/12',
  'h-3 w-full',
  'h-3 w-full',
  'h-3 w-full',
  'h-3 w-4/5',
]
</script>

<template>
  <div class="bg-transparent animate-pulse h-full w-full flex flex-col gap-3">
    <div
      v-for="(size,key) in sizes"
      :key="key"
      class="rounded-full"
      :class="[
        size,
        dark ? 'bg-gray-600' : 'bg-gray-300'
      ]"
    >
    </div>
  </div>
</template>

<style scoped></style>