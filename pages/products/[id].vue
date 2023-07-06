<template>
  <div>
    <Head>
      <Title>Student Product | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <h3 class="mb-4 text-lg font-semibold">Product Details Page - {{ id }}</h3>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "custom",
  });

  const { id } = useRoute().params;
  const uri = `https://fakestoreapi.com/products/` + id;
  const {
    data: product,
    pending,
    error,
    refresh,
  } = await useFetch(uri, { key: id });

  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
      fatal: true,
    });
  }
</script>

<style scoped></style>
