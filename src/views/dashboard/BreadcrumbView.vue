<script lang="ts" setup>
import { AppBreadcrumb } from '@/components/app';
import { ArrowLongRightIcon } from '@heroicons/vue/24/outline';
import { RouteLocationRaw } from 'vue-router';

interface BreadcrumbProp {
  active: boolean
  title: string
  to: RouteLocationRaw
}

const breadcrumbItems1: BreadcrumbProp[] = [
  { active: false, title: 'Home', to: '/' },
  { active: false, title: 'Products', to: '/' },
  { active: false, title: 'Appliances', to: '/' },
  { active: true, title: 'Refrigerators', to: '/' },
]

const breadcrumbItems2: BreadcrumbProp[] = [
  { active: false, title: 'My Account', to: '/' },
  { active: false, title: 'Billing', to: '/' },
  { active: true, title: 'Invoices', to: '/' },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/1]">
      <AppBreadcrumb :items="breadcrumbItems1" color="indigo-500"></AppBreadcrumb>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/1]">
      <AppBreadcrumb :items="breadcrumbItems2" color="indigo-500">
        <template #divider>
          <ArrowLongRightIcon class="h-5 w-5" />
        </template>
      </AppBreadcrumb>
    </div>
  </div>
</template>

<style scoped></style>