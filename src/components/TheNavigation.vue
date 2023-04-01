<script lang="ts" setup>
import { PropType } from 'vue'
import { RouteLocationRaw } from 'vue-router';

type TailwindColor = `${string}-${number}`

interface Component {
  name: string
  to: RouteLocationRaw
  color: TailwindColor
}
defineProps({
  items: { type: Array as PropType<Component[]>, default: [] }, // done
})
</script>

<template>
  <nav class="flex flex-1 flex-col hover:overflow-y-auto scrollbar text-gray-100">
    <ul class="flex flex-col w-full px-3 gap-1.5 max-h-0">
      <router-link
        v-for="(item, key) in items"
        :key="key"
        tag="li"
        class="px-3 py-2 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center h-10"
        active-class="font-bold bg-gray-100 dark:bg-gray-600"
        :to="item.to"
      >
        <div
          class="h-2 w-2 flex justify-center items-center rounded-full mr-3 text-[8px] font-normal"
          :class="`bg-${item.color}`"
        ></div>
        {{ item.name }}
      </router-link>
    </ul>
  </nav>
</template>

<style scoped></style>