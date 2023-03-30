<script lang="ts" setup>
interface Props {
  focus?: boolean,
  dark?: boolean,
  autocomplete?: boolean,
}

const props = defineProps<Props>()
</script>

<template>
  <div class="bg-gray-100 p-5">
    <div>
      <slot name="prepend"></slot>
      <input
        type="search"
      />
      <slot name="append"></slot>
    </div>
  </div>
</template>

<style scoped></style>