<script lang="ts" setup>
import { AppBadge } from '@/components/app';
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppBadge color="teal-500">Default</AppBadge>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppBadge color="teal-500" size="xs">Extra Small</AppBadge>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppBadge color="teal-500" outlined size="sm">Outlined</AppBadge>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppBadge color="teal-500" rounded="full">Rounded</AppBadge>
    </div>
  </div>
</template>

<style scoped></style>