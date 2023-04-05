<script lang="ts" setup>
import { AppFormSwitch } from '@/components/app';
import { ref } from 'vue';

const switchOne = ref(true)
const switchTwo = ref(true)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppFormSwitch v-model="switchOne" color="teal-500" label="Default"></AppFormSwitch>
    </div>
  </div>
</template>

<style scoped></style>