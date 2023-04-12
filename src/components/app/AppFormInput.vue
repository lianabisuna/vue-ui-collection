<script lang="ts" setup>
import { PropType, ref, useSlots } from 'vue'
import { vOnClickOutside } from '@vueuse/components';

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
})

const slots = useSlots()

let isFocus = ref(false)
let inputRef = ref<any>(null)

const emits = defineEmits(['update:modelValue'])

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.value !== undefined) {
    emits('update:modelValue', target.value)
  }
}
</script>

<template>
  <div
    class="relative w-full flex items-center"
  >
    <div
      ref="inputWrapperRef"
      :class="[{
        'opacity-75': disabled,
        'bg-gray-800 text-gray-100 border-gray-600 focus-within:border-gray-100': dark,
        'bg-white text-gray-800 border-gray-400 focus-within:border-gray-800': !dark,
      }]"
      class="flex items-center py-2 px-3 border cursor-text justify-between rounded w-full"
      @click="inputRef.focus()"
      v-on-click-outside="() => isFocus = false"
    >
      <slot name="prepend"></slot>
      <input
        :value="modelValue"
        @input="updateModelValue"
        ref="inputRef"
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
        @focus="isFocus = true"
        @blur="isFocus = false"
      />
      <slot name="append"></slot>
    </div>
  </div>
</template>

<style scoped></style>