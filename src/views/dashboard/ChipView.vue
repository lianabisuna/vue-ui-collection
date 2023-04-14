<script lang="ts" setup>
import { AppChip } from '@/components/app';
import { BoltIcon } from '@heroicons/vue/24/solid'
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
      <AppChip color="rose-500">Default</AppChip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppChip color="rose-500" size="xs">Extra Small</AppChip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppChip color="rose-500" size="lg">Large</AppChip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppChip color="rose-500" closable>Closable</AppChip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[4]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppChip color="rose-500" outlined closable>Outlined</AppChip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[5]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppChip color="rose-500" rounded="full">Rounded</AppChip>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[6]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppChip color="rose-500">
        <BoltIcon class="w-4 h-4 mr-1.5" />
        Prepend Icon
      </AppChip>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>