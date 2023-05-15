<script setup lang="ts">
import type { OfferItem } from "@/components/offer/Offer.types";

const offerBoxes: OfferItem[] = [
  {
    name: "Usługi księgowe",
    icon: "",
  },
  {
    name: "Kadry i płace",
    icon: "",
  },
  {
    name: "Konsultacje",
    icon: "",
  },
];
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <header class="text-center">
      <span class="section-subtitle mb-4 text-xl">
        Sprawdź, co oferujemy!
      </span>

      <h2 class="section-title text-5xl mb-6">Zakres usług</h2>
    </header>

    <div>
      <ul class="mt-4 list list-disc ml-4.5 mb-5">
        <li v-for="offerBox in offerBoxes" :key="offerBox.name" class="mb-1">
          <span class="font-semibold text-center">
            {{ offerBox.name }}
          </span>
        </li>
      </ul>

      <p class="paragraph">
        Oferujemy pełen zakres usług rachunkowych, prowadzenie dokumentacji
        kadrowo-płacowej oraz innych usług uzgodnionych z klientem.
      </p>

      <p class="paragraph">
        Zapewniamy konsultacje na każdym etapie współpracy.
      </p>

      <p class="paragraph">
        Pomagamy <b>bezpłatnie</b> przy założeniu własnej działalności.
      </p>

      <p class="paragraph">
        Korzystamy z nowoczesnych narzędzi ułatwiających współpracę z klientem.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.offer-section {
  padding: 6rem 0;
}

.paragraph {
  @apply text-gray-700;
  margin-bottom: 0.5rem;
  line-height: 1.6rem;
}

.wrapper {
  @apply border basis-full bg-white m-2;
  border-radius: 20px;
}

.offerBox {
  @apply border basis-full md:basis-6/12 lg:basis-3/12 p-3 bg-white m-2;
  border-radius: 20px;
}
</style>
