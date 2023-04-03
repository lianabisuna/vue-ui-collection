<script lang="ts" setup>
import { AppDropdown, AppButton } from '@/components/app';
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppDropdown>
        <template #trigger>
          <AppButton color="amber-500">Default</AppButton>
        </template>
        <ul class="py-3 w-32">
          <li class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Camera</li>
          <li class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Laptop</li>
          <li class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Monitor</li>
          <li class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Printer</li>
        </ul>
      </AppDropdown>
    </div>
  </div>
</template>

<style scoped></style>