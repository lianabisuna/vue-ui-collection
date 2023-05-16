<script lang="ts" setup>
import { AppSkeleton } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])

const sizes = [
  'h-4 w-2/4 mb-1',
  'h-3 w-full',
  'h-3 w-full',
  'h-3 w-4/5',
  'h-3 w-11/12',
  'h-3 w-full',
  'h-3 w-full',
  'h-3 w-full',
  'h-3 w-4/5',
]
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppSkeleton
        :dark="components[0]"
        :sizes="sizes"
      >
      </AppSkeleton>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>