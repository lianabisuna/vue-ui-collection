<script lang="ts" setup>
import { PropType } from 'vue';

/** types */
export type TailwindColor = `${string}-${number}`|'black'|'white'
interface TabProp {
  active: boolean
  title: string
}

/** props */
defineProps({
  items: { type: Array as PropType<TabProp[]>, default: [] },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
})
</script>

<template>
  <div class="w-full border-b border-gray-200">
    <ul class="flex flex-wrap bg-transparent -mb-px">
      <li
        v-for="(item,key) in items"
        :key="key"
        class="py-2 px-3 font-semibold inline-flex"
        :class="[
          item.active ? `border-b-2 border-${color} text-${color}` : 'border-b text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-600'
        ]"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>