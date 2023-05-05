<script lang="ts" setup>
// Imports
import { PropType, computed, ref, useSlots } from 'vue'
import AppFormContainer from './AppFormContainer.vue';
import type { TailwindColor, InputVariant } from './types'
import AppChip from './AppChip.vue'
import { fileHelper } from '@/helpers'
import {
  ArrowUpTrayIcon,
  DocumentIcon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

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


/** CONVERT FILE LIST TO ARRAY */
const formatFileList = (fileList: FileList) => {
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
  return fileArray
}


/** UPDATE MODEL VALUE */

// Data
const files = ref()

// Update model value
const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target && target.files) {
    const fileArray = formatFileList(target.files)
    emits('update:modelValue', fileArray)
    files.value = fileArray
  }
}

// Remove file from list
const removeFile = (index: number) => {
  files.value = [ ...files.value ].filter((file, key) => key !== index)
}


/** FILTER MODEL VALUE */

const filteredModelValue = computed(() => {
  if (files.value?.length) {
    if (props.dropzone) return files.value.map((file: any) => {
      return {
        ...file,
        formattedSize: fileHelper.formatBytes(file.size)
      }
    })
    else return files.value.map((file: any) => {
      const formattedSize = fileHelper.formatBytes(file.size)
      return props.showSize ? `${file.name} (${formattedSize})` : file.name
    })
  }
})


/** HANDLE DRAG AND DROP FILES */

const isDragging = ref(false)

const onFileDrop = (event: DragEvent) => {
  event.stopPropagation()
  const target = event.dataTransfer
  if (target && target.files) {
    const fileArray = formatFileList(target.files)
    emits('update:modelValue', fileArray)
    files.value = fileArray
  }
}
</script>

<template>
  <!-- Dropzone -->
  <div
    v-if="dropzone"
    class="flex flex-col w-full"
  >
    <!-- Box -->
    <div
      class="flex flex-col h-[200px] border-dashed border-2 rounded-lg cursor-pointer"
      :class="[
        dark ? 'bg-gray-600 border-gray-500 hover:bg-gray-600/80 text-gray-300' : 'bg-gray-100 border-gray-300 hover:bg-gray-200/70 text-gray-500',
        isDragging
          ? dark
            ? 'bg-gray-600/80'
            : 'bg-gray-200/70'
          : ''
      ]"
      @click="onInputClick"
      @dragenter.prevent = "isDragging = true"
      @dragover.prevent = "isDragging = true"
      @dragleave.prevent = "isDragging = false"
      @drop.prevent="onFileDrop"
    >
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
      <div class="flex flex-col justify-center items-center h-full gap-3">
        <ArrowUpTrayIcon class="h-6 w-6 path-stroke-2" />
        <p class="text-sm font-medium">Drop files here <span class="font-normal">or</span> click to upload</p>
      </div>
    </div>
    <!-- List -->
    <ul
      v-if="filteredModelValue"
      class="flex flex-col gap-3 mt-5"
    >
      <li
        v-for="(file,key) in filteredModelValue"
        :key="key"
        class="flex gap-3 border rounded p-3"
        :class="[
          dark ? 'border-gray-600 text-gray-100' : 'border-gray-400 text-gray-800'
        ]"
      >
        <div class="flex flex-shrink justify-center items-center">
          <div
            class="flex justify-center items-center h-12 w-12 p-1.5 rounded"
            :class="[
              dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-600'
            ]"
          >
            <DocumentIcon class="h-7 w-7" />
          </div>
        </div>
        <div class="flex flex-grow flex-col items-start justify-center">
          <div class="font-semibold mb-1">{{ file.name }}</div>
          <div class="text-sm text-gray-500">{{ file.formattedSize }}</div>
        </div>
        <div class="flex flex-shrink-1 gap-1.5">
          <button
            class="flex justify-center items-center bg-transparent outline-none rounded px-1.5"
            @click="() => removeFile(key)"
          >
            <XMarkIcon class="h-5 w-5" />
          </button>
        </div>
      </li>
    </ul>
  </div>
  <!-- Input -->
  <AppFormContainer
    v-else
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