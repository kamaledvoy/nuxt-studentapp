<script setup>
  const menuLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
</script>

<template>
  <header
    class="flex justify-between w-full h-16 gap-4 px-12 bg-white border-b border-gray-100"
  >
    <div class="flex items-center flex-initial w-1/5">
      <img
        class="w-auto h-8"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
    </div>
    <nav
      class="flex flex-row items-center justify-end flex-shrink w-full gap-4"
    >
      <template v-for="(item, index) in menuLinks" :key="index">
        <NuxtLink
          :to="item.link"
          class="px-4 py-2 border border-transparent rounded"
        >
          {{ item.name }}
        </NuxtLink>
      </template>
    </nav>
    <div class="flex flex-row items-center gap-4">
      <div class="flex items-center justify-center w-10 h-10 cursor-pointer">
        i
      </div>
      <div
        class="flex items-center justify-center w-10 h-10 text-white bg-purple-600 rounded-full cursor-pointer"
      >
        KM
      </div>
    </div>
  </header>

  <div class="flex flex-col h-screen">
    <div class="h-[calc(100vh-120px)] overflow-y-scroll">
      <div class="container py-4 mx-auto">
        <slot />
      </div>
    </div>
  </div>

  <footer>
    <div
      class="inline-flex items-center justify-center w-full h-16 font-normal text-center border-t border-gray-100 font-base text-grey-600"
    >
      &copy; {{ new Date().getFullYear() }} Design<sup><small>TM</small></sup>
      Limited. All Rights Reserved.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .router-link-active {
    @apply border-purple-600 bg-purple-600 text-white;
  }
</style>
