<template>
  <div class="">
    <h3
      class="text-base font-medium underline decoration-green-400 decoration-wavy underline-offset-4"
    >
      Form components
    </h3>
    <div class="max-w-screen-sm mx-auto">
      <form
        class="px-6 py-4 border border-white/10 bg-black/5 rounded-lg"
        autocomplete="off"
      >
        <UIInput
          id="userName"
          v-model="userName"
          type="text"
          label-text="User Name"
          placeholder="User Name"
        />
        <UIInput
          id="email"
          v-model="email"
          type="email"
          label-text="Email"
          placeholder="your@example.com"
          :icon="BellIcon"
          icontype="endIcon"
        />
        <UIInput
          id="password"
          v-model="password"
          type="password"
          label-text="Password"
          placeholder="password *****"
          :icon="BellIcon"
          icontype="startIcon"
          :required="true"
        />
        <UIInput
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="confirm password"
          class="mt-4"
        />
        <UIButton
          :loading="isLoading"
          :disabled="isDisabled"
          @click="handleSubmit"
        >
          Submit
        </UIButton>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PlusCircleIcon } from '@heroicons/vue/24/solid';
import { BellIcon } from '@heroicons/vue/24/outline';

const email = ref('');
const password = ref('');
const userName = ref('');
const confirmPassword = ref('');

const isLoading = ref(false);
const isDisabled = ref(false);

const handleSubmit = (e: Event) => {
  if (e) {
    e.preventDefault();
    isLoading.value = true;
    console.log(
      email.value,
      password.value,
      userName.value,
      confirmPassword.value
    );
    setTimeout(() => {
      isLoading.value = false;
      isDisabled.value = true;
    }, 3000);
    email.value = password.value = userName.value = confirmPassword.value = '';
    e.stopPropagation();
  }
};
</script>

<style scoped></style>
