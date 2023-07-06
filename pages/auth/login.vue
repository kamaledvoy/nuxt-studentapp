<script setup lang="ts">
  definePageMeta({
    layout: "other",
  });

  const isPending = ref(false);
  const loginEmail = ref("");
  const loginPassword = ref("");

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
        <h3 class="text-xl font-semibold text-white">Log In</h3>
        <p class="text-sm font-normal text-white/75">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eveniet
          ipsum dignissimos.
        </p>
      </div>
      <form @submit.prevent="handleSubmit" class="my-4">
        <input
          v-model="loginEmail"
          name="loginEmail"
          type="text"
          class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded-[4px] shadow-inner focus:outline-none ring-2 ring-white/10"
          placeholder="E-mail Address"
          required
        />
        <input
          v-model="loginPassword"
          name="loginPassword"
          type="text"
          class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded-[4px] shadow-inner focus:outline-none ring-2 ring-white/10"
          placeholder="Password"
          required
        />
        <div class="flex items-center justify-between mb-4">
          <div class="inline-flex items-center gap-x-2">
            <input type="checkbox" class="w-4 h-4" />
            <label class="font-normal text-white font-sm"> Remember me </label>
          </div>

          <NuxtLink
            to="/auth/signup"
            class="text-sm font-semibold text-white underline cursor-pointer underline-offset-2"
          >
            Forgot Password</NuxtLink
          >
        </div>
        <button
          v-if="!isPending"
          :disabled="!loginEmail || !loginPassword"
          class="w-full px-6 py-2 font-semibold text-center text-white rounded-[4px] cursor-pointer glass-morphism hover:glass-morphism"
        >
          Log In
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
        Don't have a account?
        <NuxtLink to="/auth/signup" class="font-bold text-white cursor-pointer">
          Sign Up</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
