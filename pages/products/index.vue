<template>
  <div class="">
    <h3 class="mb-4 text-lg font-semibold">Product Page</h3>
    <p class="mb-4 text-base font-normal">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eveniet
      ipsum ab excepturi dignissimos.
    </p>

    <div class="bg-white">
      <div
        class="max-w-2xl px-4 py-10 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
      >
        <div class="md:flex md:items-center md:justify-between">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a
            href="#"
            class="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div
          class="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-8"
        >
          <template v-for="product in products" :key="product.id">
            <ProductCard :product="product" />
          </template>
        </div>

        <div class="mt-8 text-sm md:hidden">
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "custom",
  });

  useHead({
    title: "Student App Products Page",
    meta: [{ name: "description", content: "Student App Products List Page" }],
  });

  const {
    data: products,
    pending,
    error,
    refresh,
  } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
