<script lang="ts" setup>
import { AppTimeline } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const components: any = ref([])
const textareas: any = ref([])

textareas.value[0] = [
  {
    title: 'March 2021',
    body: `
      <div class="flex flex-col gap-3">
        <p>Sarah Everard leaves a friend’s house in Clapham, south London, at around 9pm. She calls her boyfriend and is captured on CCTV several times as she heads towards her home in Brixton on foot.</p>
        <p>PC Wayne Couzens, on leave from work, pulls up his hire car on Poynders Road and falsely arrests Ms Everard at around 9.30pm. He drives her to Dover, Kent, where he transfers her into his own car at around 11.30pm. After taking her to a secluded rural area, he rapes and murders her.</p>
      </div>
    `
  },
  {
    title: 'February 2022',
    body: `
      <div class="flex flex-col gap-3">
        <p>Three police officers – PC Jonathan Cobban, PC William Neville and former constable Joel Borders – are charged for allegedly sharing grossly offensive messages with Couzens on WhatsApp. They will attend magistrates’ court on March 16.</p>
      </div>
    `
  },
]
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
    >
      <div class="w-full lg:w-2/3">
        <AppTimeline
          :dark="components[0]"
          :items="textareas[0]"
        >
        </AppTimeline>
      </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>