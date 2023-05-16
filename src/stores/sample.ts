import {  defineStore } from 'pinia'
import { ref } from 'vue'

export const useSampleStore = defineStore('sample', () => {
  const isDark = ref(true)
  const toggleDark = () => {
    isDark.value = !isDark.value
  }

  return { isDark, toggleDark }
})