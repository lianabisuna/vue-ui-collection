<script lang="ts" setup>
import { PropType, computed } from 'vue';

const props = defineProps({
  error: { type: Boolean as PropType<boolean>, default: false },
  success: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
})

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