<script lang="ts" setup>
import { AppTab } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const tabs: any = ref([])

tabs.value[0] = [
  { active: true, title: 'Code' },
  { active: false, title: 'Issues' },
  { active: false, title: 'Actions' },
  { active: false, title: 'Security' },
  { active: false, title: 'Insights' },
]

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <div class="w-full lg:w-2/3">
        <AppTab
          :items="tabs[0]"
          color="blue-500"
        >
        </AppTab>
      </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>