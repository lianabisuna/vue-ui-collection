<script lang="ts" setup>
import { AppAlert } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <div class="w-full lg:w-2/3">
        <AppAlert
          :dark="components[0]"
          color="yellow-500"
        >
          Warning! You session is about to end.
        </AppAlert>
      </div>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
    <div class="w-full lg:w-2/3">
      <AppAlert
        :dark="components[1]"
        color="red-500"
      >
        An error occured while fetching data. Try again!
      </AppAlert>
    </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>