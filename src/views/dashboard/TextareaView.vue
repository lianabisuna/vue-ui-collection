<script lang="ts" setup>
import { AppFormTextarea } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const textareas: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <div class="w-full lg:w-2/3">
        <AppFormTextarea
          v-model="textareas[0]"
          placeholder="Default"
        >
        </AppFormTextarea>
      </div>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <div class="w-full lg:w-2/3">
        <AppFormTextarea
          v-model="textareas[1]"
          disabled
          placeholder="Disabled"
        >
        </AppFormTextarea>
      </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>