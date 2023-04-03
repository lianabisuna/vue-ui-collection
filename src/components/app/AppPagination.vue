<script lang="ts" setup>
import { PropType, useSlots } from 'vue';
import AppButton from './AppButton.vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

export type TailwindColor = `${string}-${number}`

defineProps({
  modelValue: { type: Number as PropType<number>, default: 1 },
  length: { type: Number as PropType<number>, default: 1 },
  color: { type: String as PropType<TailwindColor>, default: 'rose-500' },
})

const slots = useSlots()

const emits = defineEmits(['update:modelValue'])

const updateModelValue = (value: number) => {
  emits('update:modelValue', value)
}

</script>

<template>
  <div class="flex items-center gap-2">
    <AppButton
      :icon="!slots.previous"
      color="white"
      text-color="gray-800"
      :disabled="modelValue === 1"
      tone="light"
      @click="updateModelValue(modelValue - 1)"
    >
      <slot name="previous">
        <ChevronLeftIcon class="h-5 w-5" />
      </slot>
    </AppButton>
    <AppButton
      v-for="(item,key) in length"
      :key="key"
      icon
      :color="modelValue === item ? color : 'white'"
      :tone="modelValue === item ? 'dark' : 'light'"
      @click="updateModelValue(item)"
    >
      <div class="h-5 w-5 flex items-center justify-center relative">
        <span class="absolute">{{ item }}</span>
      </div>
    </AppButton>
    <AppButton
      :icon="!slots.next"
      color="white"
      text-color="gray-800"
      :disabled="modelValue === length"
      tone="light"
      @click="updateModelValue(modelValue + 1)"
    >
      <slot name="next">
        <ChevronRightIcon class="h-5 w-5" />
      </slot>
    </AppButton>
  </div>
</template>

<style scoped></style>