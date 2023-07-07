<template>
  <div>Account Profile page</div>
  <div>User Name: {{ currentUser }}</div>
  <div>authenticated: {{ isAuthenticated }}</div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "default",
    middleware: ["profile"],
  });
</script>

<style scoped></style>
