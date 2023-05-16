<script lang="ts" setup>
import { AppRating } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const ratings: any = ref([3, 2])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppRating
        v-model="ratings[0]"
        color="fuchsia-500"
      >
      </AppRating>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppRating
        v-model="ratings[1]"
        color="fuchsia-500"
        size="lg"
      >
      </AppRating>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>