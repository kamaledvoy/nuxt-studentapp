<template>
  <div class="w-full p-4 bg-white border border-gray-200 rounded-lg">
    <div class="h-auto transition-all duration-100 ease-in">
      <template v-for="(menu, menuIndex) in menuItems">
        <div
          class="flex flex-col items-start justify-start transition-colors duration-150 ease-in rounded-lg cursor-pointer group hover:bg-violet-50"
          :class="[activeMenu === menuIndex ? 'bg-violet-100' : 'bg-white']"
          @click="onMenuOpen(menuIndex)"
        >
          <div
            class="flex items-center justify-start gap-3 pl-4 pr-1 py-2.5 self-stretch w-full"
          >
            <div
              class="flex items-center justify-start h-4 grow shrink basis-0"
            >
              <div
                v-if="menu.childMenu?.length"
                class="relative flex-none -ml-4 transition-transform duration-300 transform size-4 before:-bottom-2.5 before:left-[0.51rem] before:h-full before:w-px before:bg-gray-400 before:opacity-50"
                :class="[
                  activeMenu === menuIndex && openMenu
                    ? 'rotate-0 before:absolute'
                    : '-rotate-90',
                ]"
              >
                <ChevronDownSolid class="ml-[0.04rem] size-4" />
              </div>
              <div
                class="text-xs leading-none text-gray-700 transition-transform transform grow shrink basis-0 font-inter"
                :class="[
                  activeMenu === menuIndex ? 'font-semibold' : 'font-medium',
                ]"
              >
                {{ menu.name }}
              </div>
            </div>
            <div
              class="px-1.5 py-0.5 group-hover:bg-white bg-gray-100 rounded-[13px] justify-center items-center gap-0.5 flex transition-colors duration-150 ease-in"
            >
              <div
                class="text-center text-indigo-600 text-[10px] font-semibold font-inter uppercase leading-none tracking-wide"
              >
                {{ menu.count }}
              </div>
            </div>
          </div>

          <!-- child menu -->
          <transition name="fade">
            <div
              v-if="menu.childMenu?.length && openMenu"
              class="self-stretch w-full pl-2 transition-[height] transform duration-200 ease-in"
            >
              <div
                v-for="(submenu, subIndex) in menu.childMenu"
                :key="`submenu-${subIndex}`"
                :class="[
                  'flex items-center self-stretch justify-start w-full gap-3 py-2 pl-4 pr-1 hover:bg-violet-100 transform transition-colors ease-in duration-100',
                  subMenuActive === subIndex
                    ? 'bg-violet-200 border-violet-700 border-l-2'
                    : 'border-gray-300 border-l',
                ]"
                @click.stop="onSubMenu(subIndex)"
              >
                <div
                  :class="[
                    'text-xs leading-none text-gray-800 grow shrink basis-0 font-inter transition-[width] duration-200 ease-in',
                    subMenuActive === subIndex
                      ? 'font-semibold'
                      : 'font-normal',
                  ]"
                >
                  {{ submenu.name }}
                </div>
                <div
                  class="px-1.5 py-0.5 bg-violet-50 rounded-xl justify-center items-center gap-0.5 flex"
                >
                  <div
                    class="font-semibold leading-none tracking-wide text-center text-gray-700 uppercase text-xss font-inter"
                  >
                    {{ submenu.count }}
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <!-- child menu End-->
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChevronDownSolid from "~/assets/icons/ChevronDownSolid.vue";

const menuItems = ref([
  {
    name: "All",
    count: "2,20,114",
  },
  {
    name: "Pending deposits",
    count: "338",
  },
  {
    name: "Incomplete",
    count: "58,030",
    childMenu: [
      { name: "Needs action", count: "2,349" },
      { name: "Move to APT", count: "14,349" },
      { name: "Awaiting Approval", count: "249" },
      { name: "Awaiting Approval", count: "249" },
      { name: "Applied", count: "24,954" },
    ],
  },
  {
    name: "Ongoing deferrals",
    count: "1,320",
  },
  {
    name: "APT ready",
    count: "12,080",
  },
  {
    name: "Offer processing",
    count: "1,15,193",
  },
  {
    name: "CoE",
    count: "3,779",
  },
  {
    name: "Visa Prep",
    count: "5,286",
  },
  {
    name: "Awaiting Enrolment",
    count: "2,443",
  },
  {
    name: "Invoicing process",
    count: "5,549",
  },
]);

const activeMenu = ref(0);
const openMenu = ref(false);
const onMenuOpen = (menuIndex: number) => {
  openMenu.value = !openMenu.value;
  activeMenu.value = menuIndex;
};

const subMenuActive = ref(0);
const onSubMenu = (subIndex: number) => {
  subMenuActive.value = subIndex;
};
</script>

<style>
// Transitions added
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
