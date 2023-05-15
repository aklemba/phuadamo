<script setup lang="ts">
import { NavId } from "@/components/topNav/TopNav.types";
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollToElement } from "@/utils/scrollTo";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.matchMedia({
    "screen and (min-width: 72rem)": function () {
      const gs = gsap.to(".img", {
        scrollTrigger: {
          trigger: ".img",
          start: "top 90%",
          scrub: 1,
        },
        y: -140,
        ease: "none",
      });

      return () => {
        gs.scrollTrigger?.kill();
      };
    },
  });
});

const scrollTo = (event: Event, id?: string) => {
  event.preventDefault();
  scrollToElement(id);
};
</script>

<template>
  <div>
    <div>
      <header>
        <span class="section-subtitle"> Poznaj nas lepiej! </span>

        <h2 class="section-title">O firmie</h2>
      </header>

      <div class="flex">
        <div class="basis-12/12 md:basis-6/12">
          <p class="paragraph">
            Biuro Rachunkowe <b>ADAMO</b> istnieje na rynku od 2011 roku.
          </p>

          <p class="paragraph">
            Biuro znajduje się w Bełchowie i świadczy kompleksową obsługę
            rachunkową dla osób prowadzących jednoosobową działalność
            gospodarczą oraz dla mikro i małych firm z wielu różnych branż.
          </p>

          <p class="paragraph">Stale rozszerzamy naszą działalność.</p>

          <p class="paragraph">Zapraszamy do współpracy nowych klientów.</p>

          <p class="paragraph">
            Prosimy o
            <button
              class="text-blue-700 hover:text-blue-900 focus:text-blue-900 focus:outline-none"
              @click="(ev) => scrollTo(ev, NavId.CONTACT)"
            >
              kontakt
            </button>
            telefoniczny, mailowy lub osobisty.
          </p>
        </div>

        <div class="img-wrapper basis-6/12">
          <div class="img"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.paragraph {
  @apply text-gray-700;
  margin-bottom: 1.5rem;
  line-height: 1.6rem;
}

.img {
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 45px;
  background-image: url("./about.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  transform: translate3d(10rem, 5rem, 0);
}

.img-wrapper {
  @media (max-width: 71.99rem) {
    display: none;
  }

  position: relative;

  &::after,
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: -9px;
    width: 100%;
    height: 100%;
    border-radius: 45px;
  }

  &::before {
    @apply border bg-white;
    transform: translate3d(8rem, 0, 0);
  }

  &::after {
    @apply border;
    transform: translate3d(13rem, 3rem, 0);
  }
}
</style>
