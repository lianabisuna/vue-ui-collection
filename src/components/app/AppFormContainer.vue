<script lang="ts" setup>
import { PropType, computed } from 'vue';
import AppFormLabel from './AppFormLabel.vue';
import AppFormMessage from './AppFormMessage.vue';

// export const formContainerProps = {

// }

export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'

const props = defineProps({
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  error: { type: Boolean as PropType<boolean>, default: false },
  success: { type: Boolean as PropType<boolean>, default: false },
  label: { type: String as PropType<string>, default: '' },
  required: { type: Boolean as PropType<boolean>, default: false },
  message: { type: String as PropType<string>, default: '' },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<ComponentSize>, default: '' },
})

const bgClass = computed(() => {
  if (props.dark) return 'bg-gray-800 text-gray-100'
  else return 'bg-white text-gray-800'
})

const borderClass = computed(() => {
  if (props.error) return 'border-red-500'
  else if (props.success) return 'border-green-500'
  else return props.dark
    ? 'border-gray-600 focus-within:border-gray-100'
    : 'border-gray-400 focus-within:border-gray-800'
})

const groupFocusClass = computed(() => {
  if (props.error) return 'group-focus-within:border-red-500'
  else if (props.success) return 'group-focus-within:border-green-500'
  else return `group-focus-within:border-${props.color}`
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'py-1 px-2'
    case 'sm': return 'py-1.5 px-2.5'
    case 'lg': return 'py-2.5 px-3.5'
    case 'xl': return 'py-3 px-4'
    default: return 'py-2 px-3'
  }
})
</script>

<template>
  <div class="group flex flex-col w-full">
    <!-- Label -->
    <AppFormLabel
      v-if="label"
      :required="required"
      :color="color"
      :error="error"
      :success="success"
      :dark="dark"
    >
      {{ label }}
    </AppFormLabel>
    <!-- Input Container -->
    <div
      :class="[
        bgClass, groupFocusClass, borderClass, sizeClass,
        { 'opacity-75 pointer-events-none': disabled },
      ]"
      class="flex items-center border cursor-text justify-between rounded w-full"
    >
      <slot></slot>
    </div>
    <!-- Message -->
    <AppFormMessage
      v-if="message"
      :error="error"
      :success="success"
      :dark="dark"
    >
      {{ message }}
    </AppFormMessage>
  </div>
</template>

<style scoped></style>