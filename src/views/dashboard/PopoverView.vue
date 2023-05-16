<script lang="ts" setup>
import { AppButton, AppPopover, AppFormInput } from '@/components/app'
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/solid';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2">
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/2]"
    >
      <AppPopover position="right">
        <template #trigger>
          <AppButton color="pink-500">Create</AppButton>
        </template>
        <div
          class="w-72  py-3 px-4 rounded border"
          :class="[ components[1] ? 'bg-gray-700 text-gray-100 border-gray-400' : 'bg-white text-gray-800 border-gray-300' ]"
        >
          <p class="font-semibold text-lg mb-3">Let's start!</p>
          <p class="mb-8">First, click this button to create your own avatar. Build a fun and quirky illustrated persona for yourself—you can customize all you want with the available features inside the studio!</p>
          <div class="flex items-center justify-between">
            <span class="text-gray-400 font-semibold text-sm">1 of 2</span>
            <AppButton size="sm" color="pink-500">Next</AppButton>
          </div>
        </div>
      </AppPopover>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/2]"
    >
      <div :class="[ components[1] ? 'text-gray-100' : 'text-gray-800' ]">
        <label for="" class="flex items-center gap-1.5 mb-1.5">
          CVV
          <AppPopover>
            <template #trigger>
              <QuestionMarkCircleIcon class="h-4 w-4" />
            </template>
            <div class="py-2 px-3 rounded bg-gray-500 text-gray-100 whitespace-nowrap">CVV or CVC is normally on the back of your card.</div>
          </AppPopover>
        </label>
        <AppFormInput :dark="components[1]"></AppFormInput>
      </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>