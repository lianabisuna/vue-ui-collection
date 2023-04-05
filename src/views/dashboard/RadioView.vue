<script lang="ts" setup>
import { AppFormRadio } from '@/components/app';
import { ref } from 'vue';

const radioOne = ref(true)
const radioTwo = ref(true)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppFormRadio disabled v-model="radioOne" color="rose-500" label="Default"></AppFormRadio>
    </div>
  </div>
</template>

<style scoped></style>