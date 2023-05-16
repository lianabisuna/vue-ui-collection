<script lang="ts" setup>
// Imports
import { type PropType } from 'vue'
import { type RouteLocationRaw } from 'vue-router'

// Types
export type TailwindColor = `${string}-${number}`|'black'|'white'

interface Component {
  name: string
  to: RouteLocationRaw
  color: TailwindColor
  items: number
}

// Props
defineProps({
  items: { type: Array as PropType<Component[]>, default: ()=>[] },
})
</script>

<template>
  <nav class="flex flex-1 flex-col overflow-hidden">
    <ul class="flex flex-col w-full px-3 gap-1.5 overflow-y-auto scrollbar pb-1.5 text-gray-600 dark:text-gray-300">
      <router-link
        v-for="(item, key) in items"
        :key="key"
        class="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center h-10"
        active-class="font-bold bg-gray-100 dark:bg-gray-600"
        :to="item.to"
        @click="$emit('select')"
      >
        <div
          class="h-2 w-2 flex justify-center items-center rounded-full mr-3 text-[8px] font-normal"
          :class="`bg-${item.color}`"
        ></div>
        {{ item.name }}
        <span
          v-if="item.items"
          class="ml-auto aspect-square w-6 font-normal bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm rounded"
        >
          {{ item.items }}
        </span>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped></style>