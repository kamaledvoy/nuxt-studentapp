<template>
  <div class="space-x-4">
    <input
      type="checkbox"
      v-bind="$attrs"
      :checked="modelValue"
      class="w-4 h-4"
      @change="$emit('update:modelValue', $event.target?.checked)"
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
    type: Boolean,
    default: false,
  },
});
const { label } = toRefs(props);
</script>

<style scoped>
input[type="checkbox"] {
    accent-color: #03a203;
}
</style>
