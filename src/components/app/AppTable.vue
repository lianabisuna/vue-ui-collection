<script lang="ts" setup>
// Imports
import { PropType, computed, ref } from 'vue'
import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/outline'
import AppFormCheckbox from './AppFormCheckbox.vue'
import AppLoading from './AppLoading.vue'
import AppSkeleton from './AppSkeleton.vue'
import AppPagination from './AppPagination.vue'
import AppFormSelect from './AppFormSelect.vue'
import AppFormInput from './AppFormInput.vue'
import type { TailwindColor, ClassBinding } from './types'

// Types
interface FieldsProp {
  text: string
  key: string
  sortable?: boolean
}

interface OptionsProp {
  page: number
  perPage: number
  sortField: string
  sortOrder: boolean
}

type SortDirection = 'asc'|'desc'|''

// Props
const props = defineProps({
  fields: { type: Array as PropType<FieldsProp[]>, default: [] },
  options: { type: Array as PropType<OptionsProp[]>, default: [] },
  items: { type: Array as PropType<Record<string, any>[]>, default: [] },
  loading: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  hideFooter: { type: Boolean as PropType<boolean>, default: false },
  // Options
  // perPage: { type: Number as PropType<number>, default: 10 },
  // page: { type: Number as PropType<number>, default: 1 },
  // sortField: { type: Array as PropType<string[]>, default: [] },
  // sortOrder: { type: Boolean as PropType<boolean>, default: false },
  // showSelect: { type: Boolean as PropType<boolean>, default: false },
})

// Emits
const emits = defineEmits([
  'rowClick',
  'rowSelect',
  'toggleSelectAll',
  // External
  'updateOptions' // sort, paginate
])


/** HANDLE SORT ON CLICK */

// Data
const sortField = ref('')
const sortOrder = ref('')

// Function
const handleSort = (field: FieldsProp) => {
  if (!field.sortable) return

  if (sortField.value === field.key) {
    // REFACTOR
    switch (sortOrder.value) {
      case 'asc':
        sortOrder.value = 'desc'
        break
      case 'desc':
        sortOrder.value = ''
        break
      default:
        sortOrder.value = 'asc'
        break
    }
  } else {
    sortField.value = field.key
    sortOrder.value = 'asc'
  }
}


/** SORT BY DIRECTION */

const sortByAsc = (a: any, b: any, key: string) => {
  if(a[key] < b[key]) return -1
  if(a[key] > b[key]) return 1
  return 0
}

const sortByDesc = (a: any, b: any, key: string) => {
  if(a[key] < b[key]) return 1
  if(a[key] > b[key]) return -1
  return 0
}


/** INTERNAL SORT */

function internalSort(_items: Record<string, any>[]) {
  if (!sortOrder.value) return _items
  
  const key = sortField.value
  return _items.sort((a,b) => {
    return sortOrder.value === 'asc'
      ? sortByAsc(a, b, key)
      : sortByDesc(a, b, key)
  })
}


/** FILTERED ITEMS */

const filteredItems = computed(() => {
  if (!sortField.value) return props.items
  
  const _items = [ ...props.items ]
  return internalSort(_items)
})


/** HANGLE PAGINATION */

const perPageOptions = ['10', '30', '50', '100']
const perPage = ref('10')


/** CLASSES */

const sortOrderClass = (field: any, order: SortDirection) => {
  if ( !(field === sortField.value && order === sortOrder.value) ) {
    return props.dark ? 'text-gray-500' : 'text-gray-400'
  } else {
    switch (order) {
      case 'asc': case 'desc':
        return `text-${props.color}`
      case '':
        return props.dark ? 'text-gray-500' : 'text-gray-400'
    } 
  }
}
</script>

<template>
  <div class="relative w-full">
    <!-- Loading -->
    <AppLoading
      v-if="loading"
      :color="color"
      class="absolute h-full w-full"
      :class="[
        dark ? 'bg-opacity-30 bg-gray-100' : 'bg-opacity-10 bg-gray-800'
      ]"
    >
    </AppLoading>
    <!-- Table -->
    <table
      class="w-full"
      :class="[
        dark ? 'text-gray-100' : 'text-gray-800'
      ]"
      v-bind="$attrs"
    >
      <!-- Header -->
      <thead
        :class="[
          dark ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700'
        ]"
      >
        <tr>
          <!-- Select All -->
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
          <!-- Header Content -->
          <th
            v-for="(field,key) in fields"
            :key="key"
            scope="col"
            class="px-5 py-3"
            :class="[
              { 'cursor-pointer': field.sortable }
            ]"
            @click="() => handleSort(field)"
          >
            <div class="flex items-center">
              <!-- Header Text -->
              <span>{{ field.text }}</span>
              <!-- Sort Icon -->
              <span
                v-if="field.sortable"
                class="relative flex ml-2"
              >
                <!-- Ascending -->
                <ArrowLongDownIcon
                  class="absolute top-1/2 left-0 -translate-y-1/2 h-3.5 w-3.5 path-stroke-2"
                  :class="[
                    sortOrderClass(field.key, 'asc')
                  ]"
                />
                <!-- Descending -->
                <ArrowLongUpIcon
                  class="absolute top-1/2 left-2.5 -translate-y-1/2 h-3.5 w-3.5 path-stroke-2"
                  :class="[
                    sortOrderClass(field.key, 'desc')
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
          v-for="(item,itemKey) in filteredItems"
          :key="itemKey"
          class="border-b last:border-none"
          :class="[
            dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
          ]"
        >
          <!-- Select Row -->
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
            v-for="(field,fieldKey) in fields"
            :key="fieldKey"
            class="px-5 py-4"
          >
            <div v-if="loading">
              <AppSkeleton
                hide-animation
                :dark="dark"
                :sizes="
                  itemKey % 2
                    ? fieldKey % 2
                      ? ['h-3 w-1/3']
                      : ['h-3 w-2/3']
                    : fieldKey % 2
                      ? ['h-3 w-2/3']
                      : ['h-3 w-1/3']
                "
              >
              </AppSkeleton>
            </div>
            <div v-else>
              <slot
                :name="field.key"
                :item="item[field.key]"
                :data="item"
              >
                {{ item[field.key] }}
              </slot>
            </div>
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
    <!-- Footer -->
    <div
      v-if="!hideFooter"
      class="mt-3 flex justify-between items-center relative"
      :class="[
        dark ? 'text-gray-100' : 'text-gray-800'
      ]"
    >
      <!-- Per Page -->
      <div class="flex items-center gap-3">
        <AppFormSelect
          v-model="perPage"
          :items="perPageOptions"
          :dark="dark"
          input-class="w-7"
        >
        </AppFormSelect>
        <span>per page</span>
      </div>
      <!-- Page Input -->
      <div class="flex items-center gap-5">
        <button>
          <ChevronLeftIcon class="h-5 w-5" />
        </button>
        <div class="flex items-center gap-3">
          <span>Page</span>
          <AppFormInput
            v-model="perPage"
            :dark="dark"
            input-class="w-7 text-center"
          >
          </AppFormInput>
          <span>of 500</span>
        </div>
        <button>
          <ChevronRightIcon class="h-5 w-5" />
        </button>
      </div>
      <!-- Pagination -->
      <AppPagination
        v-if="items.length && false"
        :color="color"
      >
      </AppPagination>
    </div>
  </div>
</template>

<style scoped></style>