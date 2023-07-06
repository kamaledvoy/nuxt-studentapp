<script setup lang="ts">
  definePageMeta({
    layout: "other",
  });

  const isPending = ref(false);
  const signupEmail = ref("");
  const signupPassword = ref("");
  const confirmPassword = ref("");

  const handleSubmit = async () => {
    isPending.value = true;
    console.log("The user is trying to code");

    isPending.value = false;
  };
</script>
<template>
  <div
    class="p-10 glass-morphism rounded-3xl max-w-md max-h-[448px] w-full h-full"
  >
    <div class="max-w-xs mx-auto">
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-white">Sign Up</h3>
        <p class="text-sm font-normal text-white/75">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eveniet
          ipsum dignissimos.
        </p>
      </div>
      <form @submit.prevent="handleSubmit" class="my-4">
        <input
          v-model="signupEmail"
          name="signupEmail"
          type="text"
          class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded-[4px] shadow-inner focus:outline-none ring-2 ring-white/10"
          placeholder="E-mail Address"
          required
        />
        <input
          v-model="signupPassword"
          name="signupPassword"
          type="text"
          class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded-[4px] shadow-inner focus:outline-none ring-2 ring-white/10"
          placeholder="Password"
          required
        />
        <input
          v-model="confirmPassword"
          name="confirmPassword"
          type="text"
          class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded-[4px] shadow-inner focus:outline-none ring-2 ring-white/10"
          placeholder="Confirm Password"
          required
        />

        <button
          v-if="!isPending"
          :disabled="!signupEmail || !signupPassword || !confirmPassword"
          class="w-full px-6 py-2 font-semibold text-center text-white rounded-[4px] cursor-pointer glass-morphism hover:glass-morphism"
        >
          Sign Up
        </button>
        <button
          v-if="isPending"
          disabled
          class="w-full px-6 py-2 text-center text-white rounded-[4px] glass-morphism hover:glass-morphism"
        >
          Loading
        </button>
      </form>

      <div class="text-sm text-center text-white/70">
        Already signup go to
        <NuxtLink to="/auth/login" class="font-bold text-white cursor-pointer">
          Login</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
