<script lang="ts" setup>
// Imports
import { PropType, computed, ref, useSlots } from 'vue'
import AppFormContainer from './AppFormContainer.vue';
import type { TailwindColor, InputVariant } from './types'
import AppChip from './AppChip.vue';
import { fileHelper } from '@/helpers'

// Types
export type HTMLInputType = 'email'|'number'|'password'|'reset'|'search'|'submit'|'tel'|'text'|'url'
export type InputSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'

// Props
const props = defineProps({
  modelValue: { type: String as PropType<string>, default: '' },
  block: { type: Boolean as PropType<boolean>, default: false },
  name: { type: String as PropType<string>, default: '' },
  placeholder: { type: String as PropType<string>, default: 'No file selected' },
  chip: { type: Boolean as PropType<boolean>, default: false },
  single: { type: Boolean as PropType<boolean>, default: true },
  multiple: { type: Boolean as PropType<boolean>, default: false },
  dropzone: { type: Boolean as PropType<boolean>, default: false },
  accept: { type: String as PropType<string>, default: '' },
  maxSize: { type: Number as PropType<number>, default: 0 },
  showSize: { type: Boolean as PropType<boolean>, default: false },
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

// Slots
const slots = useSlots()

// Emits
const emits = defineEmits(['update:modelValue'])


/** UPDATE MODEL VALUE */

// Data
const files = ref()

// Function
const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target && target.files) {
    const fileList = target.files as FileList;
    const fileArray = Array.from(fileList).map((file) => {
      if (props.maxSize > 0 && file.size > props.maxSize) {
        return null
      }
      else return {
        lastModified: file.lastModified,
        name: file.name,
        size: file.size,
        type: file.type,
        webkitRelativePath: file.webkitRelativePath,
      }
    }).filter((file) => file)
    emits('update:modelValue', fileArray)
    files.value = fileArray
  }
}


/** FILTER MODEL VALUE */

const filteredModelValue = computed(() => {
  if (files.value?.length) {
    return files.value.map((file: any) => {
      const formattedSize = fileHelper.formatBytes(file.size)
      return props.showSize ? `${file.name} (${formattedSize})` : file.name
    })
  }
})


/** TRIGGER INPUT CLICK */

// Data
const inputRef = ref<HTMLInputElement>()

// Function
const onInputClick = (event: Event) => {
  inputRef.value?.addEventListener('click', (_event: MouseEvent) => {
    _event.stopPropagation()
  })
  inputRef.value?.click()
}
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
    @click="onInputClick"
  >
    <!-- Prepend -->
    <slot name="prepend"></slot>
    <!-- Hidden -->
    <input
      ref="inputRef"
      :value="modelValue"
      @change="updateModelValue"
      type="file"
      :disabled="disabled"
      :accept="accept"
      :multiple="multiple"
      class="peer sr-only"
    />
    <!-- Chip -->
    <div v-if="chip">
      <input
        :value="filteredModelValue"
        class="sr-only"
      >
      <!-- Placeholder -->
      <div
        v-if="!filteredModelValue || !filteredModelValue?.length"
        class="text-gray-400"
      >
        {{ placeholder }}
      </div>
      <!-- Multiple -->
      <div
        v-else-if="Array.isArray(filteredModelValue)"
        class="flex flex-wrap gap-1.5"
      >
        <AppChip
          v-for="(item,key) in filteredModelValue"
          :key="key"
          size="xs"
        >
          {{ item }}
        </AppChip>
      </div>
      <!-- Single -->
      <div
        v-else-if="!Array.isArray(filteredModelValue)"
      >
        <AppChip size="xs">
          {{ filteredModelValue }}
        </AppChip>
      </div>
    </div>
    <!-- Text -->
    <input
      v-else
      :value="filteredModelValue"
      :placeholder="float ? ' ' : placeholder"
      :disabled="disabled"
      readonly
      :class="[
        {
          'ml-2': slots.prepend,
          'mr-2': slots.append,
          'placeholder-gray-400 placeholder-opacity-0': float
        }
      ]"
      class="w-full bg-transparent outline-none cursor-text"
    >
    <!-- Append -->
    <slot name="append"></slot>
  </AppFormContainer>
</template>

<style scoped></style>