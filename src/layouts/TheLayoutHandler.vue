<script lang="ts" setup>
import { ref, watch, computed, defineAsyncComponent, markRaw } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// console.log(route)
const layoutName = ref('TheLayoutDefault')
const metaLayout = computed(() => route.meta.layout as string)

watch(metaLayout, () => {
  if (metaLayout.value !== layoutName.value) {
    layoutName.value = metaLayout.value || 'TheLayoutDefault'
  }
})

const layout = computed(() => {
  const _layoutName = layoutName.value
  return defineAsyncComponent(() => import(`./${_layoutName}.vue`))
})
</script>

<template>
  <component :is="layout">
    <slot></slot>
  </component>
</template>