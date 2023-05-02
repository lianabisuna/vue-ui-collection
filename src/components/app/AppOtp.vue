<script lang="ts" setup>
// Imports
import { PropType, ref } from 'vue'

// Props
const props = defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  length: { type: [Number,String] as PropType<number|string>, default: 6 },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  type: { type: String as PropType<string>, default: 'text' },
})

// Emits
const emits = defineEmits(['update:modelValue'])


/** UPDATE MODEL VALUE */

// const updateModelValue = (event: Event) => {
//   const target = event.target as HTMLInputElement
//   if (target.value !== undefined) {
//     emits('update:modelValue', target.value)
//   }
// }


/** HANDLE OTP EVENTS */

// Data
const digits: any = ref([])
const otpRef = ref<any>(null)

// Functions

const handleKeypress = (event: KeyboardEvent, index: number) => {
  // pressed number keys
  if (new RegExp('^([0-9])$').test(event.key)) {
    digits.value[index] = event.key // add value in digits array

    // check if digits are equal to OTP length
    if (index !== +props.length-1) {
      otpRef.value?.children[index+1].focus() // focus on next input
    }
    else {
      otpRef.value?.children[+props.length-1].blur()
      emits('update:modelValue', digits.value.join(''))
    }
  }

  // pressed shortcut keys
  const keys = ['Tab','ArrowRight','ArrowLeft','Space']
  if (!keys.includes(event.key)) {
    event.preventDefault()
  }
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  // pressed backspace key
  if (event.key === 'Backspace') {
    digits.value[index] = null
    if (index !== 0) {
      otpRef.value?.children[index-1].focus()
    }
  }
}

const handleFocus = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.value !== undefined) {
    target.select()
  }
}

const handlePaste = (event: ClipboardEvent) => {
  const target = event.clipboardData as DataTransfer
  if (target.getData('text') !== undefined) {
    const clipboardArr = target.getData('text').split('')
    digits.value = clipboardArr.slice(0, +props.length)
  }
}
</script>

<template>
  <div ref="otpRef" class="relative flex items-center justify-center gap-1.5">
    <input
      v-for="(item,index) in +length"
      :key="index"
      :value="digits[index]"
      @keypress="(e) => handleKeypress(e, index)"
      @keydown="(e) => handleKeydown(e, index)"
      @focus="handleFocus"
      @paste="handlePaste"
      :type="type"
      class="h-12 w-10 border border-gray-500 rounded outline-none text-center hover:border-gray-800 focus:border-2 focus:border-gray-800"
      :class="[
        { 'opacity-75 pointer-events-none': disabled }
      ]"
      maxlength="1"
      :disabled="disabled"
    >
  </div>
</template>

<style scoped></style>