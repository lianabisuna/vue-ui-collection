<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { PropType, computed } from 'vue'
import { AppButton } from '@/components/app';

/** types */
export type ModalPosition = 'center'|'top'|'right'|'bottom'|'left'|'top-left'|'top-right'|'bottom-right'|'bottom-left'
export type ModalSize = 'xs'|'sm'|'md'|'lg'|'xl'

/** props */
const props = defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
  persistent: { type: Boolean as PropType<boolean>, default: false },
  hideBackdrop: { type: Boolean as PropType<boolean>, default: false },
  backdropClass: { type: String as PropType<string>, default: '' }, // backdrop-blur-sm
  size: { type: String as PropType<ModalSize>, default: '' },
  position: { type: String as PropType<ModalPosition>, default: '' },
  closeIcon: { type: Boolean as PropType<boolean>, default: false },
  fullscreen: { type: Boolean as PropType<boolean>, default: false },
  // image - only in content
  // header, body, footer - another component
    // modal action - cancel/confirm
    // modal alert - ok
    // modal form
  // scrollable
})

const emits = defineEmits(['update:modelValue'])

const sizeClass = computed(() => {
  switch (props.size) {
    case 'xs': return 'md:w-1/4'
    case 'sm': return 'md:w-1/3'
    case 'lg': return 'md:w-3/5'
    case 'xl': return 'md:w-3/4'
    case 'md': default: return 'w-2/5'
  }
})

const updateModelValue = (value: Boolean) => {
  if (!props.persistent) emits('update:modelValue', value)
}
</script>

<template>
  <div
    v-if="modelValue"
    class="absolute top-0 left-0 z-50 flex items-center justify-center w-full min-h-screen group"
    :class="[
      { 'bg-black bg-opacity-25': !hideBackdrop },
      backdropClass
    ]"
    @click.self="updateModelValue(false)"
  >
    <div
      class="relative max-w-[95vw] max-h-[98vh] overflow-y-auto scrollbar overflow-x-hidden bg-white rounded shadow dark:bg-gray-800"
      :class="[
        { 'group-active:animate-shake': persistent },
        sizeClass
      ]"

    >
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
      <!-- Close Icon -->
      <div
        v-if="closeIcon"
        class="absolute top-3 right-2.5"
      >
        <AppButton
          icon
          variant="text"
          @click="updateModelValue(false)"
        >
          <XMarkIcon class="w-5 h-5" />
        </AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>