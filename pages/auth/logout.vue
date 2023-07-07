<template>
  <div>User Logout Page</div>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: [
      "logout",
      function (from, to) {
        const isAuthenticated = useCookie("is-authenticated");
        const currentUser = useCookie("current-user");

        isAuthenticated.value = "";
        currentUser.value = "";

        return navigateTo("/");
      },
    ],
  });
</script>

<style scoped></style>
