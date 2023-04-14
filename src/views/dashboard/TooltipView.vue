<script lang="ts" setup>
import { AppButton, AppTooltip } from '@/components/app'
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])

const tooltipOne = ref(true)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppTooltip>
        <template #trigger>
          <AppButton color="lime-500">Top</AppButton>
        </template>
        Have you seen this girl?
      </AppTooltip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppTooltip position="right">
        <template #trigger>
          <AppButton color="lime-500">Right</AppButton>
        </template>
        Have you seen this girl?
      </AppTooltip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppTooltip position="bottom">
        <template #trigger>
          <AppButton color="lime-500">Bottom</AppButton>
        </template>
        Have you seen this girl?
      </AppTooltip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppTooltip position="left">
        <template #trigger>
          <AppButton color="lime-500">Left</AppButton>
        </template>
        Have you seen this girl?
      </AppTooltip>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>