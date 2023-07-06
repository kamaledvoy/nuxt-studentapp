<template>
  <div>
    <h3 class="text-xl font-semibold text-white">About</h3>
    <p class="text-base text-white/75 fontt-normal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam delectus
      laboriosam perferendis asperiores aliquam dolore ex veritatis! Repudiandae
      quas tempore, a voluptatibus praesentium et neque laboriosam, aperiam
      soluta, ducimus illum.
    </p>
    <div class="my-6">
      <!-- {{ data?.message }} in server side -->
      <h2 class="text-lg font-semibold text-white">Currency API Data</h2>
      <div
        v-for="item in data"
        :key="item"
        class="flex flex-row items-start justify-between w-full max-w-xs border divide-x divide-white"
      >
        <div class="flex-initial w-1/2 p-1 text-white/75">{{ item?.code }}</div>
        <div class="flex-1 p-1 text-white/75">{{ item?.value }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // get Request query parameters
  // const { data } = await useFetch("/api/about?name=kamal");

  // Post Request Query Parameters
  // const { data } = await useFetch("/api/about?name=kamal", {
  //   method: "POST",
  //   body: {
  //     age: 30,
  //   },
  // });

  // Get Api Request
  const { data } = await useFetch("/api/about");
</script>

<style scoped></style>
