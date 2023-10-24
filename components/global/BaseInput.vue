<template>
  <div class="mb-4 space-y-1">
    <label
      v-if="label"
      :for="uuid"
      aria-hidden="true"
      class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium capitalize text-white"
      >{{ label }}</label
    >
    <input
      ref="inputRef"
      v-bind="$attrs"
      :id="uuid"
      :placeholder="label"
      :value="modelValue"
      class="w-full h-10 px-4 text-white bg-transparent rounded shadow-inner focus:outline-none ring-2 ring-white/10 appearance-none peer block border border-black/5 p-2.5 text-sm placeholder-gray-300 focus:border-white/50 focus:ring-white/50 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
      autoComplete="off"
      :aria-describedby="error ? `${uuid}-error` : null"
      :aria-invalid="error ? true : null"
      :aria-label="label ? label : null"
      @input="$emit('update:modelValue', $event.target?.value)"
    />
    <span
      v-if="error"
      :id="`${uuid}-error`"
      aria-live="assertive"
      class="mt-1 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block peer-invalid:visible"
    >
      {{ error }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputRef = ref<HTMLInputElement>();
defineEmits(['update:modelValue']);

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  error: {
    type: String,
    default: '',
  },
});

const { label, modelValue, placeholder, error } = toRefs(props);

const uniqueID = () => {
  let date = new Date().getTime();
  // UUID replace xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  const uuid = 'xxxx4xxxyxxx'.replace(/[xy]/g, function (c) {
    const r = (date + Math.random() * 16) % 16 | 0;
    date = Math.floor(date / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

const uuid = uniqueID();
</script>

<style scoped></style>
