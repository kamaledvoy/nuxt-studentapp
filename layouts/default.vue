<template>
  <div class="flex flex-col h-screen">
    <TheHeader />
    <div class="h-[calc(100vh-120px)] overflow-y-scroll">
      <div class="container py-4 mx-auto">
        <slot />
      </div>
    </div>
    <TheFooter />
  </div>
</template>
