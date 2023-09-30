<template>
  <div class="p-4 my-4 border rounded-lg glass-morphism-black">
    <ul class="flex items-center h-10 space-x-4">
      <li
        v-for="tab in tabs"
        :key="tab.title"
        class="px-4 py-1 text-base font-semibold text-white rounded cursor-pointer"
        :class="[
          isActive === tab.title ? 'bg-green-500' : 'bg-white/20 opacity-75',
        ]"
        @click="onchangeTab(tab.title)"
      >
        {{ tab.title }}
      </li>
    </ul>
    <div
      v-for="tab in tabs"
      :key="tab.title"
      class="w-full p-4"
      :class="[isActive === tab.title ? '' : '!hidden']"
    >
      <h2
        class="mb-4 text-base font-medium text-white underline underline-offset-4"
      >
        {{ tab.value }}
      </h2>
      <p class="text-sm font-normal text-white/75">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        assumenda tempora, explicabo veniam praesentium voluptate sed nam fugit
        expedita odit error fugiat blanditiis soluta adipisci perspiciatis
        architecto deserunt doloremque temporibus? Ratione, repellat impedit.
        Possimus dolores ipsa dicta nihil dolorem cumque eum ipsam error
        expedita? Facilis officia ipsum reprehenderit error corrupti, ullam
        rerum placeat dolorum deleniti quasi fugiat, voluptatum repellendus
        labore omnis iusto atque sequi dicta! Sint corrupti cupiditate eveniet
        doloremque sit architecto adipisci maiores voluptatem, vel laudantium
        numquam nesciunt itaque iusto laboriosam sequi debitis, doloribus alias
        hic repellendus veritatis culpa ipsa non. Vitae at delectus cumque iusto
        fuga impedit quos.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { tabs } = defineProps(["tabs"]);
  const isActive = ref(tabs[0].title);

  const onchangeTab = (data: string) => {
    console.log("Selected tab:", data);
    isActive.value = data;
  };
</script>

<style scoped></style>
