<script lang="ts" setup>
import { AppProgress } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const bars: any = ref([60,35])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <div class="w-full lg:w-2/3">
        <AppProgress
          v-model="bars[0]"
          color="lime-500"
        >
        </AppProgress>
      </div>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <div class="w-full lg:w-2/3">
        <AppProgress
          v-model="bars[1]"
          color="lime-500"
        >
          <span>{{ bars[1] }}%</span>
        </AppProgress>
      </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>