<template>
  <div>Account Profile page</div>
  <div>User Name: {{ currentUser }}</div>
  <div>authenticated: {{ isAuthenticated }}</div>
</template>

<script setup lang="ts">
const currentUser = useCookie("current-user");
const isAuthenticated = useCookie("is-authenticated");

definePageMeta({
  layout: "default",
  middleware: ["profile"],
});
</script>

<style scoped></style>
