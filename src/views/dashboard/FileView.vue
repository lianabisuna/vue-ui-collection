<script lang="ts" setup>
import { AppFormFile } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
      title="Default"
    >
      <AppFormFile
        :dark="components[0]"
        color="amber-500"
        block
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
      title="Chip"
    >
      <AppFormFile
        :dark="components[1]"
        color="amber-500"
        chip
        block
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
      title="Multiple"
    >
      <AppFormFile
        :dark="components[2]"
        color="amber-500"
        multiple
        chip
        block
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
      title="Accept"
    >
      <AppFormFile
        :dark="components[3]"
        color="amber-500"
        placeholder="Image"
        accept="image/*"
        block
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[4]"
      class="aspect-[4/2] lg:aspect-square"
      title="Max Size"
    >
      <AppFormFile
        :dark="components[4]"
        color="amber-500"
        placeholder="3 MB"
        :max-size="3000000"
        show-size
        block
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[5]"
      class="aspect-[4/2] lg:aspect-square"
      title="Disabled"
    >
      <AppFormFile
        :dark="components[5]"
        color="amber-500"
        disabled
        block
      >
      </AppFormFile>
    </CardComponentPreview>
  </div>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1">
    <CardComponentPreview
      v-model:dark="components[6]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Dropzone"
    >
      <AppFormFile
        :dark="components[6]"
        color="amber-500"
        dropzone
        multiple
        block
      >
      </AppFormFile>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>