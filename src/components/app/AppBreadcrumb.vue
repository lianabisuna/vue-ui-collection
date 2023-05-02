<script lang="ts" setup>
// Imports
import { PropType } from 'vue'
import { RouteLocationRaw } from 'vue-router'
import type { TailwindColor } from './types'

// Types
interface BreadcrumbProp {
  active: boolean
  title: string
  to: RouteLocationRaw
}

// Props
defineProps({
  items: { type: Array as PropType<BreadcrumbProp[]>, default: [] },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
})
</script>

<template>
  <!-- List -->
  <ol class="inline-flex flex-wrap">
    <!-- Item -->
    <li
      v-for="(item,key) in items"
      :key="key"
      class="flex items-start"
    >
      <!-- Title -->
      <router-link
        :to="item.to"
        class="font-semibold"
        :class="[
          `hover:text-${color}`,
          item.active ? 'text-gray-600 pointer-events-none' : 'text-gray-800'
        ]"
      >
        {{ item.title }}
      </router-link>
      <!-- Divider -->
      <span v-if="key !== (items.length - 1)" class="px-3 pointer-events-none">
        <slot name="divider">/</slot>
      </span>
    </li>
  </ol>
</template>

<style scoped></style>