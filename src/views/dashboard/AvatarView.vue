<script lang="ts" setup>
import { AppAvatar } from '@/components/app';
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppAvatar
        src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
      ></AppAvatar>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppAvatar
        src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
        rounded="none"
      ></AppAvatar>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppAvatar color="pink-500" size="lg">
        <span class="text-3xl">CK</span>
      </AppAvatar>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <div class="flex -space-x-4">
        <AppAvatar
          src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
          class="border-2 border-white"
        ></AppAvatar>
        <AppAvatar
          src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
          class="border-2 border-white"
        ></AppAvatar>
        <AppAvatar
          src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
          class="border-2 border-white"
        ></AppAvatar>
        <AppAvatar color="black">
          <span class="text-xs font-semibold">99+</span>
        </AppAvatar>
      </div>
    </div>
  </div>
</template>

<style scoped></style>