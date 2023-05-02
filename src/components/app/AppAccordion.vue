<script lang="ts" setup>
// Imports
import { PropType, ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

// Types
interface AccordionProp {
  heading: string
  body: string|HTMLElement
}

// Props
defineProps({
  items: { type: Array as PropType<AccordionProp[]>, default: '' },
  dark: { type: Boolean as PropType<boolean>, default: false },
})


/** CHECK ACTIVE KEY */

const activeKey = ref<number>(-1)

const isActive = (key: number) => {
  return activeKey.value === key
}


/** SET ACTIVE KEY */

const setActiveKey = (key: number) => {
  activeKey.value = isActive(key) ? -1 : key
}
</script>

<template>
  <!-- List -->
  <div
    v-for="(item,key) in items"
    :key="key"
    class="group"
  >
    <!-- Item -->
    <button
      class="flex items-center justify-between w-full font-semibold py-5 outline-none border-b"
      :class="[
        isActive(key)
          ? dark
            ? 'text-white fill-white'
            : 'text-gray-800 fill-gray-800'
          : dark
            ? 'text-gray-400 fill-gray-400 group-last:border-b-0'
            : 'text-gray-500 fill-gray-500 group-last:border-b-0',
        dark
          ? 'border-gray-500'
          : 'border-gray-300'
      ]"
      @click="setActiveKey(key)"
    >
      <!-- Title -->
      <span class="text-start">{{ item.heading }}</span>
      <!-- Arrow -->
      <ChevronDownIcon
        class="h-4 w-4 shrink-0 path-stroke-3 transition-transform duration-200 ease-in-out"
        :class="[
          { '-rotate-180': isActive(key) }
        ]"
      />
    </button>
    <!-- Body (Collapsible) -->
    <div
      v-html="item.body"
      class="overflow-hidden transition-[100%] duration-150 ease-in"
      :class="[
        isActive(key) ? 'max-h-fit py-5 border-b group-last:border-b-0' : 'max-h-0',
        dark ? 'text-gray-400 border-gray-500' : 'text-gray-400 border-gray-300'
      ]"
    >
    </div>
  </div>
</template>

<style scoped></style>