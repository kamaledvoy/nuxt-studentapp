<template>
    <div class="mb-2">
      <label
        v-if="labelText"
        :for="id"
        class="text-sm font-medium text-white/90"
      >{{ labelText }}<span v-if="required" class="text-red-600">*</span></label>
      <div class="relative">
        <div
          v-if="icon && icontype"
          class="absolute inset-y-0 flex items-center pointer-events-none"
          :class="[icontype === 'startIcon' ? 'left-0 pl-3' : 'right-0 pr-3']"
        >
          <component
            :is="icon"
            class="w-5 h-5 text-current"
            aria-hidden="true"
          />
        </div>
        <input
          :id="id"
          :value="modelValue"
          :type="type"
          class="appearance-none disabled:opacity-75 w-full h-10 text-sm font-medium bg-transparent border border-transparent rounded outline-none focus:border-white/10 placeholder:text-gray-300 autofill:bg-white ring-1 ring-white/10"
          :class="[getIconClass(), validationClass()]"
          :placeholder="placeholder"
          :required="required"
          autocomplete="off"
          @input="emitInput"
        >
      </div>

      <div v-if="errorMsg" class="text-xs font-normal leading-5 text-red-600">
        Error message here
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue'
  const props = defineProps({
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<
        'text' | 'number' | 'email' | 'password' | 'search'
      >,
      default: 'text'
    },
    labelText: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
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

  const emit = defineEmits(['update:modelValue'])

  const emitInput = (event: Event) => {
    if (event && event.target && 'value' in event.target) {
      const newValue = (event.target as HTMLInputElement).value
      emit('update:modelValue', newValue)
    }
  }

  const validationClass = () => {
    switch (props.modelValue) {
      case 'required':
        return 'required:border-red-500'
      case 'valid':
        return 'valid:border-green-500'
      case 'invalid':
        return 'invalid:border-red-500'
      default:
        return ''
    }
  }

  const getIconClass = () => {
    switch (props.icontype) {
      case 'startIcon':
        return 'pl-10 pr-4 py-2'
      case 'endIcon':
        return 'pr-10 pl-4 py-2'
      default:
        return 'px-4 py-2' // Default NoIcon
    }
  }
  </script>

  <style lang="scss" scoped>
  input:-internal-autofill-selected {
    background-color: #ffffff !important;
  }
  </style>
