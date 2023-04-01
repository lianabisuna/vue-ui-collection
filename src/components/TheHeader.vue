<script lang="ts" setup>
import { AppButton } from '@/components/app';
import type { SidebarProvider } from '@/layouts/TheLayoutDashboard.vue';
import { Bars4Icon, MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
import { inject, ref, toRef } from 'vue'
import { useDark } from '@vueuse/core';

const isDark = useDark()

const sidebar = inject<SidebarProvider>('sidebar', {
  isSidebarOpen: ref(false),
  toggleSidebar: ()=>{}
})

const isSidebarOpen = toRef(sidebar, 'isSidebarOpen')
</script>

<template>
  <header class="flex items-center h-16 justify-between border-b border-gray-300 dark:border-gray-600 px-3">
    <div class="flex items-center gap-3">
      <AppButton
        v-if="!isSidebarOpen"
        icon
        size="xs"
        variant="text"
        color="gray-800"
        class="md:hidden"
        @click="sidebar.toggleSidebar()"
      >
        <Bars4Icon class="h-5 w-5" />
      </AppButton>
      <p class="text-lg font-semibold text-gray-800 dark:text-white">{{ $route.name }}</p>
    </div>
    <div class="flex items-center gap-3">
      <AppButton size="sm" color="gray-800">Sandbox</AppButton>
      <!-- Light/Dark -->
      <label class="relative cursor-pointer">
        <input type="checkbox" v-model="isDark" class="sr-only peer">
        <div class="aspect-square p-2 bg-white active:shadow active:bg-transparent/10 hover:bg-gray-100 peer-checked:hover:bg-gray-700 rounded border border-gray-400 peer-checked:border-gray-500 peer peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
          <SunIcon v-if="isDark" class="h-5 w-5" />
          <MoonIcon v-else class="h-5 w-5" />
        </div>
      </label>
    </div>
    <!-- <div class="flex gap-3">
      <div class="h-10 w-10 rounded border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
        <DevicePhoneMobileIcon class="h-5 w-5" />
      </div>
      <div class="h-10 w-10 rounded border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
        <ComputerDesktopIcon class="h-5 w-5" />
      </div>
      <div class="h-10 w-10 rounded border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
        <DeviceTabletIcon class="h-5 w-5" />
      </div>
    </div> -->
  </header>
</template>

<style scoped></style>