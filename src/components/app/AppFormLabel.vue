<script lang="ts" setup>
import { PropType, computed } from 'vue';

export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'
export type InputVariant = 'outlined'|'filled'|'underlined'

const props = defineProps({
  required: { type: Boolean as PropType<boolean>, default: false },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  error: { type: Boolean as PropType<boolean>, default: false },
  success: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<ComponentSize>, default: '' },
  variant: { type: String as PropType<InputVariant>, default: '' },
  float: { type: Boolean as PropType<boolean>, default: false },
})

const textClass = computed(() => {
  if (props.error) return 'text-red-500 group-focus-within:text-red-500'
  else if (props.success) return 'text-green-500 group-focus-within:text-green-500'
  else {
    if (props.float) return props.dark ? 'text-gray-400' : 'text-gray-600'
    else return props.dark ? 'text-gray-100' : 'text-gray-800'
  }
})

/** Size class */
const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'text-xs'
    case 'sm': return 'text-sm'
    case 'lg': return 'text-lg'
    case 'xl': return 'text-xl'
    default: return 'text-base'
  }
})

/** Variant class */
const positionClass = computed(() => {
  if (props.float) {
    switch (props.variant) {
      case 'outlined': return 'top-0 -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 px-1.5 peer-placeholder-shown:px-0 peer-focus:px-1.5'
      case 'underlined': return 'bottom-full translate-y-full peer-placeholder-shown:bottom-1 peer-placeholder-shown:translate-y-0 peer-focus:bottom-full peer-focus:translate-y-full'
      case 'filled': default: return 'top-0.5 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0.5 peer-focus:translate-y-0'
      
    }
  }
})

const bgClass = computed(() => {
  if (props.float) {
    switch (props.variant) {
      case 'outlined': return props.dark ? 'bg-gray-900 peer-placeholder-shown:bg-transparent peer-focus:bg-gray-900' : 'bg-white peer-placeholder-shown:bg-transparent peer-focus:bg-white'
      case 'filled': case 'underlined': default: return ''
    }
  }
})
</script>

<template>
  <label
    :class="[
      textClass,
      sizeClass,
      bgClass,
      positionClass,
      { 'mb-1.5': !float },
      { 'absolute z-10 scale-75 peer-focus:scale-75 peer-placeholder-shown:scale-100 origin-[0] transform duration-300 cursor-text': float },
      `group-focus-within:text-${props.color}`
    ]"
    v-bind="$attrs"
  >
    <slot></slot>
    <span
      v-if="required"
      class="ml-px text-red-500"
    >
      *
    </span>
  </label>
</template>

<style scoped></style>