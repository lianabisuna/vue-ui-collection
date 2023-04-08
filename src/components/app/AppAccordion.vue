<script lang="ts" setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { PropType, ref } from 'vue'

interface AccordionProp {
  heading: string
  body: string|HTMLElement
}

defineProps({
  items: { type: Array as PropType<AccordionProp[]>, default: '' },
})

const activeKey = ref<number>(-1)

const isActive = (key: number) => { return activeKey.value === key }
const setActiveKey = (key: number) => {
  activeKey.value = isActive(key) ? -1 : key
}
</script>

<template>
  <div>
    <div
      v-for="(item,key) in items"
      :key="key"
      class="group"
    >
      <!-- Title -->
      <button
        class="flex items-center justify-between w-full font-semibold py-5 outline-none border-b border-gray-300"
        :class="[
          isActive(key) ? 'text-gray-800 fill-gray-800' : 'text-gray-500 fill-gray-500 group-last:border-b-0'
        ]"
        @click="setActiveKey(key)"
      >
        <span>{{ item.heading }}</span>
        <ChevronDownIcon
          class="h-4 w-4 shrink-0 path-stroke-3 transition-transform duration-200 ease-in-out"
          :class="[
            { '-rotate-180': isActive(key) }
          ]"
        />
      </button>
      <!-- Content -->
      <div
        v-html="item.body"
        class="text-gray-500 overflow-hidden transition-[100%] duration-150 ease-in"
        :class="[
          isActive(key) ? 'max-h-fit py-5 border-b border-gray-300 group-last:border-b-0' : 'max-h-0'
        ]"
      >
      </div>
    </div>
  </div>
</template>

<style scoped></style>