<script setup lang="ts">
import TopNav from "@/components/topNav/TopNav.vue";
import HeroHeader from "@/components/heroHeader/HeroHeader.vue";
import AboutCompanySection from "@/components/aboutCompany/AboutCompany.vue";
import ContactSection from "@/components/contact/Contact.vue";
import OfferSection from "@/components/offer/Offer.vue";
import SectionWrapper from "@/components/section/SectionWrapper.vue";
import FooterSection from "@/components/footerSection/FooterSection.vue";
import { NavId } from "@/components/topNav/TopNav.types";
</script>

<template>
  <TopNav />

  <HeroHeader />

  <main>
    <SectionWrapper :id="NavId.ABOUT">
      <AboutCompanySection />
    </SectionWrapper>

    <SectionWrapper :id="NavId.OFFER">
      <OfferSection />
    </SectionWrapper>

    <SectionWrapper :id="NavId.CONTACT">
      <ContactSection />
    </SectionWrapper>
  </main>

  <FooterSection />
</template>

<style scoped></style>
