<script lang="ts" setup>
import { AppFormFile } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-square"
      title="Default"
    >
      <AppFormFile
        :dark="components[0]"
        color="amber-500"
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-square"
      title="Multiple"
    >
      <AppFormFile
        :dark="components[1]"
        color="amber-500"
        placeholder="Attach one or more files"
        multiple
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-square"
      title="Format"
    >
      <AppFormFile
        :dark="components[2]"
        color="amber-500"
        placeholder="Only image format is accepted"
        accept="image/*"
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-square"
      title="Size"
    >
      <AppFormFile
        :dark="components[3]"
        color="amber-500"
        placeholder="Allowed size is up to 3 MB"
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[4]"
      class="aspect-[4/2] lg:aspect-square"
      title="Disabled"
    >
      <AppFormFile
        :dark="components[4]"
        color="amber-500"
        placeholder="Disabled"
        disabled
      >
      </AppFormFile>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[5]"
      class="aspect-[4/2] lg:aspect-square"
      title="Chip"
    >
      <AppFormFile
        :dark="components[5]"
        color="amber-500"
        multiple
        chip
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
      >
      </AppFormFile>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>