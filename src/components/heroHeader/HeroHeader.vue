<script setup lang="ts">
import { scrollToElement } from "@/utils/scrollTo";
import { NavId } from "@/components/topNav/TopNav.types";

import { onMounted } from "vue";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const gs = gsap.to(".line", {
    scrollTrigger: {
      trigger: ".header",
      start: "top 90px",
      end: "top 70px",
      scrub: 1,
    },
    scaleX: 1.1,
    scaleY: 2,
    y: -10,
    ease: "none",
  });

  return () => {
    gs.scrollTrigger?.kill();
  };
});
</script>

<template>
  <header class="header">
    <div class="hero" />

    <div class="header__content">
      <h1
        class="text-5xl text-gray-700 font-bold drop-shadow-lg flex flex-col justify-items-start items-baseline mb-4"
      >
        <span class="text text-center m-auto text-green-800">
          ADAMO
          <span class="line" />
        </span>

        <span class="text text-green-800">
          Biuro rachunkowe
          <span class="line" />
        </span>
      </h1>

      <p class="text-xl intro">Kompleksowa obsługa księgowa</p>

      <button
        class="bg-green-700 hover:bg-green-900 focus:bg-green-900 focus:outline-none text-white font-bold py-1.5 px-4 rounded-full w-44"
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
  width: 100%;
  height: calc(100vh - 72px - 8rem);
  position: relative;

  &__content {
    @apply flex flex-col h-full items-center;
    padding: 3rem 1rem;
  }

  @media (min-width: 72rem) {
    margin: 4rem auto;
    border-radius: 45px;

    &__content {
      padding: 5rem;
    }
  }
}

.hero {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    @media (min-width: 72rem) {
      border-radius: 45px;
    }
  }

  &::before {
    background-image: url("./hero.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 1;
  }

  &::after {
    background: linear-gradient(
      200deg,
      rgba(200, 200, 200, 0.4) 10%,
      rgba(255, 255, 255, 0) 50%
    );
    // background: linear-gradient(125deg, rgba(249,200,59,0.15) 12%, rgba(255,255,255,0) 60%);
    // background: linear-gradient(125deg, rgba(220,180,150,0.15) 12%, rgba(255,255,255,0) 60%);
  }
}

.text {
  text-shadow: -3px 0 white;
  position: relative;
  text-align: center;

  @media (min-width: 72rem) {
    & .line {
      content: "";
      position: absolute;
      border-radius: 0;
      left: 10px;
      bottom: -2px;
      background: white;
      width: 100%;
      height: 16px;
      z-index: -1;
      transition: transform ease 0.1s;
    }
  }
}

.intro {
  text-shadow: 0 0 2px rgba(240, 240, 240, 0.8);
  font-weight: 400;
  margin-bottom: 3rem;
}
</style>
