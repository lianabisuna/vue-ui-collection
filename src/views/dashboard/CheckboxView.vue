<script lang="ts" setup>
import { AppFormCheckbox } from '@/components/app';
import { ref } from 'vue';

const checkboxOne = ref(true)
const checkboxTwo = ref(true)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppFormCheckbox v-model="checkboxOne" color="yellow-500" label="Default"></AppFormCheckbox>
    </div>
  </div>
</template>

<style scoped></style>