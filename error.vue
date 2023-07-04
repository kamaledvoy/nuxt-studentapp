<template>
  <div
    class="flex items-center justify-center w-full h-screen px-8 py-24 bg-white"
  >
    <div class="text-center">
      <h1 class="text-3xl font-semibold text-indigo-600">
        {{ error.statusCode }}
      </h1>
      <h3 class="mt-4 text-4xl font-bold tracking-tight text-gray-900">
        {{ error.message }}
      </h3>
      <p class="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div class="flex items-center justify-center mt-10 gap-x-4">
        <button
          class="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="handleClearError"
        >
          Go back home
        </button>
        <a href="#" class="text-sm font-semibold text-gray-900"
          >Contact support <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps(["error"]);

  const handleClearError = () =>
    clearError({
      redirect: "/",
    });
</script>

<style scoped></style>
