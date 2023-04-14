<script lang="ts" setup>
import { AppPagination } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const pages: any = ref([1,1])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppPagination
        v-model="pages[0]"
        :length="5"
        color="violet-500"
      >
      </AppPagination>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppPagination
        v-model="pages[1]"
        :length="3"
        color="violet-500"
      >
        <template #previous>Previous</template>
        <template #next>Next</template>
      </AppPagination>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>