<script lang="ts" setup>
import { AppButton } from '@/components/app';
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton>Default</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton variant="outlined">Outlined</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton variant="text">Text</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton disabled>Disabled</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton icon>
        <EnvelopeIcon class="w-5 h-5" />
      </AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton>
        <EnvelopeIcon class="w-5 h-5 mr-2" />
        Prepend Icon
      </AppButton>
    </div>
  </div>
  
  <!-- <div class="flex flex-col gap-3 p-3">
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton size="xs">Extra Small</AppButton>
      <AppButton size="sm">Small</AppButton>
      <AppButton>Default</AppButton>
      <AppButton size="lg">Large</AppButton>
      <AppButton size="xl">Extra Large</AppButton>
    </div>
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton variant="outlined">Outlined</AppButton>
      <AppButton variant="text">Text</AppButton>
      <AppButton disabled>Disabled</AppButton>
    </div>
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton icon size="xs">
        <EnvelopeIcon class="w-3 h-3" />
      </AppButton>
      <AppButton icon size="sm">
        <EnvelopeIcon class="w-4 h-4" />
      </AppButton>
      <AppButton icon>
        <EnvelopeIcon class="w-5 h-5" />
      </AppButton>
      <AppButton icon size="lg">
        <EnvelopeIcon class="w-6 h-6" />
      </AppButton>
      <AppButton icon size="xl">
        <EnvelopeIcon class="h-7 w-7" />
      </AppButton>
    </div>
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton icon variant="outlined">
        <EnvelopeIcon class="w-5 h-5" />
      </AppButton>
      <AppButton icon variant="text">
        <EnvelopeIcon class="w-5 h-5" />
      </AppButton>
      <AppButton icon disabled>
        <EnvelopeIcon class="w-5 h-5" />
      </AppButton>
    </div>
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton>
        <EnvelopeIcon class="w-5 h-5 mr-2" />
        Prepend Icon
      </AppButton>
      <AppButton>
        Append Icon
        <EnvelopeIcon class="w-5 h-5 ml-2" />
      </AppButton>
    </div>
  </div> -->
</template>

<style scoped></style>