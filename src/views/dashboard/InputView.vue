<script lang="ts" setup>
import { AppFormInput } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const inputs: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="inputs[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Default"
    >
      <AppFormInput
        :dark="inputs[0]"
        placeholder="Default"
        class="xs:11/12 md:w-8/12 xl:w-5/12"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="inputs[1]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Prefix and suffix"
    >
      <div class="flex flex-col gap-3 w-full flexx items-center justify-center">
        <AppFormInput
          :dark="inputs[1]"
          class="xs:11/12 md:w-8/12 xl:w-5/12"
        >
          <template #append>
            <span class="text-gray-500">@example.com</span>
          </template>
        </AppFormInput>
        <AppFormInput
          :dark="inputs[1]"
          class="xs:11/12 md:w-8/12 xl:w-5/12"
        >
          <template #prepend>
            <span class="text-gray-500">$</span>
          </template>
        </AppFormInput>
      </div>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="inputs[2]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Disabled"
    >
      <AppFormInput
        :dark="inputs[2]"
        disabled
        placeholder="Disabled"
        class="xs:11/12 md:w-8/12 xl:w-5/12"
      >
      </AppFormInput>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>