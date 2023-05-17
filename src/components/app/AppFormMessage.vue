<script lang="ts" setup>
// Imports
import { type PropType, computed } from 'vue';

// Props
const props = defineProps({
  error: { type: Boolean as PropType<boolean>, default: false },
  success: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
})


/** CLASSES */

const textClass = computed(() => {
  if (props.error) return 'text-red-500'
  else if (props.success) return 'text-green-500'
  else return props.dark ? 'text-gray-300' : 'text-gray-600'
})
</script>

<template>
  <div
    class="text-xs mt-1.5"
    :class="[
      textClass
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>