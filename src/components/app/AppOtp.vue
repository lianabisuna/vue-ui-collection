<script lang="ts" setup>
import { PropType, ref } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  length: { type: [Number,String] as PropType<number|string>, default: 6 },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  type: { type: String as PropType<string>, default: 'text' },
})

const emits = defineEmits(['update:modelValue'])

// const updateModelValue = (event: Event) => {
//   const target = event.target as HTMLInputElement
//   if (target.value !== undefined) {
//     emits('update:modelValue', target.value)
//   }
// }

const digits: any = ref([])
const otpRef = ref<any>(null)

/**
 * Listens for OTP input's keypress event which activates only when user clicks allowed keys
 * Included keys are as follows: 0-9, Tab, Arrow Right, Arrow Left and Space
 * TO DO: Add function when clicking Arrow Right, Arrow Left and Space
 * @param event keyboard click event
 * @param index OTP digit index
 */
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

/**
 * Listens for OTP input's keydown event which activates only when user clicks "Backspace"
 * Source: https://stackoverflow.com/questions/4843472/javascript-listener-keypress-doesnt-detect-backspace
 * @param event keyboard click event
 * @param index OTP digit index
 */
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