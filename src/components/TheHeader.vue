<script lang="ts" setup>
import { DevicePhoneMobileIcon, DeviceTabletIcon, ComputerDesktopIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="flex items-center h-16 justify-center border border-b border-gray-200 gap-3">
    <div class="h-10 w-10 rounded-md border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
      <DevicePhoneMobileIcon class="h-5 w-5" />
    </div>
    <div class="h-10 w-10 rounded-md border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
      <ComputerDesktopIcon class="h-5 w-5" />
    </div>
    <div class="h-10 w-10 rounded-md border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
      <DeviceTabletIcon class="h-5 w-5" />
    </div>
  </header>
</template>

<style scoped></style>