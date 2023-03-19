<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <aside class="flex flex-col overflow-hidden w-[300px] h-screen border-r border-gray-300 dark:border-gray-600 justify-between">
    <ul>
      <li>
        <button @click="toggleDark()">Toggle Theme</button>
      </li>
    </ul>
  </aside>
</template>

<style scoped>

</style>