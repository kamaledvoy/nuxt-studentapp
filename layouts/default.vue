<script setup lang="ts">
  const menuLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Service",
      link: "/",
    },
    {
      name: "Gallery",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
</script>

<template>
  <div class="relative flex flex-col h-screen gap-4 px-10 py-4 overflow-hidden">
    <div class="bg-container"></div>
    <TheHeader />
    <div class="container mx-auto h-[calc(100vh-120px)]">
      <div
        class="flex flex-row justify-between w-full h-full overflow-hidden rounded-3xl"
      >
        <div
          class="flex-shrink p-6 text-white/75 glass-morphism-gray rounded-l-3xl w-72 h-[calc(100vh-178px)] overflow-y-scroll scrollbar-hide"
        >
          <button
            v-for="(menu, index) in menuLinks"
            :key="index"
            class="w-full h-12 px-6 rounded-md hover:glass-morphism text-start"
          >
            {{ menu.name }}
          </button>
        </div>
        <div
          class="flex-1 col-span-5 overflow-y-scroll glass-morphism h-[calc(100vh-178px)] rounded-r-3xl border-transparent ring-0 p-6 flex-shrink"
        >
          <slot />
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<style scoped>
  .bg-container {
    background: linear-gradient(-45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
      url("~/assets/images/bg-02.png");
    filter: blur(5px);
    @apply bg-no-repeat bg-cover absolute inset-0 w-full h-full bg-fixed ring-2 ring-inset ring-black/50;
  }
</style>
