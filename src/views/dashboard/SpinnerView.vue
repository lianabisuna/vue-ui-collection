<script lang="ts" setup>
import { AppSpinner } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppSpinner
        color="amber-500"
        :dark="components[0]"
      >
      </AppSpinner>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppSpinner
        color="amber-500"
        :dark="components[1]"
        size="lg"
      >
      </AppSpinner>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>