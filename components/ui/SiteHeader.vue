<template>
  <header class="bg-white border-b border-gray-50">
    <nav
      class="flex items-center justify-between max-w-full p-2.5 mx-auto gap-x-6 lg:px-14"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="./" class="-m-1.5 p-1.5">
          <div class="flex items-center justify-start gap-x-3">
            <img
              class="w-auto h-8"
              src="~/assets/images/dream-designs.png"
              alt="Your Company"
            />
            <h2 class="text-lg font-semibold capitalize text-gray-950">
              <span class="font-bold text-green-600 me-1">UI</span> Dream
              Designs
            </h2>
          </div>
        </NuxtLink>
      </div>
      <div class="hidden lg:flex">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="px-4 font-medium text-gray-500 text-sm/10"
          :class="{ 'border-b border-green-500': item.current }"
          >{{ item.name }}</NuxtLink
        >
      </div>
      <div class="flex items-center justify-end flex-1 gap-x-6">
        <a
          href="#"
          class="hidden font-semibold text-gray-900 text-sm/6 lg:block"
          >Log in</a
        >
        <a
          href="#"
          class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Sign up</a
        >
        <button>Toggle</button>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center gap-x-6">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="w-auto h-8"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
          <a
            href="#"
            class="px-3 py-2 ml-auto text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Sign up</a
          >
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="flow-root mt-6">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="py-6 space-y-2">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                >{{ item.name }}</a
              >
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Log in</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const route = useRoute();

const navigation = [
  {
    name: "UI Designs",
    href: "/ui",
  },
  {
    name: "Animation",
    href: "/ui/animation"
  },
  { name: "Blog", href: "/ui/blog" },
  {
    name: "Projects",
    href: "/ui/projects",
  },
  { name: "Uses", href: "/ui/uses" },
];

const mobileMenuOpen = ref(false);
</script>

<style lang="scss">
.router-link-active.router-link-exact-active {
  @apply relative text-gray-950 before:absolute before:inset-x-0 before:-bottom-2.5 before:h-0.5 before:w-full before:bg-green-600;
}
</style>
