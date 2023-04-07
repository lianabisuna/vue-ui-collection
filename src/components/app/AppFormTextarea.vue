<script lang="ts" setup>
interface Props {
  modelValue?: string,
  autofocus?: boolean,
  disabled?: boolean,
  placeholder?: string,
  name?: string,
}

defineProps<Props>()

const emits = defineEmits(['update:modelValue'])

const updateModelValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.value !== undefined) {
    emits('update:modelValue', target.value)
  }
}
</script>

<template>
  <textarea
    :value="modelValue"
    @input="updateModelValue"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :autofocus="autofocus"
    class="w-full outline-none bg-white text-gray-800 border-gray-400 focus:border-gray-800 py-2 px-3 border rounded"
    :class="[{
      'opacity-75': disabled,
    }]"
  ></textarea>
</template>

<style scoped></style>