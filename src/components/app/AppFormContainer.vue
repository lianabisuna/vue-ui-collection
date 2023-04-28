<script lang="ts" setup>
import { PropType, computed } from 'vue';
import AppFormLabel from './AppFormLabel.vue';
import AppFormMessage from './AppFormMessage.vue';

// export const formContainerProps = {

// }

export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'
export type InputVariant = 'outlined'|'filled'|'underlined'

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
  variant: { type: String as PropType<InputVariant>, default: '' },
  float: { type: Boolean as PropType<boolean>, default: false },
})

const bgClass = computed(() => {
  switch (props.variant) {
    case 'outlined': case 'underlined': return props.dark ? 'bg-transparent' : 'bg-transparent'
    case 'filled': return props.dark ? 'bg-gray-700' : 'bg-gray-100'
    default: return props.dark ? 'bg-gray-800' : 'bg-white'
  }
})

const textClass = computed(() => {
  return props.dark ? 'text-gray-100' : 'text-gray-800'
})

const borderClass = computed(() => {
  switch (props.variant) {
    case 'filled': return 'border-none'
    case 'underlined': return 'border-b'
    case 'outlined': default:
      if (props.error) return 'border border-red-500'
      else if (props.success) return 'border border-green-500'
      else return props.dark
        ? 'border border-gray-600 focus-within:border-gray-100'
        : 'border border-gray-400 focus-within:border-gray-800'
  }
})

const groupFocusClass = computed(() => {
  if (props.error) return 'group-focus-within:border-red-500'
  else if (props.success) return 'group-focus-within:border-green-500'
  else return `group-focus-within:border-${props.color}`
})

const paddingYClass = computed(() => {
  if (props.float) {
    switch (props.variant) {
      case 'filled':
        switch (props.size) {
          case 'xs': return 'pt-6 pb-1'
          case 'sm': return 'pt-6 pb-1.5'
          case 'lg': return 'pt-6 pb-2.5'
          case 'xl': return 'pt-6 pb-3'
          default: return 'pt-6 pb-2'
        }
      case 'underlined':
        switch (props.size) {
          case 'xs': return 'pt-6 pb-1'
          case 'sm': return 'pt-6 pb-1.5'
          case 'lg': return 'pt-6 pb-2.5'
          case 'xl': return 'pt-6 pb-3'
          default: return 'pt-6 pb-1'
        }
      case 'outlined': default:
        switch (props.size) {
          case 'xs': return 'py-1'
          case 'sm': return 'py-1.5'
          case 'lg': return 'py-2.5'
          case 'xl': return 'py-3'
          default: return 'py-4'
        }
    }
  } else {
    switch (props.size) {
      case 'xs': return 'py-1'
      case 'sm': return 'py-1.5'
      case 'lg': return 'py-2.5'
      case 'xl': return 'py-3'
      default: return 'py-2'
    }
  }
})

const paddingXClass = computed(() => {
  if (props.variant === 'underlined') return 'px-0'
  else {
    switch (props.size) {
      case 'xs': return 'px-2'
      case 'sm': return 'px-2.5'
      case 'lg': return 'px-3.5'
      case 'xl': return 'px-4'
      default: return 'px-3'
    }
  }
})
</script>

<template>
  <div class="group flex flex-col w-full">
    <!-- Label -->
    <AppFormLabel
      v-if="label && !float"
      :required="required"
      :color="color"
      :error="error"
      :success="success"
      :dark="dark"
      :size="size"
    >
      {{ label }}
    </AppFormLabel>
    <!-- Input Container -->
    <div
      :class="[
        bgClass,
        groupFocusClass,
        borderClass,
        paddingXClass,
        paddingYClass,
        textClass,
        { 'rounded': variant !== 'underlined' },
        { 'opacity-75 pointer-events-none': disabled },
      ]"
      class="relative flex items-center cursor-text justify-between w-full"
    >
      <slot></slot>
      <!-- Floating Label -->
      <AppFormLabel
        v-if="float"
        :required="required"
        :color="color"
        :error="error"
        :success="success"
        :dark="dark"
        :size="size"
        :float="float"
        :variant="variant"
      >
        {{ label }}
      </AppFormLabel>
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