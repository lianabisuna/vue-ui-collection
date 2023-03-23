<script lang="ts" setup>
const components = [
  { active: false, to: '/', name: 'Button' },
  { active: true, to: '/', name: 'Form' },
  { active: false, to: '/', name: 'Input' },
]

// logoout
// profile
// light/dark
// toggle menu
</script>

<template>
  <nav class="flex flex-1">
    <ul class="flex flex-col w-full px-3 gap-1">
      <li
        v-for="(component, key) in components"
        :key="key"
        class="px-3 py-2 text-gray-700 dark:text-gray-100 rounded-md hover:bg-gray-200 cursor-pointer flex items-center h-10"
        :class="[{
          'font-bold bg-gray-200': component.active,
        }]"
      >
        <div class="h-2 w-2 bg-purple-400 flex justify-center items-center rounded-full mr-3 text-[8px] font-normal"></div>
        <router-link :to="component.to">{{ component.name }}</router-link>
        <span class="ml-auto text-[12px] h-5 w-5 bg-gray-300 flex justify-center items-center rounded-full font-normal">2</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>