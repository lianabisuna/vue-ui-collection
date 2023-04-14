<script lang="ts" setup>
import { AppOtp } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppOtp :length="5"></AppOtp>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[1]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppOtp disabled :length="5"></AppOtp>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[2]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppOtp :length="3"></AppOtp>
    </CardComponentPreview>
    <CardComponentPreview
      v-model:dark="components[3]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <AppOtp type="password" :length="6"></AppOtp>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>