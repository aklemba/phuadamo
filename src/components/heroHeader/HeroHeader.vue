<script setup lang="ts"></script>

<template>
  <header class="header max-w-6xl mx-auto w-full bg-cover bg-center">
    <div class="hero" />

    <div class="header__content flex flex-col justify-center h-full">
      <h1 class="text-6xl text-gray-700 font-bold drop-shadow-lg mb-2">
        <span> Adamo </span>
        <span class="block text-blue-800"> Biuro rachunkowe </span>
      </h1>

      <p class="mt-5 text-2xl opacity-100 mb-6">
        Kompleksowa obsługa księgowa
      </p>

      <button
        class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full w-44"
      >
        Zobacz ofertę
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  border-radius: 45px;
  margin: 4rem auto;
  width: 100%;
  height: calc(100vh - 72px - 8rem);
  position: relative;

  &__content {
    padding: 5rem;
  }
}

.hero {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("./hero.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.6;
    border-radius: 45px;
  }
}
</style>
