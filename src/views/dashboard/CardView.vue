<script lang="ts" setup>
import { AppCard, AppButton } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 lg:grid-cols-2">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <div class="w-full lg:w-5/6">
        <AppCard :dark="components[0]">
          <template #header>
            <div class="p-4">
              <p class="text-2xl">Every child deserves the chance to learn.</p>
            </div>
          </template>
          <template #default>
            <div class="p-4">Across the globe, 617 million children are missing basic math and reading skills. We’re a nonprofit delivering the education they need, and we need your help. You can change the course of a child’s life.</div>
          </template>
          <template #footer>
            <div class="p-4">
              <AppButton color="purple-500">Become a member</AppButton>
            </div>
          </template>
        </AppCard>
      </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>