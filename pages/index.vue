<script setup lang="ts">
  console.log("hello script setup");

  // const tabs = [one, two, three, four, five];
</script>

<template>
  <div v-for="(item, index) in 10" :key="index">
    <h2 class="mb-4 text-lg font-semibold text-white">Home Page {{ item }}</h2>
    <div class="mb-4 text-white/75">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quia
      adipisci obcaecati dicta voluptate iusto eaque quo sapiente molestiae sed
      excepturi ducimus culpa recusandae consequuntur enim ut nobis doloremque
      quod, doloribus fugit unde nihil quidem. Aliquam accusamus veritatis fuga,
      optio atque natus blanditiis modi quod esse autem iste eveniet harum
      itaque voluptate omnis similique maiores! Neque maxime eius facere
      accusantium recusandae tenetur et ipsum repellat suscipit quibusdam iste
      eligendi, nemo nihil consequuntur mollitia totam culpa temporibus maiores
      inventore, eos fugiat, laudantium officia id nulla. Neque a reiciendis
      nulla tempora expedita excepturi iure aperiam totam, ullam cum maxime
      voluptatum quaerat hic.
    </div>
    <button class="btn-primary">Save changes</button>
  </div>
</template>
