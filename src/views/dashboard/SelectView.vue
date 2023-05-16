<script lang="ts" setup>
import { AppFormSelect } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])

const options: any = ref([])
options.value[0] = [
  { text: 'Twice', value: 'twice' },
  { text: 'Blackpink', value: 'blackpink' },
  { text: 'New Jeans', value: 'new jeans' },
]
options.value[1] = [
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Watermelon', value: 'watermelon' },
  { text: 'Avocado', value: 'avocado' },
  { text: 'Melon', value: 'melon' },
]
options.value[2] = [
  { text: 'History', value: 'history' },
  { text: 'Geometry', value: 'geometry' },
  { text: 'Science', value: 'science' },
  { text: 'Physical Education', value: 'physical education' },
  { text: 'Mathematics', value: 'mathematics' },
]
options.value[3] = [
  { text: 'Lenovo', value: 'lenovo' },
  { text: 'HP', value: 'hp' },
  { text: 'Acer', value: 'acer' },
  { text: 'MSI', value: 'msi' },
  { text: 'Dell', value: 'dell' },
]
options.value[4] = []

const values: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
      title="Single"
    >
      <AppFormSelect
        :dark="components[0]"
        v-model="values[0]"
        :items="options[0]"
        placeholder="Select an option"
        color="indigo-500"
        block
      >
      </AppFormSelect>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
      title="Multiple"
    >
      <AppFormSelect
        :dark="components[1]"
        v-model="values[1]"
        :items="options[1]"
        placeholder="Select an option"
        multiple
        color="indigo-500"
        block
      >
      </AppFormSelect>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
      title="Multiple Chip"
    >
      <AppFormSelect
        :dark="components[2]"
        v-model="values[2]"
        :items="options[2]"
        placeholder="Select an option"
        color="indigo-500"
        multiple
        chip
        block
      >
      </AppFormSelect>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
      title="Single Chip"
    >
      <AppFormSelect
        :dark="components[3]"
        v-model="values[3]"
        :items="options[3]"
        placeholder="Select an option"
        color="indigo-500"
        chip
        block
      >
      </AppFormSelect>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[4]"
      class="aspect-[4/2] lg:aspect-square"
      title="Empty"
    >
      <AppFormSelect
        :dark="components[4]"
        v-model="values[4]"
        :items="options[4]"
        placeholder="Select an option"
        color="indigo-500"
        block
      >
      </AppFormSelect>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>