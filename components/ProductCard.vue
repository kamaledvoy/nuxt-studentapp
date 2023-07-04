<template>
  <div class="relative border border-gray-100 rounded-md group">
    <div
      class="w-full h-56 overflow-hidden bg-white rounded-md group-hover:opacity-75"
    >
      <img
        :src="product.image"
        :alt="product.category"
        class="object-contain object-center w-full h-full"
      />
    </div>
    <div class="w-full px-4">
      <h3 class="mt-4 text-base font-bold text-center text-gray-700 truncate">
        {{ product.title }}
      </h3>
      <div class="flex flex-row justify-between mb-2">
        <span class="mt-1 text-sm font-medium text-gray-500">
          Rating: {{ product.rating.rate }}
        </span>
        <span class="mt-1 text-sm font-semibold text-gray-900">
          Price : {{ product.price }}
        </span>
      </div>

      <NuxtLink
        :to="`/products/${product.id}`"
        class="block w-full px-6 py-2 mb-2 text-base font-semibold text-center text-white bg-green-500 rounded-md"
      >
        View Details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { product } = defineProps(["product"]);
</script>

<style scoped></style>
