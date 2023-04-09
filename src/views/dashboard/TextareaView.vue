<script lang="ts" setup>
import { AppFormTextarea } from '@/components/app';
import { ref } from 'vue';

const textareaOne = ref('')
const textareaTwo = ref('')
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <div class="w-full lg:w-2/3">
        <AppFormTextarea v-model="textareaOne" placeholder="Default"></AppFormTextarea>
      </div>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <div class="w-full lg:w-2/3">
        <AppFormTextarea v-model="textareaTwo" disabled placeholder="Disabled"></AppFormTextarea>
      </div>
    </div>
  </div>
</template>

<style scoped></style>