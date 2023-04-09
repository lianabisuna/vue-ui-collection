<script lang="ts" setup>
import { AppPagination } from '@/components/app';
import { ref } from 'vue';

const currentPage1 = ref(1)
const currentPage2 = ref(1)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <AppPagination
        v-model="currentPage1"
        :length="5"
        color="violet-500"
      >
      </AppPagination>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <AppPagination
        v-model="currentPage2"
        :length="3"
        color="violet-500"
      >
        <template #previous>Previous</template>
        <template #next>Next</template>
      </AppPagination>
    </div>
  </div>
</template>

<style scoped></style>