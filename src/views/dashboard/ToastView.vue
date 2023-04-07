<script lang="ts" setup>
import { AppButton, AppToast } from '@/components/app';
import { ref } from 'vue';

const toastOne = ref(false)
const toastTwo = ref(false)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppButton @click="() => toastOne = true" color="fuchsia-500">Default</AppButton>
      <AppToast
        v-model="toastOne"
      >
        I'm also called a snackbar.
      </AppToast>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppButton @click="() => toastTwo = true" color="fuchsia-500">2 seconds</AppButton>
      <AppToast
        v-model="toastTwo"
        timeout="2000"
      >
        <div class="whitespace-nowrap">
          Message archived successfully.
          <a href="" class="ml-1.5 underline text-blue-500">Undo</a>
        </div>
      </AppToast>
    </div>
  </div>
</template>

<style scoped></style>