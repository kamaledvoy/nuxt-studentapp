<template>
  <div class="text-white">
    <div class="mb-4">User profile page </div>
    <h2 class="mb-6 text-white">
      profile for {{ $route.params.username }}
    </h2>
    <pre class="p-2 my-4 text-xs font-normal border border-gray-100">
    {{ $route }}
    </pre>
    <nuxt-link to="/logout" class="px-4 py-2 border-b border-r rounded-md cursor-pointer bg-white/25">Logout</nuxt-link>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "default",
    middleware: function(to,from){
      const isAuthenticated = useCookie("is-authenticated");
      const currentUser = useCookie("current-user");
      if (!isAuthenticated.value && !currentUser.value) {
        return navigateTo("/login");
      } else if (to.params.username !== currentUser.value) {
        return navigateTo("/profile/" + currentUser.value);
      }
    }
  });
</script>

<style scoped></style>
