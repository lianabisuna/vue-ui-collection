<script lang="ts" setup>
import { AppTable } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const fields: any = ref([])
const items: any = ref([])

fields.value[0] = [
  { text: 'Name', key: 'name', sortable: false },
  { text: 'Code', key: 'code', sortable: false },
  { text: 'Price', key: 'price', sortable: false },
]

items.value[0] = [
  { name: 'SKRUTT', code: 'N035645235', price: 6990 },
  { name: 'LAGKAPTEN / ALEX', code: 'K26438645T8', price: 250 },
  { name: 'LINNMON ADILS', code: '0456S35734', price: 649 },
  { name: 'MALM', code: '40G66772H5', price: 780 },
  { name: 'KULLEN', code: '04B462DG52', price: 599 },
]

fields.value[1] = [
  { text: 'Name', key: 'name', sortable: false },
  { text: 'Code', key: 'code', sortable: false },
  { text: 'Price', key: 'price', sortable: false },
]

items.value[1] = [
  { name: 'BLAVINGAD', code: 'N035645235', price: 2490, inventory: 10 },
  { name: 'OMSESIDIG', code: 'K26438645T8', price: 3990, inventory: 0 },
  { name: 'TORPARO', code: '0456S35734', price: 300, inventory: 2 },
  { name: 'TUMHOLMEN', code: '40G66772H5', price: 90, inventory: 3 },
  { name: 'SOMMARFLOX', code: '04B462DG52', price: 110, inventory: 3 },
]

fields.value[2] = [
  { text: 'Name', key: 'name', sortable: true, desc: false },
  { text: 'Code', key: 'code', sortable: true, desc: false },
  { text: 'Price', key: 'price', sortable: true, desc: false },
]

items.value[2] = [
  { name: 'SOMMARLANKE', code: 'N035645235', price: 2900 },
  { name: 'FLODBJORK', code: 'K26438645T8', price: 690 },
  { name: 'RAVUNGE', code: '0456S35734', price: 690 },
  { name: 'TIGERFINK', code: '40G66772H5', price: 1100 },
  { name: 'LOBERGET / SIBBEN', code: '04B462DG52', price: 1290 },
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
        color="emerald-500"
        :fields="fields[0]"
        :items="items[0]"
        class="table-fixed"
      >
      </AppTable>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      title="Column Slot"
    >
      <AppTable
        :dark="components[1]"
        color="emerald-500"
        :fields="fields[1]"
        :items="items[1]"
        class="table-fixed"
        hide-footer
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
        color="emerald-500"
        :fields="fields[2]"
        :items="items[2]"
        class="table-fixed"
        hide-footer
      >
      </AppTable>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      title="Loading"
    >
      <AppTable
        :dark="components[3]"
        color="emerald-500"
        :fields="fields[0]"
        :items="items[0]"
        loading
        class="table-fixed"
        hide-footer
        
      >
      </AppTable>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>