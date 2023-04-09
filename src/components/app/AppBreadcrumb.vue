<script lang="ts" setup>
import { PropType } from 'vue'
import { RouteLocationRaw } from 'vue-router';

export type ComponentSize = 'xs'|'sm'|'lg'|'xl'
export type TailwindColor = `${string}-${number}`|'black'|'white'

interface BreadcrumbProp {
  active: boolean
  title: string
  to: RouteLocationRaw
}

defineProps({
  items: { type: Array as PropType<BreadcrumbProp[]>, default: [] },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
})
</script>

<template>
  <ol class="inline-flex flex-wrap">
    <li
      v-for="(item,key) in items"
      :key="key"
      class="flex items-start"
    >
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
      <span v-if="key !== (items.length - 1)" class="px-3 pointer-events-none">
        <slot name="divider">/</slot>
      </span>
    </li>
  </ol>
</template>

<style scoped></style>