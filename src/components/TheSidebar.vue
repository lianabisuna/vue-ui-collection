<script lang="ts" setup>
// Imports
import Navigation from './TheNavigation.vue'
import { AppLogo, AppFormInput, AppButton } from '@/components/app'
import { computed, inject, ref, toRef } from 'vue'
import { ArrowLeftOnRectangleIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import type { SidebarProvider } from '@/layouts/TheLayoutDashboard.vue'
import { type RouteLocationRaw } from 'vue-router'
import { vOnClickOutside } from '@vueuse/components'
import { useDark } from '@vueuse/core'

// Types
export type TailwindColor = `${string}-${number}`|'black'|'white'

interface Component {
  name: string
  to: RouteLocationRaw
  color: TailwindColor
  items: number
}

// Dark Mode
const isDark = useDark();


/** TOGGLE SIDEBAR */

const sidebar = inject<SidebarProvider>('sidebar', {
  isSidebarOpen: ref(false),
  toggleSidebar: ()=>{}
})

const isSidebarOpen = toRef(sidebar, 'isSidebarOpen')


/** FILTER COMPONENTS */

const searchKeyword = ref('')
const components: Component[] = [
  { name: 'Accordion', to: '/', color: 'green-500', items: 1 },
  { name: 'Alert', to: '/alert', color: 'cyan-500', items: 2 },
  { name: 'Avatar', to: '/avatar', color: 'pink-500', items: 4 },
  { name: 'Badge', to: '/badge', color: 'teal-500', items: 4 },
  { name: 'Breadcrumb', to: '/breadcrumb', color: 'indigo-500', items: 2 },
  { name: 'Button Group', to: '/button-group', color: 'yellow-500', items: 0 },
  { name: 'Button', to: '/button', color: 'blue-500', items: 7 },
  { name: 'Card', to: '/card', color: 'purple-500', items: 1 },
  { name: 'Carousel', to: '/carousel', color: 'lime-500', items: 0 },
  { name: 'Checkbox', to: '/checkbox', color: 'yellow-500', items: 1 },
  { name: 'Chip', to: '/chip', color: 'rose-500', items: 7 },
  { name: 'Datepicker', to: '/datepicker', color: 'amber-500', items: 0 },
  { name: 'Drawer', to: '/drawer', color: 'teal-500', items: 0 },
  { name: 'Dropdown', to: '/dropdown', color: 'red-500', items: 1 },
  { name: 'File', to: '/file', color: 'amber-500', items: 7 },
  { name: 'Floating Label', to: '/floating-label', color: 'yellow-500', items: 4 },
  { name: 'Form', to: '/form', color: 'pink-500', items: 0 },
  { name: 'Input', to: '/input', color: 'fuchsia-500', items: 16 },
  { name: 'Keyboard', to: '/keyboard', color: 'indigo-500', items: 0 },
  { name: 'List Group', to: '/list-group', color: 'green-500', items: 1 },
  { name: 'Modal', to: '/modal', color: 'sky-500', items: 4 },
  { name: 'Notification', to: '/notification', color: 'purple-500', items: 6 },
  { name: 'OTP', to: '/otp', color: 'cyan-500', items: 4 },
  { name: 'Pagination', to: '/pagination', color: 'violet-500', items: 2 },
  { name: 'Popover', to: '/popover', color: 'pink-500', items: 2 },
  { name: 'Progress', to: '/progress', color: 'lime-500', items: 2 },
  { name: 'Radio', to: '/radio', color: 'rose-500', items: 1 },
  { name: 'Range', to: '/range', color: 'yellow-500', items: 0 },
  { name: 'Rating', to: '/rating', color: 'fuchsia-500', items: 2 },
  { name: 'Select', to: '/select', color: 'indigo-500', items: 5 },
  { name: 'Skeleton', to: '/skeleton', color: 'green-500', items: 1 },
  { name: 'Speed Dial', to: '/speed-dial', color: 'blue-500', items: 0 },
  { name: 'Spinner', to: '/spinner', color: 'amber-500', items: 2 },
  { name: 'Stepper', to: '/stepper', color: 'cyan-500', items: 1 },
  { name: 'Switch', to: '/switch', color: 'teal-500', items: 1 },
  { name: 'Table', to: '/table', color: 'emerald-500', items: 0 },
  { name: 'Tab', to: '/tab', color: 'blue-500', items: 1 },
  { name: 'Textarea', to: '/textarea', color: 'purple-500', items: 2 },
  { name: 'Timeline', to: '/timeline', color: 'violet-500', items: 1 },
  { name: 'Toast', to: '/toast', color: 'fuchsia-500', items: 2 },
  { name: 'Tooltip', to: '/tooltip', color: 'lime-500', items: 4 },
]

const filteredComponents = computed(() => {
  const _filteredComponents = components.filter((c) => {
    return c.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  })
  return _filteredComponents
})
</script>

<template>
  <aside
    class="h-screen flex flex-col overflow-hidden bg-white dark:bg-gray-800 xs:w-[320px] xs:border-r xs:border-gray-300 dark:xs:border-gray-600 absolute z-40 inset-y-0 left-0 w-full shrink-0 md:static"
    :class="[{
      'max-md:max-w-0': !isSidebarOpen
    }]"
    v-on-click-outside="() => sidebar.toggleSidebar(false)"
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
          :color="isDark ? 'gray-500' : 'gray-400'"
          class="md:hidden"
          @click="() => sidebar.toggleSidebar()"
        >
          <XMarkIcon
            class="h- w-5"
            :class="[ isDark ? 'text-gray-100' : 'text-gray-800' ]"
          />
        </AppButton>
      </div>
    </div>

    <div class="relative flex h-16 shrink-0 items-center bg-white dark:bg-gray-800 px-3">
      <!-- Search -->
      <AppFormInput
        v-model="searchKeyword"
        rounded
        block
        :dark="isDark"
        placeholder="Search components"
        autofocus
      >
        <template #prepend>
          <MagnifyingGlassIcon class="h-5 w-5 text-[#9ca3af]" />
        </template>
      </AppFormInput>
    </div>

    <Navigation
      :items="filteredComponents"
      @select="() => sidebar.toggleSidebar(false)"
    ></Navigation>

    <div class="h-20 flex px-3 items-center gap-3 border-t border-gray-300 dark:border-gray-600">
      <!-- Profile -->
      <div class="flex h-12 w-12 rounded bg-gray-400">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4RTHNFhkIobc7_5kOzKng4letn6hEWE6EQ&usqp=CAU"
          class="rounded"
        />
      </div>
      <div class="flex flex-1 flex-col">
        <p class="text-gray-800 dark:text-gray-300">Elli Robinson</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">Guest</p>
      </div>
      <!-- Logout -->
      <div class="flex">
        <AppButton
          icon
          size="sm"
          variant="outlined"
          :color="isDark ? 'gray-500' : 'gray-400'"
        >
          <ArrowLeftOnRectangleIcon
            class="h-5 w-5"
            :class="[ isDark ? 'text-gray-100' : 'text-gray-800' ]"
          />
        </AppButton>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>