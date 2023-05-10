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
  fields: { type: Array as PropType<FieldsProp[]|string[]>, default: [] },
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


/** INTERNAL PAGINATE */

// Data
const pageActive = ref(1)
const itemsPerPageOptions = ['10', '30', '50', '100']
const itemsPerPage = ref('10')

const pageEnd = computed(() => {
  return Math.ceil(props.items.length / +itemsPerPage.value)
})

// Function
function internalPaginate(_items: Record<string, any>[]) {
  const startIndex = +itemsPerPage.value * (pageActive.value - 1)
  const endIndex = +itemsPerPage.value + startIndex
  return _items.slice(startIndex, endIndex)
}


/** HANDLE PAGE CHANGE */

// Data
const isStartPage = computed(()=>pageActive.value===1)
const isEndPage = computed(()=>pageActive.value===pageEnd.value)

// Function
function prevPage() {
  const isPageGreaterThanStart = pageActive.value > 1
  if (isPageGreaterThanStart) pageActive.value--
}

function nextPage() {
  const isPageLesserThanEnd = pageActive.value < filteredItems.value.length-1
  if (isPageLesserThanEnd) pageActive.value++
}


/** FILTERED ITEMS */

const filteredItems = computed(() => {
  const _items = [ ...props.items ]
  if (!sortField.value) return internalPaginate(_items)
  return internalPaginate(internalSort(_items))
})


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


/** FILTERED FIELDS */
// TO DO: Add boolean value "visible" and "fixed" key to handle responsiveness

const filteredFields = computed<FieldsProp[]>(() => {
  let _fields = [ ...props.fields ] as FieldsProp[]
  return _fields.map((field: FieldsProp, key: any) => {
    if (typeof field === 'string')
      return { text: field, key: key }
    else
      return field
  })
})

/** HANDLE ACTIVE FIELD CHANGE */

const activeFieldKey = ref(filteredFields.value[0].key)

function isActiveField(key: string) {
  return activeFieldKey.value === key
}

function prevField(key: any) {
  const isKeyMoreThanFirst = key > 0
  if (!isKeyMoreThanFirst) return

  activeFieldKey.value = filteredFields.value[key-1].key
}

function nextField(key: any) {
  const isKeyLessThanLast = key < filteredFields.value.length - 1
  if (!isKeyLessThanLast) return
  
  activeFieldKey.value = filteredFields.value[key+1].key
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
            v-for="(field,key) in filteredFields"
            :key="key"
            scope="col"
            class="px-5 py-3"
            :class="[
              { 'cursor-pointer': field.sortable },
              { 'hidden md:table-cell': !isActiveField(field.key) }
            ]"
            @click.self="() => handleSort(field)"
          >
            <div class="flex items-center gap-3">
              <!-- Previous Field -->
              <button
                v-if="isActiveField(field.key)"
                :disabled="key===0"
                class="md:hidden"
                :class="[
                  { 'opacity-50': key===0 },
                ]"
                @click.stop="() => prevField(key)"
              >
                <ChevronLeftIcon class="h-5 w-5" />
              </button>
              <!-- Header Title -->
              <div class="flex items-center">
                <!-- Field Text -->
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
              <!-- Next Field -->
              <button
                v-if="isActiveField(field.key)"
                :disabled="key===filteredFields.length-1"
                class="ml-auto md:hidden"
                :class="[
                  { 'opacity-50': key===filteredFields.length-1 },
                ]"
                @click.stop="() => nextField(key)"
              >
                <ChevronRightIcon class="h-5 w-5" />
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <!-- Body -->
      <tbody v-if="filteredItems.length">
        <tr
          v-for="(item,itemKey) in filteredItems"
          :key="itemKey"
          class="border-b last:border-none"
          :class="[
            dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300',
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
            v-for="(field,fieldKey) in filteredFields"
            :key="fieldKey"
            class="px-5 py-4"
            :class="[
              { 'hidden md:table-cell': !isActiveField(field.key) }
            ]"
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
      <!-- Body (Empty) -->
      <tr v-else>
        <td
          class="px-5 py-4 text-center"
          :colspan="filteredFields.length"
        >
          <slot name="empty">
            <div>No data available</div>
          </slot>
        </td>
      </tr>
      <!-- Footer -->
      <tfoot>
        <tr>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <!-- Footer -->
    <slot name="footer">
      <div
        v-if="!hideFooter"
        class="mt-3 flex justify-between items-center relative"
        :class="[
          dark ? 'text-gray-100' : 'text-gray-800'
        ]"
      >
        <!-- Per Page -->
        <slot name="per-page">
          <div class="flex items-center gap-3">
            <AppFormSelect
              v-model="itemsPerPage"
              :items="itemsPerPageOptions"
              input-class="w-7"
              :dark="dark"
            >
            </AppFormSelect>
            <span>per page</span>
          </div>
        </slot>
        <!-- Pagination -->
        <slot name="pagination">
          <div
            v-if="items.length > +itemsPerPage"
            class="flex items-center gap-5"
          >
            <!-- Previous -->
            <button
              :disabled="isStartPage"
              :class="[
                { 'opacity-50': isStartPage }
              ]"
              @click="prevPage"
            >
              <ChevronLeftIcon class="h-5 w-5" />
            </button>
            <!-- Current Page -->
            <div class="flex items-center gap-3">
              <div>Page</div>
              <AppFormInput
                v-model="pageActive"
                type="number"
                :dark="dark"
                input-class="w-7 text-center"
              >
              </AppFormInput>
              <div>of {{ pageEnd }}</div>
            </div>
            <!-- Next -->
            <button
              :disabled="isEndPage"
              :class="[
                { 'opacity-50': isEndPage }
              ]"
              @click="nextPage"
            >
              <ChevronRightIcon class="h-5 w-5" />
            </button>
          </div>
        </slot>
      </div>
    </slot>
  </div>
</template>

<style scoped></style>