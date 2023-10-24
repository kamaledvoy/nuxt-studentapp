<script setup lang="ts">
import { ref, defineProps } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const { form } = defineProps(['form']);

const state = reactive({
  form: {
    email: '',
    password: '',
  },
});

const rules = {
  form: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
};

const v$ = useVuelidate(rules, state);



definePageMeta({
  layout: 'other',
  middleware: function (to, from) {
    // TODO: this is go to navigate
    console.log('to:', to);

    // TODO: this is coming from
    console.log('from:', from);
  },
});

const isPending = ref(false);

const handleSubmit = async () => {
  isPending.value = true;
  console.log('@login:');
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
        <div :class="{ error: v$.form.email.$errors.length }">
          <input
            v-model="v$.form.email.$model"
            name="loginEmail"
            type="text"
            class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded-[4px] shadow-inner focus:outline-none ring-2 ring-white/10"
            placeholder="E-mail Address"
            required
          />
          <template v-for="error of v$.form.email.$errors" :key="error.$uid">
            <div class="text-yellow-300 text-xs">{{ error.$message }}</div>
          </template>
        </div>

        <div>
          <input
            v-model="v$.form.password.$model"
            name="loginPassword"
            type="text"
            class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded-[4px] shadow-inner focus:outline-none ring-2 ring-white/10"
            placeholder="Password"
            required
          />

  <div v-if="v$.form.password.$error" class="text-yellow-300 text-xs">{{ v$.form.password.$errors[0].$message  }}</div>
        </div>

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
          :disabled="v$.form.$invalid"
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
