<script lang="ts" setup>
import { AppFormInput } from '@/components/app';
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <AppFormInput placeholder="Default" class="xs:11/12 md:w-8/12 xl:w-5/12"></AppFormInput>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <AppFormInput class="xs:11/12 md:w-8/12 xl:w-5/12">
        <template #append>
          <span class="text-gray-500">@example.com</span>
        </template>
      </AppFormInput>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-[4/1]">
      <AppFormInput disabled placeholder="Disabled" class="xs:11/12 md:w-8/12 xl:w-5/12"></AppFormInput>
    </div>
  </div>
</template>

<style scoped></style>