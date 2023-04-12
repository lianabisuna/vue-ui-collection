<script lang="ts" setup>
import { ref, watch, computed, defineAsyncComponent, markRaw } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layoutName = ref('Default')
const metaLayout = computed(() => route.meta.layout as string)

watch(metaLayout, () => {
  if (metaLayout.value !== layoutName.value) {
    layoutName.value = metaLayout.value || 'Default'
  }
})

const layout = computed(() => {
  const _layoutName = layoutName.value
  return defineAsyncComponent(() => import(`./TheLayout${_layoutName}.vue`))
})
</script>

<template>
  <component :is="layout">
    <slot></slot>
  </component>
</template>