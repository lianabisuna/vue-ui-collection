<script lang="ts" setup>
// Imports
import { PropType } from 'vue'
import AppFormContainer from './AppFormContainer.vue';
import type { TailwindColor, InputVariant } from './types'

// Types
export type InputSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'

// Props
const props = defineProps({
  modelValue: { type: String as PropType<string>, default: '' },
  autofocus: { type: Boolean as PropType<boolean>, default: false },
  name: { type: String as PropType<string>, default: '' },
  placeholder: { type: String as PropType<string>, default: '' },
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
})

// Emits
const emits = defineEmits(['update:modelValue'])


/** UPDATE MODEL VALUE */

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.value !== undefined) {
    emits('update:modelValue', target.value)
  }
}
</script>

<template>
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
  >
    <textarea
      :value="modelValue"
      @input="updateModelValue"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :autofocus="autofocus"
      class="bg-transparent outline-none w-full"
      :class="[{
        'opacity-75': disabled,
      }]"
    >
    </textarea>
  </AppFormContainer>
</template>

<style scoped></style>