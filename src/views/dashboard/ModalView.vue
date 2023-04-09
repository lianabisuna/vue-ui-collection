<script lang="ts" setup>
import { AppButton, AppModal } from '@/components/app'
import { ref } from 'vue';

const showModalDefault = ref(false)
const showModalPersistent = ref(false)
const showModalExtraSmall = ref(false)
const showModalLarge = ref(false)
// const showModalFullscreen = ref(false)
// const showModalTop = ref(false)
// const showModalBottomRight = ref(false)
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton color="sky-500" @click="showModalDefault = !showModalDefault">Default</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton color="sky-500" @click="showModalPersistent = !showModalPersistent">Persistent</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton color="sky-500" @click="showModalExtraSmall = !showModalExtraSmall">Extra Small</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-[4/2] lg:aspect-square">
      <AppButton color="sky-500" @click="showModalLarge = !showModalLarge">Large</AppButton>
    </div>
    <!-- <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppButton color="sky-500" @click="showModalFullscreen = !showModalFullscreen">Fullscreen</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppButton color="sky-500" @click="showModalTop = !showModalTop">Top</AppButton>
    </div>
    <div class="flex items-center justify-center p-3 bg-gray-100 border border-gray-300 aspect-square">
      <AppButton color="sky-500" @click="showModalBottomRight = !showModalBottomRight">Bottom Right</AppButton>
    </div> -->
  </div>

  <AppModal
    v-model="showModalDefault"
  >
  <div class="p-5 space-y-5">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
  </div>
  </AppModal>

  <AppModal
    v-model="showModalPersistent"
    persistent
  >
  <div class="p-5 space-y-5">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
    <div class="flex justify-end">
      <AppButton
        @click="showModalPersistent = false"
        size="sm"
        variant="text"
      >
        I Agree
      </AppButton>
    </div>
  </div>
  </AppModal>

  <AppModal
    v-model="showModalExtraSmall"
    size="xs"
  >
  <div class="p-5 space-y-5">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
  </div>
  </AppModal>

  <AppModal
    v-model="showModalLarge"
    size="lg"
  >
  <div class="p-5 space-y-5">
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </p>
    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
    </p>
  </div>
  </AppModal>
</template>

<style scoped></style>