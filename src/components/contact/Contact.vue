<script setup lang="ts">
import ContactForm from "@/components/contact/ContactForm.vue";
</script>

<template>
  <header class="mb-6">
    <!--    <p class="section-subtitle">Chcesz nawiązać współpracę?</p>-->
    <p class="section-subtitle">Masz pytania?</p>

    <h2 class="section-title">Skontaktuj się z nami!</h2>
  </header>

  <div class="flex flex-wrap">
    <div class="basis-full md:basis-4/12">
      <address class="mb-4 not-italic">
        <p class="title mb-3">Kontakt</p>

        <div class="item">
          <img src="./icons/phone.svg" alt="" />
          <a
            href="tel:+604493830"
            class="link focus:outline-none focus:text-green-800"
            >604 493 830</a
          >
        </div>

        <div class="item">
          <img src="./icons/building.svg" alt="" />
          <a
            href="https://goo.gl/maps/fE1Lq2YLJM3HWFjHA"
            target="_blank"
            rel="noopener noreferrer"
            class="link focus:outline-none focus:text-green-800"
          >
            Polna 14, 99-418 Bełchów
          </a>
        </div>

        <div class="item">
          <img src="./icons/calendar.svg" alt="" />
          <div>
            <p class="mb-0.5">Poniedziałek - piątek</p>
            <p>7:00 - 16:00</p>
          </div>
        </div>
      </address>
    </div>

    <div class="basis-full md:basis-8/12">
      <p class="title mb-2">Napisz</p>

      <ContactForm />
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  @apply font-semibold text-gray-700;
}

.item {
  @apply flex mb-3 justify-items-start items-start;

  & img {
    margin-right: 0.5rem;
  }
}

.link {
  @apply text-base text-gray-800 rounded hover:text-green-800;
}
</style>
