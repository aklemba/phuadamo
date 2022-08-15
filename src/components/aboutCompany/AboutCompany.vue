<script setup lang="ts">
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { onMounted } from "vue";

onMounted(() => {
  const gs = gsap.to(".img", {
    scrollTrigger: {
      trigger: ".img",
      start: "top 90%",
      scrub: true,
    },
    y: -140,
    ease: "none",
  });

  return () => {
    gs.scrollTrigger?.kill();
  };
});
</script>

<template>
  <div>
    <div>
      <header>
        <span class="section-subtitle"> Poznaj nas lepiej! </span>

        <h2 class="section-title">O firmie</h2>
      </header>

      <div class="flex">
        <div class="basis-6/12">
          <p class="paragraph">
            <b>PHU ADAMO</b> to biuro rachunkowe z wieloletnim doświadczeniem na
            rynku.
          </p>

          <p class="paragraph">
            Nasz zespół składa się z doświadczonych i wykwalifikowanych
            pracowników, rzetelnych i chętnych do pomocy w każdym przypadku.
          </p>

          <p class="paragraph">
            Biuro znajduje się w Bełchowie i świadczy specjalistyczną obsługę
            rachunkowo-podatkową dla małych i średnich firm, a także dla
            jednoosobowych działalności gospodarczych.
          </p>

          <p class="paragraph">
            Jeżeli interesuje Państwa nasza obsługa podatkowa i macie wobec niej
            i naszej działalności pytania, zapraszamy do kontaktu telefonicznego
            lub mailowego z naszym biurem.
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
    @apply border;
    transform: translate3d(8rem, 0, 0);
  }
}
</style>
