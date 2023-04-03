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

const showNotes = ref(true)
</script>

<template>
  <div class="relative flex flex-col h-screen overflow-hidden bg-white select-none dark:bg-gray-800">
    <!-- Note -->
    <div v-if="showNotes" class="relative w-screen overflow-hidden whitespace-nowrap flex text-white">
      <div class="bg-emerald-600 font-bold flex items-center px-10 uppercase">Update</div>
      <div class="bg-emerald-400 flex justify-between py-1 h-8 w-full relative px-3">
        <span>Add scroll on dashboard content. We hope you enjoy browsing, <span class="font-semibold">Ron & Leizl</span>!</span>
        <span class="inline-flex ml-auto hover:underline cursor-pointer" @click="showNotes = false">Hide</span>
      </div>
    </div>
    <!-- Content -->
    <main class="relative flex flex-1 max-w-screen">
      <Sidebar />
      <div class="h-full flex-1">
        <div class="flex flex-col h-full w-full">
          <Header />
          <div class="relative flex-1 overflow-hidden">
            <div class="absolute inset-0 h-full overflow-y-auto scrollbar">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>