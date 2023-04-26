<script lang="ts" setup>
import { AppFormInput } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Default"
    >
      <AppFormInput
        :dark="components[0]"
        placeholder="Default"
        class="xs:11/12 md:w-8/12 xl:w-5/12"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Suffix"
    >
      <AppFormInput
        :dark="components[1]"
        class="xs:11/12 md:w-8/12 xl:w-5/12"
      >
        <template #append>
          <span class="text-gray-500">@example.com</span>
        </template>
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Disabled"
    >
      <AppFormInput
        :dark="components[2]"
        disabled
        placeholder="Disabled"
        class="xs:11/12 md:w-8/12 xl:w-5/12"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Label"
    >
      <AppFormInput
        :dark="components[3]"
        placeholder="Label"
        class="xs:11/12 md:w-8/12 xl:w-5/12"
        label="Label"
        color="fuchsia-500"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Required"
    >
      <AppFormInput
        :dark="components[3]"
        placeholder="Required"
        class="xs:11/12 md:w-8/12 xl:w-5/12"
        label="Required"
        required
        color="fuchsia-500"
      >
      </AppFormInput>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Error"
    >
      <AppFormInput
        :dark="components[3]"
        placeholder="Error"
        class="xs:11/12 md:w-8/12 xl:w-5/12"
        label="Error"
        color="fuchsia-500"
        :error="true"
        message="Invalid"
      >
      </AppFormInput>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>