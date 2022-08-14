<script setup lang="ts">
import TopNav from "@/components/topNav/TopNav.vue";
import HeroHeader from "@/components/heroHeader/HeroHeader.vue";
import AboutCompany from "@/components/aboutCompany/AboutCompany.vue";
import Contact from "@/components/contact/Contact.vue";
import Offer from "@/components/offer/Offer.vue";
import { NavId } from "@/components/topNav/TopNav.types";
import Section from "@/components/section/Section.vue";
</script>

<template>
  <TopNav />

  <HeroHeader />

  <main>
    <Section :id="NavId.ABOUT">
      <AboutCompany />
    </Section>

    <Section :id="NavId.OFFER">
      <Offer />
    </Section>

    <Section :id="NavId.CONTACT">
      <Contact />
    </Section>
  </main>
</template>

<style scoped></style>
