<script lang="ts" setup>
// Imports
import { PropType, useSlots, computed } from 'vue'
import AppFormContainer from './AppFormContainer.vue';
import type { TailwindColor, InputVariant } from './types'

// Types
export type HTMLInputType = 'email'|'number'|'password'|'reset'|'search'|'submit'|'tel'|'text'|'url'
export type InputSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'

// Props
const props = defineProps({
  modelValue: { type: String as PropType<string>, default: '' },
  autofocus: { type: Boolean as PropType<boolean>, default: false },
  readonly: { type: Boolean as PropType<boolean>, default: false },
  name: { type: String as PropType<string>, default: '' },
  placeholder: { type: String as PropType<string>, default: '' },
  type: { type: String as PropType<HTMLInputType>, default: 'text' },
  /** Form Container */
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  error: { type: Boolean as PropType<boolean>, default: false },
  success: { type: Boolean as PropType<boolean>, default: false },
  label: { type: String as PropType<string>, default: '' },
  required: { type: Boolean as PropType<boolean>, default: false },
  message: { type: String as PropType<string>, default: '' },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<InputSize>, default: '' },
  variant: { type: String as PropType<InputVariant>, default: '' },
  float: { type: Boolean as PropType<boolean>, default: false },
  block: { type: Boolean as PropType<boolean>, default: false },
})

// Slots
const slots = useSlots()

// Emits
const emits = defineEmits(['update:modelValue'])


/** UPDATE MODEL VALUE */

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.value !== undefined) {
    emits('update:modelValue', target.value)
  }
}

/** CLASSES */

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'text-xs'
    case 'sm': return 'text-sm'
    case 'lg': return 'text-lg'
    case 'xl': return 'text-xl'
    default: return 'text-base'
  }
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'outlined': return ''
    case 'filled': return ''
    case 'underlined': return ''
    default: return ''
  }
})
</script>

<template>
  <!-- Container -->
  <AppFormContainer
    :color="color"
    :error="error"
    :success="success"
    :label="label"
    :required="required"
    :message="message"
    :disabled="disabled"
    :dark="dark"
    :size="size"
    :variant="variant"
    :float="float"
    :block="block"
  >
    <!-- Prepend -->
    <slot name="prepend"></slot>
    <!-- Input -->
    <input
      :value="modelValue"
      @input="updateModelValue"
      :name="name"
      :type="type"
      :placeholder="float ? ' ' : placeholder"
      :disabled="disabled"
      :autofocus="autofocus"
      :readonly="readonly"
      :class="[
        sizeClass, variantClass,
        {
          'ml-2': slots.prepend,
          'mr-2': slots.append,
          'placeholder-gray-400 placeholder-opacity-0': float
        },
        block ? 'w-full' : 'w-fit'
      ]"
      class="peer flex flex-1 bg-transparent outline-none"
      v-bind="$attrs"
    />
    <!-- Append -->
    <slot name="append"></slot>
  </AppFormContainer>
</template>

<style scoped></style>