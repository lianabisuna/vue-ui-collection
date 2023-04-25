<script lang="ts" setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import { vOnClickOutside } from '@vueuse/components';
import { PropType, computed, ref } from 'vue'
import { AppChip } from '@/components/app';

/** types */
export type TailwindColor = `${string}-${number}`|'black'|'white'
export type ComponentSize = boolean|'xs'|'sm'|'md'|'lg'|'xl'|'full'

interface ItemsProp {
  text: string
  value: any
}

/** props */
const props = defineProps({
  modelValue: { type: [String,Array] as PropType<string|string[]>, default: [] }, // DONE (SINGLE)
  placeholder: { type: String as PropType<string>, default: '' }, // DONE (SINGLE)
  items: { type: Array as PropType<ItemsProp[]>, default: [] },
  multiple: { type: Boolean as PropType<boolean>, default: false },
  chip: { type: Boolean as PropType<boolean>, default: false },
  disabled: { type: Boolean as PropType<boolean>, default: false }, // DONE (SINGLE)
  // size: { type: String as PropType<ComponentSize>, default: '' },
  color: { type: String as PropType<TailwindColor>, default: 'blue-500' }, // DONE (SINGLE)
  dark: { type: Boolean as PropType<boolean>, default: false },
  // outlined: { type: Boolean as PropType<boolean>, default: false },
  emptyText: { type: String as PropType<string>, default: 'No data available' }, // DONE (SINGLE)
})

const active = ref(false)

const emits = defineEmits(['update:modelValue'])

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

const filteredModelValue = computed(() => {
  if (!props.modelValue) return ''
  if (!props.multiple) {
    var index = props.items.findIndex(e => e.value === props.modelValue);
    if (index >= 0) {
      return props.items[index].text
    }
  }
  else {
    if (Array.isArray(props.modelValue)) {
      let modelValueArr: string[] = []
      props.items.map((e) => {
        if (props.modelValue.includes(e.value)) {
          modelValueArr.push(e.text)
        }
      })
      return props.chip ? modelValueArr : modelValueArr.join(', ')
    }
  }
})
</script>

<template>
  <div
    class="relative flex flex-grow bg-white text-gray-800 border rounded outline-none w-full"
    :class="[
      { 'opacity-75 pointer-events-none': disabled },
      active ? 'border-gray-800' : 'border-gray-400'
    ]"
    v-on-click-outside="() => active = false"
    @click="() => active = !active"
  >
    <!-- Input -->
    <div class="flex-grow flex items-center">
      <!-- Chip -->
      <div v-if="chip">
        <!-- Placeholder -->
        <div
          v-if="!filteredModelValue || !filteredModelValue?.length"
          class="text-gray-400 pl-3"
        >
          {{ placeholder }}
        </div>
        <!-- Multiple -->
        <div
          v-else-if="Array.isArray(filteredModelValue)"
          class="flex flex-wrap gap-1.5 p-1.5"
        >
          <AppChip
            v-for="(item,key) in filteredModelValue"
            :key="key"
          >
            {{ item }}
          </AppChip>
        </div>
        <!-- Single -->
        <div
          v-else-if="!Array.isArray(filteredModelValue)"
          class="p-1.5"
        >
          <AppChip>
            {{ filteredModelValue }}
          </AppChip>
        </div>
      </div>
      <!-- Text -->
      <input
        v-else
        :value="filteredModelValue"
        class="outline-none py-2 pl-3 bg-transparent w-full"
        :placeholder="placeholder"
        readonly
      >
    </div>
    <!-- Arrow -->
    <div
      class="flex-shrink p-3"
      :class="[
        active ? 'text-gray-800' : 'text-gray-400'
      ]"
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
      class="bg-white rounded absolute top-full border border-gray-200 w-full shadow z-40 mt-1.5"
    >
      <ul
        v-if="items.length"
        class="max-h-[175px] overflow-y-auto"
      >
        <li
          v-for="(item,key) in items"
          :key="key"
          class="px-3 py-2.5 text-base w-full text-start cursor-pointer"
          :class="[
            isSelected(item.value) ? `bg-${color}/50 hover:bg-${color}/60` : 'bg-white hover:bg-gray-100'
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
  </div>
</template>

<style scoped></style>