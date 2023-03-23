<script lang="ts" setup>
import Navigation from './TheNavigation.vue';
import { AppInputField } from '@/components/app/index';
import { MoonIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline'
import { useDark } from '@vueuse/core';

const isDark = useDark()
</script>

<template>
  <aside class="flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-700 xs:w-[320px] xs:border-r w-full shrink-0 md:static">
    <!-- Search Components -->
    <div class="relative flex h-16 shrink-0 items-center bg-gray-100 px-3">
      <AppInputField
        rounded
        block
        :dark="false"
        placeholder="Search components"
        autofocus
      >
        <template #prepend>
          <span class="text-[#9ca3af]">Q</span>
        </template>
        <template #append>
          <span class="text-xs border border-[#9ca3af] text-[#9ca3af] rounded px-2 py-0.5">ALT + F</span>
        </template>
      </AppInputField>
    </div>
    
    <!-- Component Navigation -->
    <Navigation></Navigation>

    <!-- Toggle Color Scheme -->
    <div class="h-20 flex px-3 items-center gap-3 border-b border-gray-200">
      <div class="flex h-12 w-12 rounded-md bg-profile bg-cover">
      </div>
      <div class="flex flex-1 flex-col">
        <p>Kim Sejeong</p>
        <p class="text-sm text-gray-500">Guest</p>
      </div>
      <div class="flex">
        <div class="h-10 w-10 rounded-md border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-700 flex items-center justify-center peer-checked:text-gray-100">
          <ArrowLeftOnRectangleIcon class="h-5 w-5" />
        </div>
      </div>
    </div>

    <div class="relative flex h-16 shrink-0 items-center px-3 justify-between">
      <div class="flex gap-1">
        <span class="h-4 w-4 rounded-full bg-green-500"></span>
        <span class="h-4 w-8 rounded-full bg-red-500"></span>
        <span class="h-4 w-6 rounded-full bg-blue-500"></span>
      </div>
      <label class="relative cursor-pointer">
        <input type="checkbox" v-model="isDark" class="sr-only peer">
        <div class="h-10 w-10 rounded-md border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-700 flex items-center justify-center peer-checked:text-gray-100">
          <MoonIcon class="h-5 w-5" />
        </div>
      </label>
    </div>
  </aside>
</template>

<style scoped></style>