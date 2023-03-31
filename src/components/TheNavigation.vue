<script lang="ts" setup>
const components = [
  { name: 'Button', to: '/', color: 'blue-500' },
  { name: 'Dropdown', to: '/dropdown', color: 'amber-500' },
  { name: 'Form', to: '/form', color: 'pink-500' },
  { name: 'Input', to: '/input', color: 'green-500' },
  { name: 'Modal', to: '/modal', color: 'sky-500' },
  { name: 'Pagination', to: '/pagination', color: 'rose-500' },
  { name: 'Select', to: '/select', color: 'emerald-500' },
  { name: 'Table', to: '/table', color: 'fuchsia-500' },
  { name: 'Tooltip', to: '/tooltip', color: 'lime-500' },
  { name: 'Upload', to: '/upload', color: 'purple-500' },
]
</script>

<template>
  <nav class="flex flex-1">
    <ul class="flex flex-col w-full px-3 gap-1">
      <router-link
        v-for="(component, key) in components"
        :key="key"
        tag="li"
        class="px-3 py-2 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center h-10"
        active-class="font-bold bg-gray-100 dark:bg-gray-600"
        :to="component.to"
      >
        <div
          class="h-2 w-2 flex justify-center items-center rounded-full mr-3 text-[8px] font-normal"
          :class="`bg-${component.color}`"
        ></div>
        {{ component.name }}
      </router-link>
    </ul>
  </nav>
</template>

<style scoped></style>