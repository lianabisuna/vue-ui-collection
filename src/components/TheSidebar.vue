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
  items: number
}

/** sidebar */
const sidebar = inject<SidebarProvider>('sidebar', {
  isSidebarOpen: ref(false),
  toggleSidebar: ()=>{}
})

const isSidebarOpen = toRef(sidebar, 'isSidebarOpen')

/** components */
const components: Component[] = [
  { name: 'Accordion', to: '/', color: 'green-500', items: 0 },
  { name: 'Breadcrumb', to: '/breadcrumb', color: 'indigo-500', items: 0 },
  { name: 'Button', to: '/button', color: 'blue-500', items: 5 },
  { name: 'Card', to: '/card', color: 'purple-500', items: 0 },
  { name: 'Checkbox', to: '/checkbox', color: 'yellow-500', items: 0 },
  { name: 'Chip', to: '/chip', color: 'rose-500', items: 0 },
  { name: 'Datepicker', to: '/datepicker', color: 'amber-500', items: 0 },
  { name: 'Dropdown', to: '/dropdown', color: 'red-500', items: 1 },
  { name: 'Form', to: '/form', color: 'pink-500', items: 0 },
  { name: 'Input', to: '/input', color: 'fuchsia-500', items: 3 },
  { name: 'List Group', to: '/list-group', color: 'green-500', items: 0 },
  { name: 'Modal', to: '/modal', color: 'sky-500', items: 4 },
  { name: 'Pagination', to: '/pagination', color: 'violet-500', items: 2 },
  { name: 'Progress', to: '/progress', color: 'lime-500', items: 0 },
  { name: 'Radio', to: '/radio', color: 'rose-500', items: 0 },
  { name: 'Select', to: '/select', color: 'indigo-500', items: 0 },
  { name: 'Spinner', to: '/spinner', color: 'amber-500', items: 0 },
  { name: 'Stepper', to: '/stepper', color: 'cyan-500', items: 0 },
  { name: 'Switch', to: '/switch', color: 'teal-500', items: 0 },
  { name: 'Table', to: '/table', color: 'emerald-500', items: 0 },
  { name: 'Tab', to: '/tab', color: 'blue-500', items: 0 },
  { name: 'Textarea', to: '/textarea', color: 'purple-500', items: 0 },
  { name: 'Toast', to: '/toast', color: 'fuchsia-500', items: 0 },
  { name: 'Tooltip', to: '/tooltip', color: 'lime-500', items: 0 },
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
    class="h-screen flex flex-col overflow-hidden bg-white dark:bg-gray-800 xs:w-[320px] xs:border-r xs:border-gray-300 dark:xs:border-gray-600 absolute z-10 inset-y-0 left-0 w-full shrink-0 md:static"
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