<template>
  <div class="mb-4 space-y-1">
    <label v-if="label" :for="label" class="text-sm font-medium capitalize">{{ label }}</label>
    <textarea
      v-bind="$attrs"
      :placeholder="label"
      :value="modelValue"
      rows="3"
      class="w-full px-4 py-2 text-white bg-transparent rounded shadow-inner focus:outline-none ring-2 ring-white/10 appearance-none"
      @input="$emit('update:modelValue', $event.target?.value)"
    ></textarea>
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
});
</script>

<style scoped></style>
