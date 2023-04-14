<script lang="ts" setup>
import { AppDropdown, AppButton } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppDropdown>
        <template #trigger>
          <AppButton color="red-500">Default</AppButton>
        </template>
        <ul class="py-3 w-32">
          <li class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Camera</li>
          <li class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Laptop</li>
          <li class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Monitor</li>
          <li class="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Printer</li>
        </ul>
      </AppDropdown>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>