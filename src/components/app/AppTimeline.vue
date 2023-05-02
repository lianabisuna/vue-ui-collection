<script lang="ts" setup>
// Imports
import { PropType } from 'vue'

// Types
interface AccordionProp {
  title: string
  body: string|HTMLElement
}

// Props
defineProps({
  items: { type: Array as PropType<AccordionProp[]>, default: '' },
  dark: { type: Boolean as PropType<boolean>, default: false },
})
</script>

<template>
  <ol
    class="flex flex-col gap-5 border-l"
    :class="[
      dark ? 'text-gray-100 border-gray-500' : 'text-gray-800 border-gray-400'
    ]"
  >
    <li
      v-for="(item,key) in items"
      :key="key"
      class="relative py-3 pl-5"
    >
      <div
        class="absolute mt-1.5 -left-1.5 h-3 w-3 rounded-full border border-white"
        :class="[
          dark ? 'bg-gray-500' : 'bg-gray-400'
        ]"
      >
      </div>
      <p
        class="mb-3 font-semibold"
        :class="[
          dark ? 'text-gray-500' : 'text-gray-400'
        ]"
      >
        {{ item.title }}
      </p>
      <div
        v-html="item.body"
      >
      </div>
    </li>
  </ol>
</template>

<style scoped></style>