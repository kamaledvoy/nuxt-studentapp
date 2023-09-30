import { emit } from "process";
<template>
  <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target?.value);
      },
    }"
    class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded shadow-inner focus:outline-none ring-2 ring-white/10"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
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
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
