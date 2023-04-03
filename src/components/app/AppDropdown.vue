<script lang="ts" setup>
import { PropType, computed } from 'vue'
import from '@vueuse/com'

/** props */
const props = defineProps({
  modelValue: { type: Boolean as PropType<boolean>, default: false },
})

// const bgClass = computed(() => {
//   switch (props.modelValue) {
//     case '': return ''
//     case '': default: return ''
//   }
// })
</script>

<template>
  <div
    v-if="modelValue"
    @click.self="updateModelValue(false)"
  >
  </div>
</template>

<style scoped></style>