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
      <template v-for="(item, index) in menuLinks">
        <NuxtLink :to="item.link" class="px-4 py-2 border rounded">
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
</template>
