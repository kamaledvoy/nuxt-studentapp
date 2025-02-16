<script setup lang="ts">
import LoginForm from '~/components/user/LoginForm.vue';

definePageMeta({
  layout: 'other',
  middleware: function (to, from) {
    const isAuthenticated = useCookie("is-authenticated");
    const currentUser = useCookie("current-user");

    if (isAuthenticated.value && currentUser.value) {
      console.log("is Authenticated");
      return navigateTo("/profile/" + currentUser.value);
    } else {
      console.log("not Authenticated");
    }
  },
});
</script>

<template>
  <div>
    <LoginForm page-title="User Login" />
  </div>
</template>

<style scoped></style>
