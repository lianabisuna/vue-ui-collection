<script lang="ts" setup>
import { PropType, computed } from 'vue'

/** types */
export type ThemeColor = 'primary'|'secondary'|'success'|'warning'|'danger'|'info'
export type TailwindColor = `${string}-${number}`
export type ComponentSize = 'xs'|'sm'|'lg'|'xl'
export type ButtonVariant = 'outlined'|'text'|ThemeColor
export type ButtonType = 'button'|'submit'|'reset'
export type ColorTone = 'dark'|'light'

/** props */
const props = defineProps({
  disabled: { type: Boolean as PropType<boolean>, default: false }, // done
  size: { type: String as PropType<ComponentSize>, default: '' }, // done
  to: { type: [String,Object] as PropType<string|object>, default: '' }, // done
  type: { type: String as PropType<ButtonType>, default: 'button' }, // done
  // for clarification
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  icon: { type: Boolean as PropType<boolean>, default: false },
  variant: { type: String as PropType<ButtonVariant>, default: '' },
  tone: { type: String as PropType<ColorTone>, default: 'light' },
  // color: default, border, background, text + hover
})

const sizeClass = computed(() => {
  if (props.icon) {
    switch (props.size) {
      case 'xs': return 'aspect-square p-2'
      case 'sm': return 'aspect-square p-2.5'
      case 'lg': return 'aspect-square p-3.5'
      case 'xl': return 'aspect-square p-4'
      default: return 'aspect-square p-3'
    }
  }
  else {
    switch (props.size) {
      case 'xs': return 'px-3 py-2 text-xs'
      case 'sm': return 'px-3 py-2 text-sm'
      case 'lg': return 'px-5 py-3 text-lg'
      case 'xl': return 'px-6 py-3.5 text-xl'
      default: return 'px-5 py-2.5 text-base'
    }
  }
})

const bgClass = computed(() => {
  switch (props.variant) {
    case 'outlined': return `bg-transparent hover:bg-${props.color} active:bg-${props.color}/75`
    case 'text': return 'bg-transparent hover:bg-gray-200 active:bg-transparent/10'
    default: return `bg-${props.color} hover:bg-${props.color}/90 active:bg-${props.color}/75`
  }
})

const textClass = computed(() => {
  switch (props.variant) {
    case 'outlined': return `text-${props.color} hover:text-gray-100`
    case 'text': return 'text-gray-800'
    default: return 'text-gray-100'
  }
})

const borderClass = computed(() => {
  switch (props.variant) {
    case 'outlined': return `border border-${props.color} active:border-blue-500/0`
    case 'text': return ''
    default: return ''
  }
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    class="inline-flex items-center justify-center text-center rounded font-medium active:shadow"
    :class="[
      `outline-${color}/50`,
      { 'opacity-50 pointer-events-none': disabled },
      { 'aspect-square': icon },
      sizeClass, bgClass, textClass, borderClass,
    ]"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<style scoped></style>