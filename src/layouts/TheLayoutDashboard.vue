<script lang="ts" setup>
import Header from '../components/TheHeader.vue';
import Navigation from '../components/TheNavigation.vue';
</script>

<template>
  <div>
    <Header />
    <main>
      <Navigation/>
      <div>
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>