<template>
  <div>
    <h2>Blog Page</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
      sapiente, illum praesentium consequatur, vel assumenda saepe ducimus amet
      magni sunt optio odit. Fuga quasi, quaerat delectus possimus iusto ducimus
      enim.
    </p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dynamic",
});

useHead({
  title: "Created UI Components use this Page",
  meta: [{ name: "description", content: "Student App Products List Page" }],
  link: [{ rel: "stylesheet", href: "/css/custom-page.css" }],
});

const appConfig = useAppConfig();
const runtimeConfig = useRuntimeConfig();
</script>

<style scoped></style>
