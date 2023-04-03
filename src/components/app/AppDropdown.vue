<script lang="ts" setup>
import { PropType, ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

/** props */
// defineProps({
//   items: { type: Array as PropType<Array>, default: [] },
// })

const active = ref(false)

// const bgClass = computed(() => {
//   switch (props.modelValue) {
//     case '': return ''
//     case '': default: return ''
//   }
// })
</script>

<template>
  <div
    class="relative"
    v-on-click-outside="() => active = false"
  >
    <div @click="active = !active">
      <slot name="trigger"></slot>
    </div>
    <div
      v-if="active"
      class="absolute top-full bg-white rounded shadow z-10 max-h-80 mt-2"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>