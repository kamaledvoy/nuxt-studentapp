<template>
    <div class="space-x-2 inline-flex items-center mb-4">
      <input
        type="radio"
        v-bind="$attrs"
        :checked="modelValue === value"
        :value="value"
        class="w-4 h-4"
        @change="$emit('update:modelValue', value)"
      />
      <label v-if="label" :for="label">{{ label }}</label>
    </div>
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
    value: {
        type: [String, Number],
        required: true,
    }
  });
  const { label, modelValue, value } = toRefs(props);
  </script>

  <style scoped>
  input[type="checkbox"] {
      accent-color: #03a203;
  }
  </style>
