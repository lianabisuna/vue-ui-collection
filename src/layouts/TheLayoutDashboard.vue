<script lang="ts" setup>
import Header from '@/components/TheHeader.vue';
import Sidebar from '../components/TheSidebar.vue';
</script>

<template>
  <div class="flex flex-col bg-gray-100 dark:bg-gray-800 relative h-screen overflow-hidden select-none">
    <main class="flex flex-1 relative max-w-screen">
      <Sidebar />
      <div class="h-full flex-1">
        <Header />
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped></style>