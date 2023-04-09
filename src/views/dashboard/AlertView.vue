<script lang="ts" setup>
import { AppAlert } from '@/components/app';
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <div class="w-full lg:w-2/3">
        <AppAlert color="yellow-500">
          Warning! You session is about to end.
        </AppAlert>
      </div>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <div class="w-full lg:w-2/3">
        <AppAlert color="red-500">
          An error occured while fetching data. Try again!
        </AppAlert>
      </div>
    </div>
  </div>
</template>

<style scoped></style>