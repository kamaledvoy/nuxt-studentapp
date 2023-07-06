<template>
  <div
    class="relative z-0 flex flex-col h-screen gap-4 px-10 py-4 overflow-hidden"
  >
    <div class="bg-container"></div>
    <div class="inline-flex flex-row items-center justify-center gap-2 pt-10">
      <span class="text-white material-symbols-outlined" :size="40">
        developer_mode_tv
      </span>
      <h2 class="text-lg font-medium text-white">Developer</h2>
    </div>
    <div class="container h-screen mx-auto">
      <div class="flex items-center w-full h-full overflow-hidden">
        <slot />
      </div>
    </div>
  </div>

  <!-- <div class="container h-[calc(100vh-120px)] mx-auto">
      <div class="flex items-center w-full h-full overflow-hidden rounded-3xl">
        <div class="inline-flex flex-row items-center gap-2">
          <span class="text-white material-symbols-outlined" :size="40">
            developer_mode_tv
          </span>
          <h2 class="text-lg font-medium text-white">Developer</h2>
        </div>
        <div class="p-10 glass-morphism rounded-3xl w-96 h-96">
          <slot />
        </div>
      </div>
    </div> -->
</template>

<style lang="scss" scoped>
  .bg-container {
    background: linear-gradient(-45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)),
      url("~/assets/images/bg-02.png");
    filter: blur(5px);
    @apply bg-no-repeat bg-cover absolute inset-0 w-full h-full bg-fixed ring-2 ring-inset ring-black/50 -z-10;
  }
</style>
