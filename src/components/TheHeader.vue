<script lang="ts" setup>
import { AppButton } from '@/components/app/index';
import { Bars4Icon } from '@heroicons/vue/24/outline';
</script>

<template>
  <header class="flex items-center h-16 justify-between border-b border-gray-300 dark:border-gray-600 px-3">
    <div class="flex items-center gap-3">
      <AppButton icon size="xs" variant="text" color="gray-800">
        <Bars4Icon class="h- w-5" />
      </AppButton>
      <p class="text-lg font-semibold text-gray-800 dark:text-white">{{ $route.name }}</p>
    </div>
    <AppButton size="sm" color="gray-800">Sandbox</AppButton>
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