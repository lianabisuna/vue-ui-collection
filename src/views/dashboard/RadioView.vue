<script lang="ts" setup>
import { AppFormRadio } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const radios: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppFormRadio disabled v-model="radios[0]" color="rose-500" label="Default"></AppFormRadio>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>