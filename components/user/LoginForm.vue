<script setup lang="ts">
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const props = defineProps({
  pageTitle: {
    type: String,
    default: "",
  },
});
const { pageTitle } = toRefs(props);

const usertState = reactive({
  form: {
    email: "",
    password: "",
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

const v$ = useVuelidate(rules, usertState);
const isPending = ref(false);
const isAuthenticated = useCookie("is-authenticated");
const currentUser = useCookie("current-user");
const router = useRouter();

const loginUser = async () => {
  isPending.value = true;
  console.log("@login:", usertState.form);
  try {
    const response = await $fetch("/api/login", {
      method: "POST",
      body: {
        email: usertState.form.email,
        password: usertState.form.password,
      },
    });
    // Process the API response here
    console.log("API response:", response);
    isAuthenticated.value = "true";
    currentUser.value = usertState.form.email;
    // router.push("/profile/" + usertState.form.email);
    router.push("/profile");
  } catch (error) {
    console.error("Error logging in:", error);
  } finally {
    isPending.value = false;
  }
};
</script>

<template>
  <div
    class="p-10 glass-morphism rounded-3xl max-w-md max-h-[448px] w-full h-full"
  >
    <div class="max-w-xs mx-auto">
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-white">{{ pageTitle }}</h3>
        <p class="text-sm font-normal text-white/75">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eveniet
          ipsum dignissimos.
        </p>
      </div>
      <form @submit.prevent class="my-4">
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
            <div class="text-xs text-red-600">{{ error.$message }}</div>
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

          <div v-if="v$.form.password.$error" class="text-xs text-red-600">
            {{ v$.form.password.$errors[0].$message }}
          </div>
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
          type="submit"
          :disabled="v$.form.$invalid"
          class="w-full px-6 py-2 font-semibold text-center text-white rounded-[4px] cursor-pointer glass-morphism hover:glass-morphism"
          @click="loginUser"
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
        <NuxtLink to="/login?form=signup" class="font-bold text-white cursor-pointer">
          Sign Up</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
