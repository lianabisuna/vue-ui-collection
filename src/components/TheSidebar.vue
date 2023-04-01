<script lang="ts" setup>
import Navigation from './TheNavigation.vue';
import { AppLogo, AppFormInput, AppButton } from '@/components/app';
import { computed, inject, ref, toRef } from 'vue'
import { ArrowLeftOnRectangleIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import type { SidebarProvider } from '@/layouts/TheLayoutDashboard.vue';
import { RouteLocationRaw } from 'vue-router';

/** types */
type TailwindColor = `${string}-${number}`

interface Component {
  name: string
  to: RouteLocationRaw
  color: TailwindColor
}

/** sidebar */
const sidebar = inject<SidebarProvider>('sidebar', {
  isSidebarOpen: ref(false),
  toggleSidebar: ()=>{}
})

const isSidebarOpen = toRef(sidebar, 'isSidebarOpen')

/** components */
const components: Component[] = [
  { name: 'Button', to: '/', color: 'blue-500' },
  { name: 'Dropdown', to: '/dropdown', color: 'amber-500' },
  { name: 'Form', to: '/form', color: 'pink-500' },
  { name: 'Input', to: '/input', color: 'green-500' },
  { name: 'Modal', to: '/modal', color: 'sky-500' },
  { name: 'Pagination', to: '/pagination', color: 'rose-500' },
  { name: 'Select', to: '/select', color: 'emerald-500' },
  { name: 'Table', to: '/table', color: 'fuchsia-500' },
  { name: 'Tooltip', to: '/tooltip', color: 'lime-500' },
  { name: 'Upload', to: '/upload', color: 'purple-500' },
]

const searchKeyword = ref('')

const filteredComponents = computed(() => {
  const _filteredComponents = components.filter((c) => {
    return c.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  })
  return _filteredComponents
})
</script>

<template>
  <aside
    class="h-full flex flex-col overflow-hidden bg-white dark:bg-gray-800 xs:w-[320px] xs:border-r xs:border-gray-300 dark:xs:border-gray-600 absolute z-10 inset-y-0 left-0 w-full shrink-0 md:static"
    :class="[{
      'max-md:max-w-0': !isSidebarOpen
    }]"
  >
    <div class="relative flex h-16 shrink-0 items-center p-3 justify-between border-b border-gray-300 dark:border-gray-600">
      <AppLogo />
      <div class="flex items-center gap-3">
        <!-- Sidebar -->
        <AppButton
          v-if="isSidebarOpen"
          icon
          size="sm"
          variant="text"
          color="gray-400"
          class="md:hidden"
          @click="sidebar.toggleSidebar()"
        >
          <XMarkIcon class="h- w-5" />
        </AppButton>
      </div>
    </div>

    <div class="relative flex h-16 shrink-0 items-center bg-white dark:bg-gray-800 px-3">
      <!-- Search -->
      <AppFormInput
        v-model="searchKeyword"
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

    <Navigation :items="filteredComponents"></Navigation>

    <div class="h-20 flex px-3 items-center gap-3 border-t border-gray-300 dark:border-gray-600">
      <!-- Profile -->
      <div class="flex h-12 w-12 rounded bg-gray-400"></div>
      <div class="flex flex-1 flex-col">
        <p class="text-gray-800 dark:text-gray-300">Kim Sejeong</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Guest</p>
      </div>
      <!-- Logout -->
      <div class="flex">
        <div class="aspect-square p-2 rounded border border-gray-400 peer peer-checked:border-none peer-checked:bg-gray-800 flex items-center justify-center peer-checked:text-gray-100">
          <ArrowLeftOnRectangleIcon class="h-5 w-5" />
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>