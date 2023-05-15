<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.matchMedia({
    "screen and (min-width: 72rem)": function () {
      gsap.set(".priceListImg", { backgroundPosition: "100% center" });
      const gs = gsap.to(".priceListImg", {
        scrollTrigger: {
          trigger: ".priceListImg-imgWrapper",
          start: "top 90%",
          scrub: 0,
        },
        backgroundPosition: "0% center",
        ease: "none",
      });

      return () => {
        gs.scrollTrigger?.kill();
      };
    },
  });
});
</script>

<template>
  <div class="flex flex-wrap items-end">
    <header class="basis-full md:basis-4/12 text-center">
      <span class="section-subtitle text-left"> Sprawdź nasze ceny! </span>

      <h2 class="section-title text-5xl text-left mb-3">Cennik</h2>

      <div class="priceListImg-imgWrapper">
        <div class="priceListImg" />
      </div>
    </header>

    <div class="basis-full md:basis-8/12 mb-1">
      <p>
        Ceny oferowanych usług ustalamy indywidualnie dla każdego Klienta na
        podstawie przewidywanej liczby dokumentów, liczby zatrudnionych
        pracowników, formy opodatkowania, na podstawie indywidulanych oczekiwań
        i potrzeb Klienta oraz przewidywanego czasu wykonania zleconych usług.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.offer-section {
  padding: 6rem 0;
}

.priceListImg-imgWrapper {
  width: 120px;
  height: 90px;
  border-radius: 45px 0;

  @media (max-width: 71.99rem) {
    display: none;
  }
}

.priceListImg {
  background-image: url("./priceList.jpg");
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: cover;
  transition: 1.2s;
  overflow: hidden;
  border-radius: 20px;
  width: 100%;
  height: 100%;
}
</style>
