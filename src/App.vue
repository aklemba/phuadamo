<script setup lang="ts">
import TopNav from "@/components/topNav/TopNav.vue";
import HeroHeader from "@/components/heroHeader/HeroHeader.vue";
import AboutCompanySection from "@/components/aboutCompany/AboutCompany.vue";
import ContactSection from "@/components/contact/Contact.vue";
import OfferSection from "@/components/offer/Offer.vue";
import FooterSection from "@/components/footerSection/FooterSection.vue";
import { NavId } from "@/components/topNav/TopNav.types";
import PriceListSection from "@/components/priceList/PriceList.vue";
</script>

<template>
  <TopNav />

  <HeroHeader />

  <main>
    <section class="section" :id="NavId.ABOUT">
      <AboutCompanySection />
    </section>

    <div class="img-wrapper">
      <div class="img"></div>
    </div>

    <section class="section" :id="NavId.OFFER">
      <OfferSection />
    </section>

    <section class="section" :id="NavId.PRICE_LIST">
      <PriceListSection />
    </section>

    <section class="section" :id="NavId.CONTACT">
      <ContactSection />
    </section>
  </main>

  <FooterSection />
</template>

<style scoped lang="scss">
.img-wrapper {
  height: max-content;
  position: relative;

  @media (min-width: 72rem) {
    display: none;
  }
}

.img {
  background-image: url("./components/aboutCompany/about.jpg");
  width: 100%;
  min-height: 10rem;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw;
}
</style>
