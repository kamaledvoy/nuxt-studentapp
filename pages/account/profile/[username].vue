<template>
  <div class="text-white">
    <div class="mb-4">Profile for {{ $route.params.path }}</div>
    <div class="mb-4">This is user profile page</div>
    <nuxt-link to="/auth/logout" class="px-4 py-2 my-4 border cursor-pointer"
      >Logout</nuxt-link
    >
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "default",
    middleware: ["profile"],
  });
</script>

<style scoped></style>
