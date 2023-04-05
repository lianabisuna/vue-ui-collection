<script lang="ts" setup>
import { AppListGroup } from '@/components/app';

interface ListGroupProp {
  active: boolean
  title: string
}

const listGroupOne: ListGroupProp[] = [
  { active: true, title: 'Melon' },
  { active: false, title: 'Apple' },
  { active: false, title: 'Banana' },
  { active: false, title: 'Avocado' },
  { active: false, title: 'Orange' },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppListGroup
        :items="listGroupOne"
        container-class="w-2/3"
        color="green-500"
      >
      </AppListGroup>
    </div>
  </div>
</template>

<style scoped></style>