<template>
  <div class="flex items-center gap-1 text-base w-max">
    <span
      v-for="n in starCount"
      :key="n"
      class="cursor-pointer"
      @click="$emit('update:modelValue', n);"
    >
        <span v-if=" n <= rating">&#9733;</span>
        <span v-if=" n > rating">&#9734;</span>
    </span>
  </div>
</template>

<script setup lang="ts">
const starCount = ref(5)

const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
});

const {rating, modelValue} = toRefs(props)

</script>

<style scoped></style>
