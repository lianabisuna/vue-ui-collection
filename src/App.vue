<script lang="ts" setup>
import LayoutHandler from './layouts/TheLayoutHandler.vue';
</script>

<template>
  <LayoutHandler>
    <RouterView />
  </LayoutHandler>
</template>

<style lang="scss">
.scrollbar {
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 10px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e5e7eb;
    border-radius: 0.3rem;
    border: 2px solid #ffffff;
  }
  &::-webkit-scrollbar-track {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    background-color: #ffffff;
  }
}

[theme="dark"] {
  .scrollbar {
    &::-webkit-scrollbar-thumb {
      background-color: #374151;
      border: 2px solid #1f2937;
    }
    &::-webkit-scrollbar-track {
      background-color: #1f2937;
    }
  }
}

/** Remove arrows/spinners on input */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}
</style>
