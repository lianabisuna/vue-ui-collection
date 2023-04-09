<script lang="ts" setup>
import { AppTab } from '@/components/app';

export type TailwindColor = `${string}-${number}`|'black'|'white'
interface TabProp {
  active: boolean
  title: string
}

const tabOne: TabProp[] = [
  { active: true, title: 'Code' },
  { active: false, title: 'Issues' },
  { active: false, title: 'Actions' },
  { active: false, title: 'Security' },
  { active: false, title: 'Insights' },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <div class="w-full lg:w-2/3">
        <AppTab
          :items="tabOne"
          color="blue-500"
        >
        </AppTab>
      </div>
    </div>
  </div>
</template>

<style scoped></style>