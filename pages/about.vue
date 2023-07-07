<template>
  <div>
    <h3 class="text-xl font-semibold text-white">About</h3>
    <p class="text-base text-white/75 fontt-normal">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam delectus
      laboriosam perferendis asperiores aliquam dolore ex veritatis! Repudiandae
      quas tempore, a voluptatibus praesentium et neque laboriosam, aperiam
      soluta, ducimus illum.
    </p>
    <div class="grid grid-flow-row grid-cols-2 my-6">
      <!-- {{ data?.message }} in server side -->
      <div>
        <h2 class="text-lg font-semibold text-white">Currency API Data</h2>
        <div
          v-for="(item, index) in data"
          :key="index"
          class="flex flex-row items-start justify-between w-full max-w-xs border divide-x divide-white"
        >
          <div class="flex-initial w-1/2 p-1 text-white/75">
            {{ item?.code }}
          </div>
          <div class="flex-1 p-1 text-white/75">{{ item?.value }}</div>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-semibold text-white">Send Currency Code</h2>
        <div>
          <form
            @submit.prevent="handleSubmit"
            class="flex flex-col max-w-xs mb-4"
          >
            <input
              v-model="currencyCode"
              name="currencyCode"
              type="text"
              class="w-full h-10 px-4 my-4 rounded-lg focus:outline-none"
              placeholder="currency code"
              required
            />
            <button
              v-if="!isPending"
              :disabled="!currencyCode"
              class="inline-flex w-auto gap-4 px-6 py-2 text-white rounded-md cursor-pointer glass-morphism hover:glass-morphism text-start"
            >
              Submit
            </button>
            <button
              v-if="isPending"
              disabled
              class="inline-flex w-auto gap-4 px-6 py-2 text-white rounded-md glass-morphism hover:glass-morphism text-start"
            >
              Loading
            </button>
          </form>
        </div>

        <div
          v-for="(item, idx) in courrencyValue"
          :key="idx"
          class="flex flex-row items-start justify-between w-full max-w-xs border divide-x divide-white"
        >
          <div class="flex-initial w-1/2 p-1 text-white/75">
            {{ item?.code }}
          </div>
          <div class="flex-1 p-1 text-white/75">{{ item?.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // get Request query parameters
  // const { data } = await useFetch("/api/about?name=kamal");

  // Post Request Query Parameters
  // const { data } = await useFetch("/api/about?name=kamal", {
  //   method: "POST",
  //   body: {
  //     age: 30,
  //   },
  // });

  // Get Api Request
  const { data } = await useFetch("/api/about");

  // Post Api Request Currency code
  // const { data: courrencyValue } = await useFetch("/api/currency/GBP");

  const isPending = ref(false);
  const currencyCode = ref("");
  let courrencyValue = ref("");

  const handleSubmit = async () => {
    isPending.value = true;
    // console.log("Submit", currencyCode.value);
    // console.log("The user is trying to code");
    const { data: courrencyData } = await useFetch(
      `/api/currency/${currencyCode.value}`
    );
    // console.log("API data: " + JSON.stringify(code));

    courrencyValue = courrencyData;
    isPending.value = false;
  };
</script>

<style scoped></style>
