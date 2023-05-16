<script lang="ts" setup>
import { AppBreadcrumb } from '@/components/app';
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const breadcrumbs: any = ref([])

breadcrumbs.value[0] = [
  { active: false, title: 'Home', to: '/' },
  { active: false, title: 'Products', to: '/' },
  { active: false, title: 'Appliances', to: '/' },
  { active: true, title: 'Refrigerators', to: '/' },
]

breadcrumbs.value[1] = [
  { active: false, title: 'Business', to: '/' },
  { active: false, title: 'Our Offer', to: '/' },
  { active: false, title: 'Restaurants & Cafes', to: '/' },
  { active: true, title: 'Inspiration Gallery', to: '/' },
]

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppBreadcrumb
        :items="breadcrumbs[0]"
        color="indigo-500"
      >
      </AppBreadcrumb>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppBreadcrumb
        :items="breadcrumbs[1]"
        color="indigo-500"
      >
        <template #divider>
          <ArrowLongRightIcon class="h-5 w-5" />
        </template>
      </AppBreadcrumb>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>