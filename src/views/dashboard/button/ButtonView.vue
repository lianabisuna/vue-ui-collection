<script lang="ts" setup>
import { AppButton } from '@/components/app/index';
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="flex flex-col gap-3 p-3">
    <div class="text-xl font-semibold text-center">Button</div>
    <!-- Button Size -->
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton size="xs">Extra Small</AppButton>
      <AppButton size="sm">Small</AppButton>
      <AppButton>Default</AppButton>
      <AppButton size="lg">Large</AppButton>
      <AppButton size="xl">Extra Large</AppButton>
    </div>
    <!-- Button Type -->
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton variant="outlined">Outlined</AppButton>
      <AppButton variant="text">Text</AppButton>
      <AppButton disabled>Disabled</AppButton>
    </div>
    <!-- Icon Size -->
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton icon size="xs">
        <EnvelopeIcon class="h-3 w-3" />
      </AppButton>
      <AppButton icon size="sm">
        <EnvelopeIcon class="h-4 w-4" />
      </AppButton>
      <AppButton icon>
        <EnvelopeIcon class="h-5 w-5" />
      </AppButton>
      <AppButton icon size="lg">
        <EnvelopeIcon class="h-6 w-6" />
      </AppButton>
      <AppButton icon size="xl">
        <EnvelopeIcon class="h-7 w-7" />
      </AppButton>
    </div>
    <!-- Icon Type -->
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton icon variant="outlined">
        <EnvelopeIcon class="h-5 w-5" />
      </AppButton>
      <AppButton icon variant="text">
        <EnvelopeIcon class="h-5 w-5" />
      </AppButton>
      <AppButton icon disabled>
        <EnvelopeIcon class="h-5 w-5" />
      </AppButton>
    </div>
    <!-- With Icon -->
    <div class="[&>*]:mr-3 flex items-center justify-center">
      <AppButton>
        <EnvelopeIcon class="h-5 w-5 mr-2" />
        Prepend Icon
      </AppButton>
      <AppButton>
        Append Icon
        <EnvelopeIcon class="h-5 w-5 ml-2" />
      </AppButton>
    </div>
  </div>
</template>

<style scoped></style>