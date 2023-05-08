<script lang="ts" setup>
// Imports
import { PropType } from 'vue'
import type { ClassBinding } from './types'
import { ArrowLongDownIcon, ArrowLongUpIcon } from '@heroicons/vue/24/outline'
import AppFormCheckbox from './AppFormCheckbox.vue'
import type { TailwindColor } from './types'

// Types
interface HeadersProp {
  text: string
  key: string
  sortable?: boolean
}

interface OptionsProp {
  page: number
  perPage: number
  sortBy: string
  sortDesc: boolean
}

// Props
defineProps({
  headers: { type: Array as PropType<HeadersProp[]>, default: [] },
  options: { type: Array as PropType<OptionsProp[]>, default: [] },
  items: { type: Array as PropType<Record<string, any>[]>, default: [] },
  loading: { type: Boolean as PropType<boolean>, default: false },
  perPage: { type: Number as PropType<number>, default: 10 },
  page: { type: Number as PropType<number>, default: 1 },
  sortBy: { type: Array as PropType<string[]>, default: [] },
  sortDesc: { type: Boolean as PropType<boolean>, default: false },
  showSelect: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
})

// Emits
const emits = defineEmits([
  'rowClick',
  'rowSelect',
  'toggleSelectAll',
  // External
  'updateOptions' // sort, paginate
])


/** EXTERNAL SORT */

const handleSort = (header: HeadersProp) => {
  if (!header.sortable) return
}
</script>

<template>
  <div class="relative w-full">
    <!-- Loading -->
    <div
      v-if="loading"
      class="absolute h-full w-full cursor-wait pointer-events-none"
    >
      Loading
    </div>
    <!-- Table -->
    <table
      class="w-full"
      :class="[
        dark ? 'text-gray-100' : 'text-gray-800'
      ]"
    >
      <!-- Header -->
      <thead
        :class="[
          dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
        ]"
      >
        <tr>
          <th
            v-if="false"
            scope="col"
            class="px-5 py-3"
          >
            <AppFormCheckbox
              :value="true"
            >
            </AppFormCheckbox>
          </th>
          <th
            v-for="(header,key) in headers"
            :key="key"
            scope="col"
            class="px-5 py-3"
            :class="[
              { 'cursor-pointer': header.sortable }
            ]"
            @click="() => handleSort(header)"
          >
            <div class="flex items-center">
              <span>{{ header.text }}</span>
              <!-- Sort Icon -->
              <span v-if="header.sortable" class="relative flex ml-2">
                <ArrowLongDownIcon
                  class="absolute top-1/2 left-0 -translate-y-1/2 h-3.5 w-3.5 path-stroke-2"
                  :class="[
                    true
                      ? dark ? 'text-gray-100' : 'text-gray-800'
                      : dark ? 'text-gray-500' : 'text-gray-400'
                  ]"
                />
                <ArrowLongUpIcon
                  class="absolute top-1/2 left-2.5 -translate-y-1/2 h-3.5 w-3.5 path-stroke-2"
                  :class="[
                    false
                      ? dark ? 'text-gray-100' : 'text-gray-500'
                      : dark ? 'text-gray-500' : 'text-gray-400'
                  ]"
                />
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <!-- Body -->
      <tbody>
        <tr
          v-for="(item,key) in items"
          :key="key"
          class="border-b last:border-none"
          :class="[
            dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
          ]"
        >
          <td
            v-if="false"
            scope="col"
            class="px-5 py-4"
          >
            <AppFormCheckbox
              :value="true"
            >
            </AppFormCheckbox>
          </td>
          <td
            v-for="(header,key) in headers"
            :key="key"
            class="px-5 py-4"
          >
            <slot
              :name="header.key"
              :item="item[header.key]"
              :data="item"
            >
              {{ item[header.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
      <!-- Footer -->
      <tfoot>
        <tr>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <!-- Pagination -->
  </div>
</template>

<style scoped></style>