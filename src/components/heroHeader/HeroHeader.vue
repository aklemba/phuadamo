<script setup lang="ts">
import { scrollToElement } from "@/utils/scrollTo";
import { NavId } from "@/components/topNav/TopNav.types";
</script>

<template>
  <header class="header">
    <div class="hero" />

    <div class="header__content">
      <h1
        class="text-6xl text-gray-700 font-bold drop-shadow-lg mb-2 flex flex-col justify-items-start items-baseline"
      >
        <span class="text"> Adamo </span>

        <span class="text text-blue-800"> Biuro rachunkowe </span>
      </h1>

      <p class="mt-5 text-2xl mb-6 intro">Kompleksowa obsługa księgowa</p>

      <button
        class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full w-44"
        @click="scrollToElement(NavId.OFFER)"
      >
        Zobacz ofertę
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  @apply max-w-6xl mx-auto w-full bg-cover bg-center;
  border-radius: 45px;
  margin: 4rem auto;
  width: 100%;
  height: calc(100vh - 72px - 8rem);
  position: relative;

  &__content {
    @apply flex flex-col justify-center h-full;
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
    opacity: 0.8;
    border-radius: 45px;
  }
}

.text {
  text-shadow: -3px 0 white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    border-radius: 0;
    left: 10px;
    bottom: 0;
    background: white;
    width: 100%;
    height: 30px;
    z-index: -1;
  }
}

.intro {
  text-shadow: 0 0 2px rgba(240, 240, 240, 0.8);
  font-weight: 500;
}
</style>
