<script lang="ts" setup>
import { PropType, computed } from 'vue'

/** types */
export type TailwindColor = `${string}-${number}`|'black'|'white'

/** props */
const props = defineProps({
  containerClass: { type: String as PropType<String>, default: '' },
  rounded: { type: String as PropType<String>, default: '' },
  shadow: { type: String as PropType<String>, default: '' },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  loading: { type: Boolean as PropType<boolean>, default: false }, // pending
  to: { type: [String,Object] as PropType<string|object>, default: '' },
  dark: { type: Boolean as PropType<boolean>, default: false },
})

const roundedClass = computed(() => {
  return props.rounded ? `rounded-${props.rounded}` : 'rounded'
})

const shadowClass = computed(() => {
  return props.rounded ? `shadow-${props.rounded}` : 'shadow'
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'div'"
    class="relative border"
    :class="[
      containerClass,
      roundedClass,
      shadowClass,
      dark ? 'bg-gray-800 text-gray-100 border-gray-600' : 'bg-white text-gray-800 border-gray-200',
      { 'opacity-75 pointer-events-none': disabled }
    ]"
    v-bind="$attrs"
  >
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </component>
</template>

<style scoped></style>