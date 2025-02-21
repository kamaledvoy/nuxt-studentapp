<template>
  <div class="flex items-start justify-start h-full max-w-full gap-2">
    <div class="flex-initial h-auto max-w-60 shrink">
      <ToggleMenu />
    </div>
    <div class="flex-1 p-4 bg-white border border-gray-200 rounded-lg">
     <div>
      <h1 class="h-auto mb-4 font-bold text-black text-base/4">All Components</h1>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque aperiam repellendus consectetur possimus dolores, qui unde, iste numquam eaque explicabo dolore quas molestias doloribus, rem consequuntur adipisci vitae accusamus quasi.
     </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToggleMenu from "~/components/menu/ToggleMenu.vue";

  definePageMeta({
    layout: 'dynamic',
  });

  useHead({
    title: "Created UI Components use this Page",
    meta: [{ name: "description", content: "Student App Products List Page" }],
    link: [{ rel: "stylesheet", href: '/css/custom-page.css'}]
  });

</script>

<style></style>
