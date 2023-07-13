<template>
  <div
    class="flex flex-row items-center justify-start w-full h-full gap-16 py-7"
  >
    <div
      class="flex flex-col items-center w-16 gap-4 p-4 border-t border-l rounded-full h-72 bg-opacity-10 bg-blend-hard-light backdrop-blur-3xl backdrop-filter bg-white/30 ring-1 ring-inset ring-white/10 border-white/30 drop-shadow"
    >
      <div
        v-for="(item, index) in 5"
        :key="item"
        class="flex items-center justify-center w-10 h-10 rounded-full bg-white/20"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div
      class="flex flex-row justify-between w-full h-full overflow-hidden shadow-2xl rounded-3xl"
    >
      <div
        class="flex-shrink p-6 text-white/75 backdrop-blur-3xl bg-white/20 bg-opacity-10 bg-blend-hard-light rounded-l-3xl w-72 h-[calc(100vh-178px)] overflow-y-scroll scrollbar-hide space-y-2 border-l border-t-2 border-white/20 backdrop-filter ring-[200px] ring-black/20 ring-inset"
      >
        <button class="w-full px-10 rounded-lg btn-primary text-start">
          Save changes
        </button>
        <button
          v-for="(menu, index) in 5"
          :key="index"
          class="w-full px-10 text-start"
        >
          Save changes
        </button>
      </div>

      <div
        class="flex-1 col-span-5 overflow-y-scroll h-[calc(100vh-178px)] rounded-r-3xl ring-0 p-6 flex-shrink bg-white bg-opacity-25 border-t-2 border-r backdrop-filter bg-blend-hard-light border-white/30 backdrop-blur-3xl"
      >
        <div v-for="(item, index) in 10" :key="index">
          <h2 class="mb-4 text-lg font-semibold text-white">
            Home Page {{ item }}
          </h2>
          <div class="mb-4 text-white/75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            quia adipisci obcaecati dicta voluptate iusto eaque quo sapiente
            molestiae sed excepturi ducimus culpa recusandae consequuntur enim
            ut nobis doloremque quod, doloribus fugit unde nihil quidem. Aliquam
            accusamus veritatis fuga, optio atque natus blanditiis modi quod
            esse autem iste eveniet harum itaque voluptate omnis similique
            maiores! Neque maxime eius facere accusantium recusandae tenetur et
            ipsum repellat suscipit quibusdam iste eligendi, nemo nihil
            consequuntur mollitia totam culpa temporibus maiores inventore, eos
            fugiat, laudantium officia id nulla. Neque a reiciendis nulla
            tempora expedita excepturi iure aperiam totam, ullam cum maxime
            voluptatum quaerat hic.
          </div>
          <button class="btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "dynamic",
  });
</script>

<style scoped></style>
