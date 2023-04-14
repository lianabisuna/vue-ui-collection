<script lang="ts" setup>
import { AppButton } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { EnvelopeIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton
        :dark="components[0]"
      >
        Default
      </AppButton>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton
        :dark="components[1]"
        variant="outlined"
      >
        Outlined
      </AppButton>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton
        :dark="components[2]"
        variant="text"
      >
        Text
      </AppButton>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton
        :dark="components[3]"
        disabled
      >
        Disabled
      </AppButton>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[4]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton
        :dark="components[4]"
        icon
      >
        <EnvelopeIcon class="w-5 h-5" />
      </AppButton>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[5]"
      class="aspect-[4/2] lg:aspect-square"
    >
      <AppButton :dark="components[5]">
        <EnvelopeIcon class="w-5 h-5 mr-2" />
        Prepend Icon
      </AppButton>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>