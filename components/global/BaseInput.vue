
<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded shadow-inner focus:outline-none ring-2 ring-white/10"
    @input="$emit('update:modelValue', $event.target?.value)"
  />
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
});
</script>

<style scoped></style>
