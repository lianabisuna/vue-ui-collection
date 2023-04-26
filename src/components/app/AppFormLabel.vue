<script lang="ts" setup>
import { PropType, computed } from 'vue';

export type TailwindColor = `${string}-${number}`|'black'|'white'

const props = defineProps({
  required: { type: Boolean as PropType<boolean>, default: false },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  error: { type: Boolean as PropType<boolean>, default: false },
  success: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
})

const textClass = computed(() => {
  if (props.error) return 'text-red-500 group-focus-within:text-red-500'
  else if (props.success) return 'text-green-500 group-focus-within:text-green-500'
  else return props.dark
    ? `text-gray-100 group-focus-within:text-${props.color}`
    : `text-gray-800 group-focus-within:text-${props.color}`
})
</script>

<template>
  <label
    class="mb-1.5 font-medium text-sm"
    :class="[
      textClass
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
    <span
      v-if="required"
      class="ml-px"
    >
      *
    </span>
  </label>
</template>

<style scoped></style>