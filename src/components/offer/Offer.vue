<script setup lang="ts">
import type { OfferItem } from "@/components/offer/Offer.types";

const offerBoxes: OfferItem[] = [
  {
    name: "Usługi księgowe",
    icon: "",
    content:
      "Prowadzenie ksiąg podatkowych, przygotowanie niezbędnych deklaracji podatkowych, deklaracje roczne",
  },
  {
    name: "Obsługa kadrowa",
    icon: "",
    content: "Administrowanie kadrami i płacami",
  },
  {
    name: "Doradztwo gospodarcze",
    icon: "",
    content: "Zakładanie, przekształcanie, prowadzenie działalności",
  },
  {
    name: "Usługi księgowe",
    icon: "",
    content:
        "Prowadzenie ksiąg podatkowych, przygotowanie niezbędnych deklaracji podatkowych, deklaracje roczne",
  },
  {
    name: "Obsługa kadrowa",
    icon: "",
    content: "Administrowanie kadrami i płacami",
  },
  {
    name: "Doradztwo gospodarcze",
    icon: "",
    content: "Zakładanie, przekształcanie, prowadzenie działalności",
  },
];
</script>

<template>
  <div class="offer-section mx-auto max-w-7xl">
    <header class="text-center">
      <span class="section-subtitle"> Sprawdź, co oferujemy! </span>

      <h2 class="section-title">Zakres usług</h2>
    </header>

    <ul class="flex flex-wrap content-between justify-between">
      <li
        v-for="offerBox in offerBoxes"
        :key="offerBox.name"
        class="offerBox flex-1"
      >
        <div class="border-b mb-2">
          <span class="font-semibold">
            {{ offerBox.name }}
          </span>
        </div>

        <div>
          <p>
            {{ offerBox.content }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.offer-section {
  padding: 6rem 0;
}

.offerBox {
  @apply border basis-full md:basis-6/12 lg:basis-3/12 p-3 bg-white m-2;
  border-radius: 20px;
}
</style>
