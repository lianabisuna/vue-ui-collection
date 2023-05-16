<script lang="ts" setup>
import { AppNotification, AppButton } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { BellIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';

const components: any = ref([])
const notifications: any = ref([])

notifications.value[0] = true
notifications.value[1] = true
notifications.value[2] = true
notifications.value[3] = true
notifications.value[4] = true
notifications.value[5] = true

const overlap: any = ref(true)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppNotification
        v-model="notifications[0]"
        color="yellow-500"
      >
        <AppButton
          icon
          color="purple-500"
        >
          <BellIcon class="h-5 w-5" />
        </AppButton>
      </AppNotification>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppNotification
        v-model="notifications[1]"
        position="top-right"
        color="yellow-500"
        size="lg"
      >
        <AppButton
          icon
          color="purple-500"
        >
          <BellIcon class="h-5 w-5" />
        </AppButton>
      </AppNotification>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppNotification
        v-model="notifications[2]"
        position="bottom-right"
        color="green-500"
        size="xs"
        class="m-1.5"
      >
        <img
          src="https://i.scdn.co/image/ab6761610000e5eba5205abffd84341e5bace828"
          class="rounded-full h-10 w-10"
        />
      </AppNotification>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppNotification
        v-model="notifications[3]"
        position="top-right"
        color="red-500"
        content="99+"
      >
        <AppButton
          color="purple-500"
        >
          Inbox
        </AppButton>
      </AppNotification>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[4]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppNotification
        v-model="notifications[4]"
        position="bottom-right"
        color="amber-500"
        content="3"
        size="lg"
        icon
        bordered
      >
        <AppButton
          color="purple-500"
          icon
        >
          <ShoppingBagIcon class="h-8 w-8" />
        </AppButton>
      </AppNotification>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[5]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppNotification
        v-model="notifications[5]"
        position="top-right"
        color="blue-500"
        icon
        class="-m-1"
      >
        <template #content>
          <svg class="h-2 w-2 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
          </svg>
        </template>
        <div class="text-lg text-white">Tammy Brynne</div>
      </AppNotification>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>