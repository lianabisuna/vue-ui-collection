<script lang="ts" setup>
// import Header from '../components/TheHeader.vue';
import Navigation from '../components/TheNavigation.vue';
</script>

<template>
  <div class="flex flex-col bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 h-screen overflow-hidden select-none">
    <!-- <Header /> -->
    <main class="flex">
      <Navigation/>
      <div>
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>