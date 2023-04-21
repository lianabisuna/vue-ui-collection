<script lang="ts" setup>
import { PropType } from 'vue'

export type ComponentSize = 'xs'|'sm'|'lg'|'xl'
export type TailwindColor = `${string}-${number}`|'black'|'white'

interface BreadcrumbProp {
  completed: boolean
  active: boolean
  title: string
}

defineProps({
  items: { type: Array as PropType<BreadcrumbProp[]>, default: [] },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
})
</script>

<template>
  <ol class="flex flex-col md:flex-row w-full gap-3 md:gap-0">
    <li
      v-for="(item,key) in items"
      :key="key"
      class="flex flex-col text-white w-full"
    >
      <div class="flex items-center justify-center relative w-full">
        <!-- Number -->
        <div
          class="h-10 w-10 rounded-full flex items-center justify-center z-50"
          :class="[
            item.active || item.completed ? `bg-${color}` : 'bg-gray-600'
          ]"
        >
          <span v-if="item.completed" class="h-3.5 w-3.5 fill-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
            </svg>
          </span>
          <span v-else>{{ key+1 }}</span>
        </div>
        <!-- Lines -->
        <div
          v-if="key!==0"
          class="h-1.5 w-1/2 left-0 absolute top-1/2 -translate-y-1/2 z-0"
          :class="[
            (items[key-1] && (items[key-1].active || items[key-1].completed) && ((key+1)-key)==1) ? `bg-${color}` : 'bg-gray-600'
          ]"
        >
        </div>
        <div
          v-if="key!==items.length-1"
          class="h-1.5 w-1/2 right-0 absolute top-1/2 -translate-y-1/2 z-0"
          :class="[
            item.active || item.completed ? `bg-${color}` : 'bg-gray-600'
          ]"
        >
      </div>
      </div>
      <!-- Title -->
      <div class="text-center py-3">{{ item.title }}</div>
    </li>
  </ol>
</template>

<style scoped></style>