<template>
  <div>
    <h1 class="text-xl text-white font-bold">Movies</h1>
    <div
      class="*:rounded-2xl *:border *:border-white flex items-start *:max-w-72 gap-6 flex-wrap my-6 *:overflow-hidden"
    >
      <template v-for="(movie, index) in movies" :key="`${movie.name}-${index}`">
        <div @click.stop="updateRating(movie.id)">
          <div class="h-72 w-full">
            <img
              :src="movie.image"
              class="max-w-full aspect-video object-contain object-bottom w-full h-full bg-black"
              alt=""
            />
          </div>
          <div class="bg-white p-4 space-y-2">
            <div class="font-bold text-base">{{ movie?.name }}</div>
            <ul
              class="*:rounded-2xl *:bg-blue-600 *:text-white text-sm font-medium *:px-3 *:py-0.5 inline-flex items-center gap-2 flex-wrap">
              <template v-for="(genre, idx) in movie?.genres" :key="idx">
                <li>{{ genre }}</li>
              </template>
            </ul>
            <div class="font-normal text-sm line-clamp-3">{{ movie?.description }}</div>
            <StarRating :rating="movie.rating" v-model:modelValue="newRating" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatNumber } from "~/utils/index";
import { items } from "~/utils/json/movies.json";
import StarRating from '@/components/StarRating.vue'
const movies = ref(items)


const newRating = ref(0)
const selectedMovieId = ref()

const updateRating = (index:number) => {
       selectedMovieId.value = index
      const foundMovieIndex = movies.value.findIndex(
        (movie) => movie.id === selectedMovieId.value
      );

      if (foundMovieIndex !== -1) {
        // Create a copy of the movie object to avoid mutating the original
        const updatedMovie = { ...movies.value[foundMovieIndex] };
        updatedMovie.rating = newRating.value;

        // Replace the movie at the found index with the updated version
        movies.value.splice(foundMovieIndex, 1, updatedMovie);
      } else {
        console.warn('Movie not found'); // Handle movie not found scenario
      }
    }

</script>

<style scoped></style>
