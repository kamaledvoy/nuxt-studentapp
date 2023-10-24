<template>
  <div class="text-white">
  <FormCreateAccount />
    <Form/>
    <div>
      <h2 class="mb-4 text-lg font-semibold text-white">
        {{ book.title }}
      </h2>

      <input
        ref="search"
        name="search"
        type="search"
        class="w-full h-10 px-4 mb-6 text-white bg-transparent rounded shadow-inner focus:outline-none ring-2 ring-white/10"
        placeholder="Search here..."
        required
      />

      <Tabs :tabs="tabTitle" />

      <div
        class="relative z-0 w-full max-w-xs overflow-hidden border border-green-500 group bg-white/25 h-80"
      >
        <div
          class="absolute w-24 h-6 p-1 text-xs font-semibold text-center text-white capitalize transform rotate-45 bg-green-400 -right-6 top-3"
        >
          {{ book.offer ? "5% Offer" : "No offer" }}
        </div>

        <img
          :src="book.image"
          :alt="book.title"
          class="w-48 h-auto mx-auto mt-4 bg-contain"
        />
        <div
          class="hidden w-full p-2 mt-2 text-center bg-black group-hover:block"
        >
          <button class="btn-primary" @click="addTocart">Add Cart</button>
        </div>
        <div
          class="flex items-center justify-between w-full p-2 mt-4 text-sm font-semibold text-white bg-green-500"
        >
          <span>{{ book.title }} / {{ book.year }}</span>
          <span class="px-3 py-1 text-xs bg-yellow-500 rounded-xl">{{
            book.instocked ? "Available" : "out of stocked"
          }}</span>
          <span>{{ book.price }} / {{ book.sale }}</span>
        </div>
      </div>

      <div>{{ data }} test {{ page }}</div>
      <div class="my-8 space-x-4">
        <button class="btn-primary" @click="previous">Previous</button>
        <button class="btn-primary" @click="next">Nuxt</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

  interface Book {
    title: string;
    year?: number;
    image: string;
    instocked: boolean;
    offer: boolean;
    price: number;
    sale: number;
  }

  const search = ref<HTMLInputElement | null>(null);
  const page = ref<number>(3);
  const book: Book = reactive({
    title: "Vue 3 Typescript",
    year: 2023,
    image: "https://m.media-amazon.com/images/I/61idMhi1l6S._SL1360_.jpg",
    instocked: true,
    price: 2600,
    offer: false,
    sale: 0,
  });

  let data = "";

  const previous = () => {
    if (page.value < 10) {
      page.value += 1;
      data = `Hello ${page.value} Page =>`;
    }
  };

  const next = () => {
    if (page.value > 1) {
      page.value -= 1;
    }
  };

  onMounted(() => {
    console.log("onMounted");
    // data = "onMounted"; // mounted this is not working
    search.value?.focus();
  });

  onBeforeMount(() => {
    console.log("onBeforeMount");
    data = "onBeforeMount";
  });

  const addTocart = () => {
    console.log("addTocart");
    book.sale += 1;
  };

  //TODO: Dynamic Tabs
  interface Tab {
    title: string;
    value: string;
  }
  const tabTitle: Tab[] = [
    { title: "Tab One", value: "Tab One Details" },
    { title: "Tab Two", value: "Tab Two Details" },
    { title: "Tab Three", value: "Tab Three Details" },
    { title: "Tab Four", value: "Tab Four Details" },
  ];

</script>

<style scoped></style>
