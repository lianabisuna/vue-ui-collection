<script lang="ts" setup>
import { PropType } from 'vue'

defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
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
  <label class="relative cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="updateModelValue"
    >
    <slot></slot>
  </label>
</template>

<style scoped></style>