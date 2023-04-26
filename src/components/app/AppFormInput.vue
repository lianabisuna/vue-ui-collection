<script lang="ts" setup>
import { PropType, ref, useSlots } from 'vue'
import AppFormContainer from './AppFormContainer.vue';

export type TailwindColor = `${string}-${number}`|'black'|'white'

defineProps({
  modelValue: { type: String as PropType<string>, default: '' },
  autofocus: { type: Boolean as PropType<boolean>, default: false },
  // autocomplete: { type: Boolean as PropType<boolean>, default: false },
  block: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  // error: { type: Boolean as PropType<boolean>, default: false },
  name: { type: String as PropType<string>, default: '' },
  // messages: { type: Boolean as PropType<boolean>, default: false },
  // label: { type: Boolean as PropType<boolean>, default: false },
  placeholder: { type: String as PropType<string>, default: '' },
  type: { type: String as PropType<string>, default: '' },
  // height: { type: Boolean as PropType<boolean>, default: false },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  error: { type: Boolean as PropType<boolean>, default: false },
  success: { type: Boolean as PropType<boolean>, default: false },
  label: { type: String as PropType<string>, default: '' },
  required: { type: Boolean as PropType<boolean>, default: false },
  message: { type: String as PropType<string>, default: '' },
})

const slots = useSlots()

const emits = defineEmits(['update:modelValue'])

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.value !== undefined) {
    emits('update:modelValue', target.value)
  }
}
</script>

<template>
  <AppFormContainer
    :label="label"
    :required="required"
    :color="color"
    :error="error"
    :success="success"
    :message="message"
    :disabled="disabled"
    :dark="dark"
  >
    <slot name="prepend"></slot>
    <input
      :value="modelValue"
      @input="updateModelValue"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :autofocus="autofocus"
      :class="[{
        'ml-2': slots.prepend,
        'mr-2': slots.append,
      }]"
      class="bg-transparent outline-none w-auto flex flex-1"
    />
    <slot name="append"></slot>
  </AppFormContainer>
</template>

<style scoped></style>