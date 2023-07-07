<template>
  <div class="bg-white">
    <div
      class="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
    >
      <!-- Product details -->
      <div class="lg:max-w-lg lg:self-end">
        <!-- <nav aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-2">
            <li v-for="(breadcrumb, breadcrumbIdx) in product.breadcrumbs" :key="breadcrumb.id">
              <div class="flex items-center text-sm">
                <a :href="breadcrumb.href" class="font-medium text-gray-500 hover:text-gray-900">{{ breadcrumb.name }}</a>
                <svg v-if="breadcrumbIdx !== product.breadcrumbs.length - 1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 w-5 h-5 ml-2 text-gray-300">
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
              </div>
            </li>
          </ol>
        </nav> -->

        <div class="mt-4">
          <h1
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            {{ product.title }}
          </h1>
        </div>

        <section aria-labelledby="information-heading" class="mt-4">
          <h2 id="information-heading" class="sr-only">Product information</h2>

          <div class="flex items-center">
            <p class="text-lg text-gray-900 sm:text-xl">
              {{ product.price }}
            </p>

            <div class="pl-4 ml-4 border-l border-gray-300">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <div>
                  <div class="flex items-center">
                    <p class="text-lg text-gray-900 sm:text-xl">
                      {{ product.price }}
                    </p>
                    <StarIcon
                      v-for="(rating, index) in [0, 1, 2, 3, 4]"
                      :key="index"
                      :class="[
                        product.rating.rate > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="sr-only">
                    {{ product.rating.rate }} out of 5 stars
                  </p>
                </div>
                <p class="ml-2 text-sm text-gray-500">
                  {{ product.rating.count }} reviews
                </p>
              </div>
            </div>
          </div>

          <div class="mt-4 space-y-6">
            <p class="text-base text-gray-500">{{ product.description }}</p>
          </div>

          <div class="flex items-center mt-6">
            <CheckIcon
              class="flex-shrink-0 w-5 h-5 text-green-500"
              aria-hidden="true"
            />
            <p class="ml-2 text-sm text-gray-500">In stock and ready to ship</p>
          </div>
        </section>
      </div>

      <div class="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
        <div class="overflow-hidden rounded-lg aspect-h-1 aspect-w-1">
          <img
            :src="product.image"
            :alt="product.category"
            class="object-cover object-center w-full h-full"
          />
        </div>
      </div>

      <div
        class="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start"
      >
        <section aria-labelledby="options-heading">
          <h2 id="options-heading" class="sr-only">Product options</h2>

          <form>
            <div class="sm:flex sm:justify-between">
              <!-- Size selector -->
              <!-- <RadioGroup v-model="selectedSize">
                <RadioGroupLabel class="block text-sm font-medium text-gray-700">Size</RadioGroupLabel>
                <div class="grid grid-cols-1 gap-4 mt-1 sm:grid-cols-2">
                  <RadioGroupOption as="template" v-for="size in product.sizes" :key="size.name" :value="size" v-slot="{ active, checked }">
                    <div :class="[active ? 'ring-2 ring-indigo-500' : '', 'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none']">
                      <RadioGroupLabel as="p" class="text-base font-medium text-gray-900">{{ size.name }}</RadioGroupLabel>
                      <RadioGroupDescription as="p" class="mt-1 text-sm text-gray-500">{{ size.description }}</RadioGroupDescription>
                      <div :class="[active ? 'border' : 'border-2', checked ? 'border-indigo-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup> -->
            </div>
            <div class="mt-4">
              <a
                href="#"
                class="inline-flex text-sm text-gray-500 group hover:text-gray-700"
              >
                <span>What size should I buy?</span>
                <QuestionMarkCircleIcon
                  class="flex-shrink-0 w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <span class="mr-3 material-symbols-outlined">
                  shopping_cart
                </span>
                Add to bag
              </button>
            </div>
            <div class="mt-6 text-center">
              <a href="#" class="inline-flex text-base font-medium group">
                <ShieldCheckIcon
                  class="flex-shrink-0 w-6 h-6 mr-2 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span class="text-gray-500 hover:text-gray-700"
                  >Lifetime Guarantee</span
                >
              </a>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { product } = defineProps(["product"]);
</script>

<style scoped></style>
