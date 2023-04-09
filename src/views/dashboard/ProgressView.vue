<script lang="ts" setup>
import { AppProgress } from '@/components/app';
import { ref } from 'vue';

const progressOne = ref(60)
const progressTwo = ref(35)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <div class="w-full lg:w-2/3">
        <AppProgress
          v-model="progressOne"
          color="lime-500"
        >
        </AppProgress>
      </div>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <div class="w-full lg:w-2/3">
        <AppProgress
          v-model="progressTwo"
          color="lime-500"
        >
          <span>{{ progressTwo }}%</span>
        </AppProgress>
      </div>
    </div>
  </div>
</template>

<style scoped></style>