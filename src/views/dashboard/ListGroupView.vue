<script lang="ts" setup>
import { AppListGroup } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const lists: any = ref([])

lists.value[0] = [
  { active: true, title: 'Melon' },
  { active: false, title: 'Apple' },
  { active: false, title: 'Banana' },
  { active: false, title: 'Avocado' },
  { active: false, title: 'Orange' },
]

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppListGroup
        :items="lists[0]"
        container-class="w-2/3"
        color="green-500"
      >
      </AppListGroup>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>