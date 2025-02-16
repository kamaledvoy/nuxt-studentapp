<script setup lang="ts">
import LoginForm from '~/components/user/LoginForm.vue';
import SignupForm from '~/components/user/SignupForm.vue';

definePageMeta({
  layout: 'other',
  middleware: function (to, from) {
    const isAuthenticated = useCookie("is-authenticated");
    const currentUser = useCookie("current-user");
    if (isAuthenticated.value && currentUser.value) {
      return navigateTo("/profile");
    } else {
      console.log("not Authenticated");
    }
  },
});
</script>

<template>
  <div class="min-h-screen">
    <template v-if="$route.query.form === 'signup'">
      <SignupForm />
    </template>
    <template v-else>
      <LoginForm page-title="User Login" />
    </template>
  </div>
</template>

<style scoped></style>
