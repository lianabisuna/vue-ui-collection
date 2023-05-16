<script lang="ts" setup>
// Imports
import { type PropType } from 'vue';

// Types
type SkeletonVariant = 'table-row'|'card'

// Props
defineProps({
  dark: { type: Boolean as PropType<boolean>, default: false },
  sizes: { type: Array as PropType<string[]>, default: ()=>['h-3 w-full'] },
  variant: { type: String as PropType<SkeletonVariant>, default: '' }, // TO DO
  hideAnimation: { type: Boolean as PropType<boolean>, default: false },
})
</script>

<template>
  <div
    class="bg-transparent h-full w-full flex flex-col gap-3"
    :class="[
      { 'animate-pulse': !hideAnimation }
    ]"
  >
    <div
      v-for="(size,key) in sizes"
      :key="key"
      class="rounded-full"
      :class="[
        size,
        dark ? 'bg-gray-600' : 'bg-gray-300'
      ]"
    >
    </div>
  </div>
</template>

<style scoped></style>