<script setup lang="ts">
import TopNav from "@/components/topNav/TopNav.vue";
import HeroHeader from "@/components/heroHeader/HeroHeader.vue";
import AboutCompanySection from "@/components/aboutCompany/AboutCompany.vue";
import ContactSection from "@/components/contact/Contact.vue";
import OfferSection from "@/components/offer/Offer.vue";
import FooterSection from "@/components/footerSection/FooterSection.vue";
import { NavId } from "@/components/topNav/TopNav.types";
</script>

<template>
  <TopNav />

  <HeroHeader />

  <main>
    <section class="section" :id="NavId.ABOUT">
      <AboutCompanySection />
    </section>

    <section :id="NavId.OFFER">
      <OfferSection />
    </section>

    <section class="section" :id="NavId.CONTACT">
      <ContactSection />
    </section>
  </main>

  <FooterSection />
</template>

<style scoped></style>
