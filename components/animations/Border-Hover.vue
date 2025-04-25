<script setup lang="ts">
  import { useMouseInElement } from "@vueuse/core";
  const target = ref<HTMLElement | null>(null);

  const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

  const cardTransform = computed(() => {
    const MAX_ROTATION = 6;

    const rX = (MAX_ROTATION/2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(2) //  Handles x-axis

    const rY = ((elementX.value / elementWidth.value) * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2) //  Handles y-axis

    return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
  })


const borderHover = () => {
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
}

onMounted(() => {
  borderHover()
});
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="flex flex-col max-w-full gap-16 mx-auto"
  >
    <div class="h-auto p-16 text-white bg-black rounded-lg">
      <h2 class="mb-10 text-center text-green-500">
        Animate Hover border working code
      </h2>

      <div
        ref="target"
        class="flex flex-col w-full lg:grid gap-8 lg:grid-cols-12 relative lg:my-10 lg:auto-rows-[3rem] cursor-pointer"
        :style="{
          transform: cardTransform,
          transition: 'transform 0.3s ease-out'
        }"
      >
        <div
          class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 shadow col-span-4 row-span-3 flex flex-col transition-shadow duration-200 to"
        >
          <div
            class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity] dark:bg-gray-900/50 dark:lg:bg-gradient-to-b from-gray-700/50 to-gray-950/50"
          >
            <div
              class="flex-1 px-4 py-5 gap-x-8 gap-y-4 rounded-xl lg:items-center sm:p-6 dark:bg-gray-800/50 dark:lg:bg-gray-900/50 backdrop-blur-lg"
            >
              <div>
                <h2 class="mb-2 text-base font-semibold text-current">
                  Card Fast 3D Hover Effect, - {{ sourceType }}
                </h2>
                <p class="text-sm font-medium text-current">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque inventore iste, consectetur voluptatibus ratione vitae molestiae expedita velit repudiandae impedit doloribus neque quos incidunt, sed cumque quibusdam. Maiores, nostrum! Aliquid blanditiis beatae odio at et rem perferendis iste ipsa dolorem nemo.
                </p>
                <div class="absolute inset-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="grid grid-cols-3 gap-6">
        <div v-for="item in 12" :key="item" class="animate-card">
          <div class="inner">
            <h1 class="mb-4 text-slate-200">Hi dev.to!</h1>
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
// this code workig
.animate-card {
  background: rgb(15 23 42 / 90%); /* border color */
  // padding: 2px; /* border width */
  @apply overflow-hidden h-auto w-full z-0 relative rounded-2xl p-px;
}
.inner {
  background: rgb(13 19 32);
  transition: background 300ms ease-in-out;
  @apply rounded-2xl px-10 py-10 min-h-full cursor-grab;
}
.blob {
  filter: blur(40px);
  background: rgba(0, 224, 130, 1);
  @apply rounded-full size-56 top-0 left-0 absolute -z-[1];
}
.fakeblob {
  @apply rounded-full absolute z-[-1] top-0 left-0 size-48;
}

.animate-card:hover > .inner {
  background: rgba(13, 19, 32, 0.9);
  backdrop-filter: blur(100px);
}

// .card-effect {
//   transform: v-bind(cardTransform);
//   transition: transform 0.3s ease-out;
// }
</style>
