<script setup>
  const menuLinks = [
    {
      name: "Vue",
      link: "/vue",
    },
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
    {
      name: "Login",
      link: "/auth/login",
    },
  ];
</script>

<template>
  <header
    class="flex justify-between w-full h-16 max-w-5xl gap-4 px-2.5 mx-auto rounded-full glass-morphism-white"
  >
    <div class="flex items-center flex-initial w-1/5 px-6 gap-x-3">
      <!-- <img
        class="w-auto h-8"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      /> -->
      <span class="text-white material-symbols-outlined" :size="40">
        developer_mode_tv
      </span>
      <h2 class="text-lg font-medium text-white capitalize">Developer</h2>
    </div>
    <nav class="flex flex-row items-center justify-center flex-shrink w-full">
      <ul
        class="flex flex-row items-center justify-end flex-shrink w-full gap-2"
      >
        <li v-for="(item, index) in menuLinks" :key="index">
          <NuxtLink
            :to="item.link"
            class="px-4 py-2 font-medium text-white rounded"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="flex flex-row items-center gap-4">
      <div
        class="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-white/20"
      >
        i
      </div>
      <div
        class="flex items-center justify-center w-10 h-10 text-white bg-purple-600 rounded-full cursor-pointer"
      >
        KM
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .router-link-active {
    @apply glass-morphism-black;
  }
</style>
