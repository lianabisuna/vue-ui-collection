<script lang="ts" setup>
import { PropType } from 'vue';

export type TailwindColor = `${string}-${number}`|'black'|'white'

defineProps({
  color: { type: String as PropType<TailwindColor>, default: 'black' },
})
</script>

<template>
  <div
    class="w-full rounded py-2 px-3 font-semibold"
    :class="[
      `bg-${color}/10 text-${color}/90`
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped></style>