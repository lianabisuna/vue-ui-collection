<script lang="ts" setup>
import { computed, defineAsyncComponent } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  const _layoutName = route.meta.layout || 'TheLayoutDefault'
  return defineAsyncComponent(() => import(`./${_layoutName}.vue`))
})
</script>

<template>
  <component :is="layout">
    <slot></slot>
  </component>
</template>