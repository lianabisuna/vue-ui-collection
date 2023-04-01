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
</style>
