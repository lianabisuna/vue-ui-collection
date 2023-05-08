<script lang="ts" setup>
import { AppTable } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const headers: any = ref([])
const items: any = ref([])

headers.value[0] = [
  { text: 'Name', key: 'name', sortable: false },
  { text: 'Code', key: 'code', sortable: false },
  { text: 'Price', key: 'price', sortable: false },
]

items.value[0] = [
  { name: 'Octagon A', code: 'A', price: '1' },
  { name: 'Octagon B', code: 'B', price: '2' },
  { name: 'Octagon C', code: 'C', price: '3' },
  { name: 'Octagon D', code: 'D', price: '4' },
]

headers.value[1] = [
  { text: 'Name', key: 'name', sortable: false },
  { text: 'Code', key: 'code', sortable: false },
  { text: 'Price', key: 'price', sortable: false },
]

items.value[1] = [
  { name: 'BoConcept A', code: 'A', price: '1', inventory: 2 },
  { name: 'BoConcept B', code: 'B', price: '2', inventory: 10 },
  { name: 'BoConcept C', code: 'C', price: '3', inventory: 3 },
  { name: 'BoConcept D', code: 'D', price: '4', inventory: 0 },
]

headers.value[2] = [
  { text: 'Name', key: 'name', sortable: true, desc: false },
  { text: 'Code', key: 'code', sortable: true, desc: false },
  { text: 'Price', key: 'price', sortable: true, desc: false },
]

items.value[2] = [
  { name: 'IKEA A', code: 'A', price: '1' },
  { name: 'IKEA B', code: 'B', price: '2' },
  { name: 'IKEA C', code: 'C', price: '3' },
  { name: 'IKEA D', code: 'D', price: '4' },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      title="Default"
    >
      <AppTable
        :dark="components[0]"
        :headers="headers[0]"
        :items="items[0]"
      >
      </AppTable>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      title="Column Slot"
    >
      <AppTable
        :dark="components[1]"
        :headers="headers[1]"
        :items="items[1]"
      >
        <template #name="{ data, item }">
          <div>
            <span class="font-bold text-emerald-500">{{ item }}</span>
            <span class="text-gray-500"> ({{ data.inventory }})</span>
          </div>
        </template>
      </AppTable>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      title="Sortable"
    >
      <AppTable
        :dark="components[2]"
        :headers="headers[2]"
        :items="items[2]"
      >
      </AppTable>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>