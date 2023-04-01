<script lang="ts" setup>
import Header from '@/components/TheHeader.vue';
import Sidebar from '../components/TheSidebar.vue';

import { ref, provide, type Ref } from 'vue'

export interface SidebarProvider {
  isSidebarOpen: Ref<boolean>
  toggleSidebar: CallableFunction
}

const isSidebarOpen = ref(false)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
provide('sidebar', { isSidebarOpen, toggleSidebar })
</script>

<template>
  <div class="flex flex-col bg-white dark:bg-gray-800 relative h-screen overflow-hidden select-none">
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