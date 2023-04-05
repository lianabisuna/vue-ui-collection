<script lang="ts" setup>
import { PropType } from 'vue'

export type ComponentSize = 'xs'|'sm'|'lg'|'xl'
export type TailwindColor = `${string}-${number}`|'black'|'white'

defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<ComponentSize>, default: '' },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  label: { type: String as PropType<string>, default: '' },
})

const emits = defineEmits(['update:modelValue'])

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    emits('update:modelValue', target.checked)
  }
}
</script>

<template>
  <label class="flex cursor-pointer select-none items-center">
    <div class="relative">
      <input  
        type="checkbox"
        :checked="modelValue"
        @change="updateModelValue"
        class="peer sr-only"
      >
      <slot>
        <div
          class="relative flex items-center justify-center bg-gray-300 h-8 w-14 rounded-full [&_span]:left-0 peer-checked:[&_span]:translate-x-full"
          :class="[
            `peer-checked:bg-${color}`
          ]"
        >
          <span
            class="transition absolute rounded-full h-6 w-6 mx-1 bg-white"
            :class="[ `bg-${color}` ]"
          >
          </span>
        </div>
      </slot>
    </div>
    <span class="ml-2">{{ label }}</span>
  </label>
</template>

<style scoped></style>