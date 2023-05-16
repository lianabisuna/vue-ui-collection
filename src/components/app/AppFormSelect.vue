<script lang="ts" setup>
// Imports
import { type PropType, computed, ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { vOnClickOutside } from '@vueuse/components'
import { AppChip } from '@/components/app'
import AppFormContainer from './AppFormContainer.vue'
import type { TailwindColor, InputVariant, ClassBinding } from './types'

// Types
export type SelectSize = 'xs'|'sm'|'md'|'lg'|'xl'

interface ItemsProp {
  text: string
  value: any
}

// Props
const props = defineProps({
  modelValue: { type: [String,Array] as PropType<string|string[]>, default: ()=>[] },
  placeholder: { type: String as PropType<string>, default: '' },
  items: { type: Array as PropType<ItemsProp[]|string[]>, default: ()=>[] },
  multiple: { type: Boolean as PropType<boolean>, default: false },
  chip: { type: Boolean as PropType<boolean>, default: false },
  emptyText: { type: String as PropType<string>, default: 'No data available' },
  inputClass: { type: [Array,String] as PropType<ClassBinding>, default: '' },
  /** Form Container */
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' },
  error: { type: Boolean as PropType<boolean>, default: false },
  success: { type: Boolean as PropType<boolean>, default: false },
  label: { type: String as PropType<string>, default: '' },
  required: { type: Boolean as PropType<boolean>, default: false },
  message: { type: String as PropType<string>, default: '' },
  disabled: { type: Boolean as PropType<boolean>, default: false },
  dark: { type: Boolean as PropType<boolean>, default: false },
  size: { type: String as PropType<SelectSize>, default: '' },
  variant: { type: String as PropType<InputVariant>, default: '' },
  float: { type: Boolean as PropType<boolean>, default: false },
  block: { type: Boolean as PropType<boolean>, default: false },
})

// Emits
const emits = defineEmits(['update:modelValue'])


/** FILTERED ITEMS */

const filteredItems = computed<ItemsProp[]>(() => {
  let _items = [ ...props.items ] as ItemsProp[]
  return _items.map((item: ItemsProp) => {
    if (typeof item === 'string')
      return { text: item, value: item }
    else
      return item
  })
})


/** FILTER MODEL VALUE */

const filteredModelValue = computed(() => {
  if (!props.modelValue) return ''
  
  let _items = [ ...filteredItems.value ] as ItemsProp[]
  if (!props.multiple) {
    var index = _items.findIndex(e => e.value === props.modelValue);
    if (index >= 0) {
      return _items[index].text
    }
  }
  else {
    if (Array.isArray(props.modelValue)) {
      let modelValueArr: string[] = []
      _items.map((e: any) => {
        if (props.modelValue.includes(e.value)) {
          modelValueArr.push(e.text)
        }
      })
      return props.chip ? modelValueArr : modelValueArr.join(', ')
    }
  }
  return null;
})


/** UPDATE MODEL VALUE */

const updateModelValue = (value: string, index: number) => {
  if (!props.multiple) {
    emits('update:modelValue', value)
  }
  else {
    if (Array.isArray(props.modelValue)) {
      const modelValueProps = [...props.modelValue]
      if (props.modelValue.includes(value)) {
        const arrIndex = props.modelValue.findIndex((i) => {
          return i == value
        })
        modelValueProps.splice(arrIndex, 1)
        emits('update:modelValue', modelValueProps)
      }
      else {
        modelValueProps.splice(index, 0, value)
        emits('update:modelValue', modelValueProps)
      }
    }
  }
}


/** CHECK SELECTED ITEM */

const isSelected = (value: string) => {
  if (!props.multiple) {
    return props.modelValue === value
  }
  else {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.includes(value)
    }
  }
}


/** SELECTED ITEM */
const active = ref(false)
</script>

<template>
  <!-- Container -->
  <AppFormContainer
    :color="color"
    :error="error"
    :success="success"
    :label="label"
    :required="required"
    :message="message"
    :disabled="disabled"
    :dark="dark"
    :size="size"
    :variant="variant"
    :float="float"
    :block="block"
    v-on-click-outside="() => active = false"
    @click="() => active = !active"
    v-bind="$attrs"
  >
    <!-- Input -->
    <div class="flex-grow flex items-center">
      <!-- Chip -->
      <div v-if="chip">
        <input
          :value="filteredModelValue"
          class="sr-only"
        >
        <!-- Placeholder -->
        <div
          v-if="!filteredModelValue || !filteredModelValue?.length"
          class="text-gray-400"
        >
          {{ placeholder }}
        </div>
        <!-- Multiple -->
        <div
          v-else-if="Array.isArray(filteredModelValue)"
          class="flex flex-wrap gap-1.5"
        >
          <AppChip
            v-for="(item,key) in filteredModelValue"
            :key="key"
            size="xs"
          >
            {{ item }}
          </AppChip>
        </div>
        <!-- Single -->
        <div
          v-else-if="!Array.isArray(filteredModelValue)"
        >
          <AppChip size="xs">
            {{ filteredModelValue }}
          </AppChip>
        </div>
      </div>
      <!-- Text -->
      <input
        v-else
        :value="filteredModelValue"
        class="outline-none bg-transparent"
        :class="[
          inputClass,
          { 'w-full': block }
        ]"
        :placeholder="placeholder"
        readonly
      >
    </div>
    <!-- Arrow -->
    <div
      class="flex-shrink text-gray-400 pl-3"
    >
      <ChevronDownIcon
        class="h-5 w-5 transition-transform duration-200 ease-in-out self-start"
        :class="[
          { 'rotate-180': active }
        ]"
      >
      </ChevronDownIcon>
    </div>
    <!-- Dropdown -->
    <div
      v-if="active"
      class="rounded absolute left-0 top-full border w-full z-40 mt-1.5"
      :class="[
        dark ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
      ]"
    >
      <ul
        v-if="filteredItems.length"
        class="max-h-[176px]"
      >
        <li
          v-for="(item,key) in filteredItems"
          :key="key"
          class="px-3 py-2.5 text-base w-full text-start cursor-pointer border-transparent first:rounded-t last:rounded-b"
          :class="[
            isSelected(item.value)
              ? dark ? `bg-${color}/80 hover:bg-${color}/60` : `bg-${color}/40 hover:bg-${color}/60`
              : dark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'
          ]"
          @click="() => updateModelValue(item.value, key)"
        >
          {{ item.text }}
        </li>
      </ul>
      <div
        v-else
        class="px-3 py-2.5 text-base w-full text-start text-gray-400"
      >
        {{ emptyText }}
      </div>
    </div>
  </AppFormContainer>
</template>

<style scoped></style>