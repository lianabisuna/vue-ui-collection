<script lang="ts" setup>
import { AppButton, AppModal } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const modals: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton color="sky-500" @click="() => modals[0] = !modals[0]">Default</AppButton>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton color="sky-500" @click="() => modals[1] = !modals[1]">Persistent</AppButton>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton color="sky-500" @click="() => modals[2] = !modals[2]">Extra Small</AppButton>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton color="sky-500" @click="() => modals[3] = !modals[3]">Large</AppButton>
    </CardComponentPreview>
  </div>

  <AppModal
    v-model="modals[0]"
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
    v-model="modals[1]"
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
        @click="() => modals[1] = false"
        size="sm"
        variant="text"
      >
        I Agree
      </AppButton>
    </div>
  </div>
  </AppModal>
  <AppModal
    v-model="modals[2]"
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
    v-model="modals[3]"
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