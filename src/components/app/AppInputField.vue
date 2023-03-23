<script lang="ts" setup>
import { ref, useSlots } from 'vue'
import { onClickOutside } from '@vueuse/core';

interface Props {
  autofocus?: boolean,
  // autocomplete?: boolean,
  block?: boolean,
  dark?: boolean,
  disabled?: boolean,
  // error?: boolean,
  name?: string,
  // messages?: string,
  // label?: string,
  placeholder?: string,
  rounded?: boolean,
  type?: string,
  // height?: string,
}

defineProps<Props>()
const slots = useSlots()

let isFocus = ref<boolean>(false)
let inputWrapperRef = ref<any>(null)
let inputRef = ref<any>(null)

onClickOutside(inputWrapperRef, () => isFocus.value = false)
</script>

<template>
  <div
    class="relative"
    :class="[{
      'w-full h-10 flex items-center justify-center': block,
    }]"
  >
    <div
      ref="inputWrapperRef"
      :class="[{
        'rounded-md': rounded,
        'opacity-75': disabled,
        'bg-gray-700 text-gray-100 border-gray-600 focus-within:border-gray-100': dark,
        'bg-gray-100 text-gray-700 border-gray-400 focus-within:border-gray-700': !dark,
      }]"
      class="flex py-2 px-3 border cursor-text justify-between"
      @click="inputRef.focus()"
    >
      <slot name="prepend"></slot>
      <input
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