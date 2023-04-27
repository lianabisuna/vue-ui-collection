<script lang="ts" setup>
import { AppFormInput } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
      title="Default"
    >
      <AppFormInput
        :dark="components[0]"
        color="yellow-500"
        label="Default"
        floating-label
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
      title="Outlined"
    >
      <AppFormInput
        :dark="components[1]"
        color="yellow-500"
        variant="outlined"
        label="Outlined"
        floating-label
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
      title="Filled"
    >
      <AppFormInput
        :dark="components[2]"
        color="yellow-500"
        variant="filled"
        label="Filled"
        floating-label
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
      title="Underlined"
    >
      <AppFormInput
        :dark="components[3]"
        color="yellow-500"
        variant="underlined"
        label="Underlined"
        floating-label
      >
      </AppFormInput>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>