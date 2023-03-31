<script lang="ts" setup>
import Navigation from './TheNavigation.vue';
import { AppLogo, AppFormInput } from '@/components/app/index';
import { MoonIcon, ArrowLeftOnRectangleIcon, MagnifyingGlassIcon, SunIcon } from '@heroicons/vue/24/outline'
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark()
const isSidebarOpen = useToggle()
</script>

<template>
  <aside v-if="isSidebarOpen" class="hidden md:flex flex-col overflow-hidden bg-white dark:bg-gray-800 xs:w-[320px] xs:border-r xs:border-gray-300 dark:xs:border-gray-600 w-full shrink-0 md:static">
    <div class="relative flex h-16 shrink-0 items-center p-3 justify-between border-b border-gray-300 dark:border-gray-600">
      <AppLogo />
      <!-- Light/Dark -->
      <label class="relative cursor-pointer">
        <input type="checkbox" v-model="isDark" class="sr-only peer">
        <div class="aspect-square px-2.5 py-2 bg-white active:shadow active:bg-transparent/10 hover:bg-gray-100 peer-checked:hover:bg-gray-700 rounded border border-gray-400 peer-checked:border-gray-500 peer peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
          <SunIcon v-if="isDark" class="h-5 w-5" />
          <MoonIcon v-else class="h-5 w-5" />
        </div>
      </label>
    </div>

    <div class="relative flex h-16 shrink-0 items-center bg-white dark:bg-gray-800 px-3">
      <!-- Search -->
      <AppFormInput
        rounded
        block
        :dark="false"
        placeholder="Search components"
        autofocus
      >
        <template #prepend>
          <MagnifyingGlassIcon class="h-5 w-5 text-[#9ca3af]" />
        </template>
      </AppFormInput>
    </div>

    <Navigation></Navigation>

    <div class="h-20 flex px-3 items-center gap-3 border-t border-gray-300 dark:border-gray-600">
      <!-- Profile -->
      <div class="flex h-12 w-12 rounded bg-gray-400"></div>
      <div class="flex flex-1 flex-col">
        <p class="text-gray-800 dark:text-gray-300">Kim Sejeong</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Guest</p>
      </div>
      <!-- Logout -->
      <div class="flex">
        <div class="aspect-square px-2.5 py-2 rounded border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
          <ArrowLeftOnRectangleIcon class="h-5 w-5" />
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>