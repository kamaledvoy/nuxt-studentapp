<template>


  <div class="grid-cols-4 gird">
    <div class="flex flex-col">
      <nuxt-link to="profile/settings">Settings</nuxt-link>
      <nuxt-link to="/profile/orderlist">Order List</nuxt-link>
      <NuxtLink :to="{ name: 'profile-username', params: { username: currentUser } }">
        Peofile Page
      </NuxtLink>
    </div>
    <div class="col-span-3">
        <div class="flex items-center justify-center h-full">
    <div
      class="p-4 space-y-4 text-white border border-gray-100 rounded-md bg-white/15"
    >
      <div class="text-xl font-bold text-white">Account Profile page</div>
      <div>User Name: {{ currentUser }}</div>
      <div>Authenticated: {{ isAuthenticated }}</div>
    </div>
  </div>
    </div>

  </div>
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
