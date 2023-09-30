<template>
    <div
      class="group mb-2 relative h-14 w-full rounded-md border border-gray-100 focus-within:border-violet-600 focus-within:ring-1 focus-within:ring-violet-600 cursor-pointer"
    >
      <label
        v-if="labelText"
        :class="[
          inputValue
            ? 'top-3.5 text-xs text-gray-400 leading-none cursor-default'
            : 'top-1/2 text-sm w-full text-gray-700 cursor-pointer h-14 pt-5 pb-4 bg-white ring-1 ring-gray-100',
        ]"
        :for="id"
        class="absolute font-medium left-0 px-4 z-0 -translate-y-1/2 duration-200 group-focus-within:top-3.5 group-focus-within:text-xs group-focus-within:text-gray-400 rounded-md group-focus-within:bg-transparent group-focus-within:-translate-y-1/2 group-focus-within:ring-transparent group-focus-within:h-auto group-focus-within:py-0"
      >
        {{ labelText }}<span v-if="required" class="text-red-600">*</span>
      </label>
      <div
        v-if="icon && icontype"
        class="absolute inset-y-0 flex items-center pointer-events-none"
        :class="[icontype === 'startIcon' ? 'left-0 pl-3' : 'right-0 pr-3']"
      >
        <component :is="icon" class="w-5 h-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        :id="id"
        ref="input"
        type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :name="name"
        class="z-10 h-full w-full rounded-md px-4 pt-6 pb-3 placeholder:text-gray-400 focus:outline-none block text-sm font-medium appearance-none disabled:opacity-75 focus:border-violet-600 autofill:bg-white leading-6"
        :required="required"
        autocomplete="off"
        @input="emitInput"
        @focus="hasFocus = true"
        @blur="hasFocus = false"
      >
    </div>
  </template>

  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'

  const props = defineProps({
    type: {
      type: String as PropType<
        'text' | 'number' | 'email' | 'password' | 'search'
      >,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    icontype: {
      type: String as PropType<'startIcon' | 'endIcon'>,
      default: ''
    },
    icon: {
      type: [Object, String],
      default: ''
    },
    errorMsg: {
      type: [String, Number],
      default: ''
    },
    required: Boolean
  })

  const hasFocus = ref(false)
  const input = ref(null)

  const emit = defineEmits(['update:modelValue'])

  const emitInput = (event: Event) => {
    if (event && event.target && 'value' in event.target) {
      const newValue = (event.target as HTMLInputElement).value
      emit('update:modelValue', newValue)
    }
  }

  const inputValue = computed(() => {
    return props.modelValue
  })

  watchEffect(() => {
    if (input.value) {
      const modelValueNew = input.value.focus()
      console.log(modelValueNew, '@focus')
    }
  })
  </script>

  <style lang="scss" scoped></style>
