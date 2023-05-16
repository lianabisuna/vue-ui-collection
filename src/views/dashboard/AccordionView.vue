<script lang="ts" setup>
import { AppAccordion } from '@/components/app';
import { CardComponentPreview } from '@/components/cards';
import { ref } from 'vue';

const accordions: any = ref([])

accordions.value[0] = [
  {
    heading: 'B (If I Should Have a Daughter)',
    body: `
      <div class="flex flex-col gap-3">
        <p>Instead of “Mom”, she’s gonna call me “Point B.” Because that way, she knows that no matter what happens, at least she can always find her way to me. And I’m going to paint the solar system on the back of her hands so that she has to...</p>
        <p>Check out this link for the <a href="https://ohsarahkay.tumblr.com/" class="text-blue-600 hover:underline">complete version</a> of this poem.</p>
      </div>
    `
  },
  {
    heading: 'Forest Fires',
    body: `
      <div class="flex flex-col gap-3">
        <p>I arrive home from JFK in the rosy hours, to find a brand new 5-in-one egg slicer and dicer on my dining room table.</p>
        <p>This is how my father deals with grief.</p>
        <p>Three days ago, I was in the Santa Cruz redwoods tracing a mountain road in the back of a pick up truck watching clouds unravel into spider webs.</p>
      </div>
    `
  },
  {
    heading: 'Love Letter from Toothbrush to Bicycle Tire',
    body: `
      <div class="flex flex-col gap-3">
        <p>They told me that I was meant for the cleaner life, that you would drag me through the mud. They said that you would tread all over me, that they could see right through you, that you were full of hot air, that I would always be chasing, always watching you disappear after sleeker models, that it would be a vicious cycle.</p>
      </div>
    `
  },
]

const components: any = ref([])
</script>

<template>
  <div class="grid grid-cols-1 gap-3 p-3">
    <CardComponentPreview
      v-model:dark="components[0]"
      class="aspect-[4/2] lg:aspect-[4/1]"
      title="Default"
    >
      <div class="h-full w-full lg:w-2/3">
        <AppAccordion
          :dark="components[0]"
          :items="accordions[0]"
        >
        </AppAccordion>
      </div>
    </CardComponentPreview>
  </div>
</template>

<style scoped></style>