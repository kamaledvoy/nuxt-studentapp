<script setup lang="ts">
import type { UseMouseEventExtractor } from "@vueuse/core";
import { useMouse, useParentElement } from "@vueuse/core";
const parentEl = useParentElement();
const extractor: UseMouseEventExtractor = (event) =>
  event instanceof MouseEvent ? [event.offsetX, event.offsetY] : null;

const { x, y, sourceType } = useMouse({ target: parentEl, type: extractor });
const el = ref<HTMLElement | null>(null);

onMounted(() => {
  const allCards = document.querySelectorAll(".animate-card");
  window.addEventListener("mousemove", (ev) => {
    allCards.forEach((e) => {
      const blob = e.querySelector(".blob");
      const fblob = e.querySelector(".fakeblob");
      if (fblob && blob) {
        const rec = fblob.getBoundingClientRect();
        blob.animate(
          [
            {
              transform: `translate(${
                ev.clientX - rec.left - rec.width / 2
              }px,${ev.clientY - rec.top - rec.height / 2}px)`,
            },
          ],
          {
            duration: 300,
            fill: "forwards",
          }
        );
      }
    });
  });
});
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="flex flex-col gap-16 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:gap-y-24"
  >
    <div class="h-auto px-10 text-white bg-black rounded-lg">

      <!--useMouse hover working below -->
      <div
        ref="el"
        :style="{
          '--x': `${x - (el?.offsetLeft ?? 0)}px`,
          '--y': `${y - (el?.offsetTop ?? 0)}px`,
        }"
        class="relative z-20 cursormove"
      >
        <div class="grid grid-cols-2 gap-10 p-10">
          <div v-for="item in 4" :key="item" class="card">
            <h2 class="mb-2 text-base font-semibold text-current">
              Lorem ipsum dolor sit amet, - {{ sourceType }}
            </h2>
            <p class="text-sm font-medium text-current">
              consectetur adipisicing elit. Atque molestias optio neque quas
              corrupti aut, eaque quaerat cupiditate suscipit necessitatibus,
              vero maiores. Aut excepturi dolore suscipit eligendi distinctio
              laboriosam debitis.
            </p>
          </div>
        </div>
      </div>


      <h2 class="mb-10 text-center text-slate-200">
        Animate Hover border working code
      </h2>
      <div class="grid grid-cols-2 gap-6">
        <div v-for="item in 12" :key="item" class="animate-card">
          <div class="inner">
            <h1 class="text-slate-200">Hi dev.to!</h1>
            <p class="text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Molestiae et
              nam, magnam quam hic praesentium eos architecto laboriosam
              blanditiis illo corrupti dolores. Enim, distinctio facere
              reprehenderit earum a molestiae dignissimos?
            </p>
          </div>
          <div class="blob"></div>
          <div class="fakeblob"></div>
        </div>
      </div>


      <!-- below code to try after
      https://dev.to/yxsh/cards-mouse-hover-effect-with-css-js-33j0#comments
      https://ui.nuxt.com/
      -->

      <div
        class="flex flex-col lg:grid gap-8 lg:grid-cols-12 relative lg:my-10 lg:auto-rows-[3rem]"
      >
        <div
          class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 shadow col-span-7 row-span-3 flex flex-col transition-shadow duration-200 to"
        >
          <div
            class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity] dark:bg-gray-900/50 dark:lg:bg-gradient-to-b from-gray-700/50 to-gray-950/50"
          >
            <div
              class="flex-1 px-4 py-5 gap-x-8 gap-y-4 rounded-xl lg:items-center sm:p-6 dark:bg-gray-800/50 dark:lg:bg-gray-900/50 backdrop-blur-lg"
            >
              <div>
                <h2 class="mb-2 text-base font-semibold text-current">
                  Lorem ipsum dolor sit amet, - {{ sourceType }}
                </h2>
                <p class="text-sm font-medium text-current">
                  consectetur adipisicing elit. Atque molestias optio neque quas
                  corrupti aut, eaque quaerat cupiditate suscipit
                  necessitatibus, vero maiores. Aut excepturi dolore suscipit
                  eligendi distinctio laboriosam debitis.
                </p>
                <div class="absolute inset-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
// https://ui.nuxt.com/
.cursormove::before {
  content: "";
  inset: 0px;
  z-index: 0;
  position: absolute;
  background: radial-gradient(
    200px circle at var(--x) var(--y),
    #15ca82,
    transparent
  );
}
.card {
  @apply z-10 p-4 bg-black border-2 border-transparent border-solid rounded;
}

// this code workig
.animate-card {
  background: rgb(15 23 42 / 90%); /* border color */
  padding: 2px; /* border width */
  border-radius: 16px;
  position: relative;
  z-index: 0;
  width: 100%;
  height: 245px;
  overflow: hidden;
}
.inner {
  background: rgb(13 19 32);
  transition: background 300ms ease-in-out;
  @apply rounded-2xl p-6 min-h-60;
}
.blob {
  filter: blur(40px);
  position: absolute;
  z-index: -1; /* to keep it at below everything else */
  top: 0; /* to align it at top */
  left: 0; /* to align it at left */
  width: 250px;
  height: 250px;
  border-radius: 50%; /* to make it circular */
  background: rgba(0, 224, 130, 1);
}
.fakeblob {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.animate-card:hover > .inner {
  background: rgba(13, 19, 32, 0.9);
  backdrop-filter: blur(100px);
}
</style>
