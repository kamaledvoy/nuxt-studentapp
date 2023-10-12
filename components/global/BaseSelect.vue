<template>
  <div class="mb-4 space-y-1">
    <label v-if="label" :for="label" class="text-sm font-medium capitalize">{{
      label
    }}</label>
    <select
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target?.value);
        },
      }"
      class="w-full h-10 px-4 text-white bg-transparent rounded shadow-inner focus:outline-none ring-2 ring-white/10"
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
  options: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
