<template>
  <div class="flex flex-col items-center justify-center gap-16">
    <div
      class="inline-flex flex-col items-center justify-start h-56 gap-2 p-5 bg-white bg-opacity-25 border-t border-l shadow backdrop-filter bg-blend-hard-light border-white/60 w-80 rounded-3xl backdrop-blur-3xl"
    >
      <img
        class="w-12 h-12 rounded-full"
        src="https://via.placeholder.com/52x52"
      />
      <div
        class="h-16 px-4 py-2 flex-col justify-start items-center gap-0.5 flex"
      >
        <div
          class="self-stretch text-lg font-semibold leading-normal text-center text-white text-opacity-95"
        >
          Whatsapp
        </div>
        <div
          class="self-stretch text-xs font-normal leading-tight text-center text-neutral-300"
        >
          Description text about this alert
        </div>
      </div>
      <div
        class="flex flex-col items-center self-stretch justify-start h-1 pb-1"
      >
        <div
          class="relative h-px rounded-full w-72 bg-zinc-600 bg-opacity-20"
        ></div>
      </div>
      <div
        class="inline-flex items-center justify-center px-6 w-72 h-11 rounded-2xl"
      >
        <div
          class="self-stretch text-2xl font-semibold text-center text-white grow shrink basis-0 text-opacity-95"
        >
          Click
        </div>
      </div>
    </div>
    <div
      class="h-56 border-t border-l bg-opacity-10 w-80 bg-blend-hard-light backdrop-blur-3xl backdrop-filter bg-white/30 rounded-3xl ring-1 ring-inset ring-white/10 border-white/30 drop-shadow"
    ></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
