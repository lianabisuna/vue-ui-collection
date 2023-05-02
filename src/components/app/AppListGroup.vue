<script lang="ts" setup>
// Imports
import { PropType } from 'vue'
import type { TailwindColor } from './types'

// Types
interface ListGroupProp {
  active: boolean
  title: string
}

// Props
defineProps({
  items: { type: Array as PropType<ListGroupProp[]>, default: [] },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  containerClass: { type: String as PropType<string>, default: '' },
})
</script>

<template>
  <ul class="rounded border divide-y bg-white" :class="containerClass">
    <li
      v-for="(item,key) in items"
      :key="key"
      class="px-3 py-2 first:rounded-t last:rounded-b"
      :class="[
        item.active ? `bg-${color} text-white` : 'hover:bg-gray-100'
      ]"
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<style scoped></style>