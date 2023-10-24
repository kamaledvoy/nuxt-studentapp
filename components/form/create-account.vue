<template>
  <div class="grid grid-cols-2 w-full items-center mb-10">
    <form
      class="border group border-black/5 p-6 rounded-md shadow-lg bg-transparent max-w-md"
      novalidate
      @submit.prevent="loginForm"
    >
      <fieldset>
        <legend class="text-base font-bold text-gray-900 mt-4">
          User Details
        </legend>
        <BaseInput
          v-model="userData.firstName"
          type="text"
          name="userfirstname"
          label="First name"
          placeholder="First name"
          pattern="[0-9a-zA-Z ]{3,}"
          required
          error="Full name must be at least 3 characters long"
        />
        <BaseInput
          v-model="userData.lastName"
          type="text"
          name="userlastname"
          label="Last name"
          placeholder="Last name"
          pattern="[0-9a-zA-Z ]{1,}"
          required
          error="Last name must be at least 1 characters long"
        />
        <BaseInput
          v-model="userData.email"
          type="email"
          name="useremail"
          label="Email"
          pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          placeholder="email@example.com"
          required
          error="Please enter a valid email address"
        />
        <BaseInput
          v-model="userData.password"
          type="password"
          name="userpassword"
          label="Password"
          pattern="[0-9a-zA-Z]{8,}"
          placeholder="Password ****"
          required
          error="Password must be at least 8 characters"
        />
        <BaseInput
          v-model="userData.confirmPassword"
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          pattern="[0-9a-zA-Z]{8,}"
          placeholder="Password ****"
          required
          error="Password must be at least 8 characters."
        />
        <button
          type="submit"
          class="mt-2 w-full rounded bg-purple-700 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-purple-600 focus:outline-none focus:ring-1 focus:ring-blue-300 disabled:cursor-not-allowed disabled:bg-gradient-to-br disabled:from-gray-100 disabled:to-gray-300 disabled:text-gray-400"
        >
          <!-- group-invalid:bg-purple-600 group-invalid:pointer-events-none group-invalid:text-gray-100 group-invalid:bg-opacity-80 -->
          Login
        </button>
      </fieldset>
    </form>

    <pre
      class="max-w-sm text-xs font-semibold text-gray-600 border border-gray-100 px-4 py-2 w-fit"
    >
  User: {{ userData }}</pre
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email, minLength } from '@vuelidate/validators';

const userData = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
});

const loginForm = (e: Event) => {
  e.preventDefault();
  const data = userData.value;
  console.log('@formData', JSON.stringify(data));
  e.stopPropagation();
};

const validations = () => {
  return {
    form: {
      firstName: {
        required,
        min: minLength(3),
      },
      lastName: {
        required,
        min: minLength(1),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        min: minLength(8),
      },
      confirmPassword: {
        required,
        min: minLength(8),
      },
    },
  };
};
</script>

<style scoped></style>
