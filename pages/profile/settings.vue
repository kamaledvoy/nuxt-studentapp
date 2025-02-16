<template>
  <div class="flex items-center justify-center h-full text-white">
    <div class="p-4 border border-gray-100 rounded-md">
      <h2 class="mb-4 text-xl font-medium">User Settings Page</h2>
      <p class="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quos
        rem doloribus placeat nobis veniam alias quasi sit voluptate? Nulla
        adipisci ullam illo officiis labore, molestiae ad magni minus harum?
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
  middleware: ["profile"],
});
</script>

<style scoped></style>
