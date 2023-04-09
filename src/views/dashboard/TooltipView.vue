<script lang="ts" setup>
import { AppButton, AppTooltip } from '@/components/app'
import { ref } from 'vue'

const tooltipOne = ref(true)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppTooltip>
        <template #trigger>
          <AppButton color="lime-500">Top</AppButton>
        </template>
        Have you seen this girl?
      </AppTooltip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppTooltip position="right">
        <template #trigger>
          <AppButton color="lime-500">Right</AppButton>
        </template>
        Have you seen this girl?
      </AppTooltip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppTooltip position="bottom">
        <template #trigger>
          <AppButton color="lime-500">Bottom</AppButton>
        </template>
        Have you seen this girl?
      </AppTooltip>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppTooltip position="left">
        <template #trigger>
          <AppButton color="lime-500">Left</AppButton>
        </template>
        Have you seen this girl?
      </AppTooltip>
    </div>
  </div>
</template>

<style scoped></style>