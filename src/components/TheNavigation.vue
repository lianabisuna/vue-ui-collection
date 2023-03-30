<script lang="ts" setup>
const components = [
  { name: 'Button', to: '/' },
  { name: 'Form', to: '/form' },
  { name: 'Modal', to: '/modal' },
  { name: 'Pagination', to: '/pagination' },
  { name: 'Select', to: '/select' },
  { name: 'Table', to: '/table' },
  { name: 'Tooltip', to: '/tooltip' },
  { name: 'Upload', to: '/upload' },
]
</script>

<template>
  <nav class="flex flex-1">
    <ul class="flex flex-col w-full px-3 gap-1">
      <router-link
        v-for="(component, key) in components"
        :key="key"
        tag="li"
        class="px-3 py-2 text-gray-800 dark:text-gray-100 rounded-md hover:bg-gray-200 cursor-pointer flex items-center h-10"
        active-class="font-bold bg-gray-200"
        :to="component.to"
      >
        <div class="h-2 w-2 bg-purple-400 flex justify-center items-center rounded-full mr-3 text-[8px] font-normal"></div>
        {{ component.name }}
        <span class="ml-auto text-[12px] h-5 w-5 bg-gray-300 flex justify-center items-center rounded-full font-normal">2</span>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped></style>