<script setup lang="ts">
  import type { UseMouseEventExtractor } from "@vueuse/core";
  import { useMouse, useParentElement } from "@vueuse/core";
  const parentEl = useParentElement();
  const extractor: UseMouseEventExtractor = (event) =>
    event instanceof MouseEvent ? [event.offsetX, event.offsetY] : null;

  const { x, y, sourceType } = useMouse({ target: parentEl, type: extractor });
  const el = ref<HTMLElement | null>(null);
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="flex flex-col gap-16 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:gap-y-24"
  >
    <div class="h-auto overflow-hidden text-white bg-black rounded-lg">
      <div
        ref="el"
        :style="{
          '--x': `${x - (el?.offsetLeft ?? 0)}px`,
          '--y': `${y - (el?.offsetTop ?? 0)}px`,
        }"
        class="relative z-20 cursormove"
      >
        <div class="grid grid-cols-2 gap-10 p-20">
          <div v-for="item in 4" :key="item" class="card">
            <h2 class="mb-4 text-xl font-semibold text-current">
              Lorem ipsum dolor sit amet, - {{ sourceType }}
            </h2>
            <p class="font-normal text-current text-sm/7">
              consectetur adipisicing elit. Atque molestias optio neque quas
              corrupti aut, eaque quaerat cupiditate suscipit necessitatibus,
              vero maiores. Aut excepturi dolore suscipit eligendi distinctio
              laboriosam debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
