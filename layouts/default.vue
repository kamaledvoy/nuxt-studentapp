<script setup lang="ts">
  import { CheckCircleIcon, HomeIcon } from "@heroicons/vue/24/solid";

  components: {
    CheckCircleIcon;
    HomeIcon;
  }

  const menuLinks = reactive([
    {
      name: "Home",
      link: "/",
      icon: CheckCircleIcon,
    },
    {
      name: "About",
      link: "/",
      icon: HomeIcon,
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
  ]);

  let activeLink = menuLinks[0]?.name;
  const changeMenu = (data: string) => {
    activeLink = data;
    console.log(activeLink);
  };
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
          class="flex-shrink p-6 text-white/75 glass-morphism-gray rounded-l-3xl w-72 h-[calc(100vh-178px)] overflow-y-scroll scrollbar-hide space-y-2"
        >
          <button
            v-for="(menu, index) in menuLinks"
            :key="index"
            class="inline-flex w-full gap-4 px-6 py-2 rounded-md hover:glass-morphism text-start"
            :class="[menu.name === activeLink ? 'glass-morphism' : '']"
            @click="changeMenu(menu.name)"
          >
            <component :is="menu.icon" class="w-6 h-6 text-white" />
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
