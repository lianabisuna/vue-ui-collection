<script lang="ts" setup>
import { AppButton, AppToast } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const toasts: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton @click="() => toasts[0] = true" color="fuchsia-500">Default</AppButton>
      <AppToast
        v-model="toasts[0]"
      >
        I'm also called a snackbar.
      </AppToast>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton @click="() => toasts[1] = true" color="fuchsia-500">2 seconds</AppButton>
      <AppToast
        v-model="toasts[1]"
        timeout="2000"
      >
        <div class="whitespace-nowrap">
          Message archived successfully.
          <a href="" class="ml-1.5 underline text-blue-500">Undo</a>
        </div>
      </AppToast>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>