<template>
  <div class="text-white bg-container">
    <div class="container mx-auto h-[calc(100vh-120px)] py-10">
      <header>
        <slot name="header">
          <div
            class="flex flex-row items-center justify-between w-full h-16 max-w-4xl gap-8 p-4 mx-auto bg-white border-t border-l rounded-full shadow ring-1 ring-inset ring-offset-1 ring-offset-white/10 ring-white/10 bg-opacity-10 backdrop-filter bg-blend-hard-light backdrop-blur-3xl border-white/40"
          >
            <div class="flex flex-row items-center flex-initial w-1/5 gap-4">
              <img
                v-for="(item, idx) in 3"
                :key="`${item}-${idx}`"
                class="w-10 h-10 rounded-full"
                src="https://via.placeholder.com/52x52"
              />
            </div>

            <input
              type="search"
              id="search"
              name="search"
              placeholder="Search here..."
              class="flex-grow flex-shrink w-full h-10 max-w-md px-4 text-base font-normal leading-10 text-white bg-black border-t border-l rounded-full border-white/20 bg-opacity-10 focus:outline-none"
            />

            <div
              class="flex flex-row items-center justify-end flex-initial w-1/5 gap-4"
            >
              <!-- user notification  -->
              <div
                v-for="(item, index) in 3"
                :key="item"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-white/20"
              >
                {{ index + 1 }}
              </div>
            </div>
          </div>
        </slot>
      </header>
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .bg-container {
    background: linear-gradient(-45deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("~/assets/images/vision-bg.jpg");
    @apply bg-no-repeat bg-cover absolute inset-0 w-full h-full bg-fixed ring-2 ring-inset ring-black/50 -z-10;
  }
</style>
