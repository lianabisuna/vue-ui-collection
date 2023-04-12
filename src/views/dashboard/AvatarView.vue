<script lang="ts" setup>
import { AppAvatar } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const avatars: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="avatars[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppAvatar
        :dark="avatars[0]"
        src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
      >
      </AppAvatar>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="avatars[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppAvatar
        :dark="avatars[1]"
        src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
        rounded="none"
      >
      </AppAvatar>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="avatars[2]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppAvatar
        :dark="avatars[2]"
        color="pink-500"
        size="lg"
      >
        <span class="text-3xl">CK</span>
      </AppAvatar>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="avatars[3]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <div class="flex -space-x-4">
        <AppAvatar
          :dark="avatars[3]"
          src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
          class="border-2 border-white"
        ></AppAvatar>
        <AppAvatar
          :dark="avatars[3]"
          src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
          class="border-2 border-white"
        ></AppAvatar>
        <AppAvatar
          :dark="avatars[3]"
          src="http://pm1.narvii.com/6928/3954e7e6f9f7282ea5f20885a25d6198ef7b6823r1-474-545v2_uhq.jpg"
          class="border-2 border-white"
        ></AppAvatar>
        <AppAvatar color="black">
          <span class="text-xs font-semibold">99+</span>
        </AppAvatar>
      </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>