<script lang="ts" setup>
import { AppChip } from '@/components/app';
import { BoltIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppChip color="rose-500">Default</AppChip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppChip color="rose-500" size="xs">Extra Small</AppChip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppChip color="rose-500" size="lg">Large</AppChip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppChip color="rose-500" closable>Closable</AppChip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppChip color="rose-500" outlined closable>Outlined</AppChip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppChip color="rose-500" rounded="full">Rounded</AppChip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppChip color="rose-500">
        <BoltIcon class="w-4 h-4 mr-1.5" />
        Prepend Icon
      </AppChip>
    </div>
  </div>
</template>

<style scoped></style>