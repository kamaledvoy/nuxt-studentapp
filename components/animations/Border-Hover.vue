
<script setup lang="ts">
import type { UseMouseEventExtractor } from '@vueuse/core'
import { useMouse, useParentElement } from '@vueuse/core'
const parentEl = useParentElement()
const extractor: UseMouseEventExtractor = event => (
  event instanceof MouseEvent
    ? [event.offsetX, event.offsetY]
    : null
)

const { x, y, sourceType } = useMouse({ target: parentEl, type: extractor });
const el = ref<HTMLElement | null>(null);
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex flex-col gap-16 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:gap-y-24">
      <div class="h-auto text-white bg-black rounded-lg">
    <div class="flex flex-col lg:grid gap-8 lg:grid-cols-12 relative lg:-mb-20 lg:auto-rows-[3rem]">
      <div class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 shadow col-span-7 row-span-3 flex flex-col transition-shadow duration-200 to">
        <div class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity] dark:bg-gray-900/50 dark:lg:bg-gradient-to-b from-gray-700/50 to-gray-950/50">
          <div class="grid flex-1 px-4 py-5 gap-x-8 gap-y-4 rounded-xl lg:grid-cols-2 lg:items-center sm:p-6 dark:bg-gray-800/50 dark:lg:bg-gray-900/50 backdrop-blur-lg">
            <div>
              <h2 class="mb-2 text-base font-semibold text-current">
            Lorem ipsum dolor sit amet, - {{sourceType}}
          </h2>
          <p class="text-sm font-medium text-current">
            consectetur adipisicing elit. Atque molestias optio neque quas
            corrupti aut, eaque quaerat cupiditate suscipit necessitatibus, vero
            maiores. Aut excepturi dolore suscipit eligendi distinctio
            laboriosam debitis.
          </p>
            <div class="absolute inset-0"></div>
            </div>
            <div>
              <h2 class="mb-2 text-base font-semibold text-current">
            Lorem ipsum dolor sit amet, - {{sourceType}}
          </h2>
          <p class="text-sm font-medium text-current">
            consectetur adipisicing elit. Atque molestias optio neque quas
            corrupti aut, eaque quaerat cupiditate suscipit necessitatibus, vero
            maiores. Aut excepturi dolore suscipit eligendi distinctio
            laboriosam debitis.
          </p>
          </div>
        </div>
      </div>
    </div>
  </div>




  <!-- hover working below -->
    <div
      ref="el"
      :style="{
        '--x': `${x - (el?.offsetLeft ?? 0)}px`,
        '--y': `${y - (el?.offsetTop ?? 0)}px`,
      }"
      class="relative z-20 cursormove"
    >
      <div class="grid grid-cols-3 gap-10 p-10 ">
        <div
          v-for="item in 12"
          :key="item"
          class="card"
        >
          <h2 class="mb-2 text-base font-semibold text-current">
            Lorem ipsum dolor sit amet, - {{sourceType}}
          </h2>
          <p class="text-sm font-medium text-current">
            consectetur adipisicing elit. Atque molestias optio neque quas
            corrupti aut, eaque quaerat cupiditate suscipit necessitatibus, vero
            maiores. Aut excepturi dolore suscipit eligendi distinctio
            laboriosam debitis.
          </p>
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
</style>
