<script lang="ts" setup>
import { AppStepper } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const breadcrumbs: any = ref([])

breadcrumbs.value[0] = [
  { completed: true, active: false, title: 'Card Details' },
  { completed: false, active: true, title: 'Form Review' },
  { completed: false, active: false, title: 'Authentication' },
  { completed: false, active: false, title: 'Create Code' },
]

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppStepper
        :items="breadcrumbs[0]"
        color="cyan-500"
      >
      </AppStepper>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>