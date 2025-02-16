<template>
  <div class="text-white">
    <div class="mb-4">This is user profile page </div>
    <h2 class="mb-6 text-white">
      profile for {{ $route.params.username }}
    </h2>
    <p class="my-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste impedit
      tempora rerum eveniet, consequatur commodi cumque doloremque est
      voluptates omnis numquam illum voluptate eaque aut eligendi sequi officia
      esse rem.
    </p>
    <nuxt-link to="/logout" class="px-4 py-2 border-b border-r rounded-md cursor-pointer bg-white/25">Logout</nuxt-link>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "default",
    middleware: ["profile"],
  });
</script>

<style scoped></style>
