<script lang="ts" setup>
import { AppFormInput } from '@/components/app';
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppFormInput placeholder="Default"></AppFormInput>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppFormInput>
        <template #append>
          <span class="text-gray-500">@example.com</span>
        </template>
      </AppFormInput>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppFormInput disabled placeholder="Disabled"></AppFormInput>
    </div>
  </div>
</template>

<style scoped></style>