<script setup lang="ts">
import { type NavItem, NavId } from "@/components/topNav/TopNav.types";
import { ref, computed } from "vue";
import { scrollToElement } from "@/utils/scrollTo";

const isMobileMenuOpen = ref(false);
const toggleButtonTitle = computed(() =>
  isMobileMenuOpen.value ? "Zamknij menu" : "Otwórz menu"
);

const toggle = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollTo = (event: Event, id?: string) => {
  event.preventDefault();
  scrollToElement(id);
};

const navItems: NavItem[] = [
  {
    title: "O firmie",
    href: NavId.ABOUT,
  },
  {
    title: "Oferta",
    href: NavId.OFFER,
  },
  {
    title: "Cennik",
    href: NavId.PRICE_LIST,
  },
  {
    title: "Kontakt",
    href: NavId.CONTACT,
  },
];
</script>

<template>
  <nav
    class="nav bg-white px-2 sm:px-4 py-1 sticky w-full z-20 top-0 left-0 border-b border-gray-200"
  >
    <div
      class="max-w-5xl container flex flex-wrap justify-between items-center mx-auto px-2"
    >
      <a href="/#" class="flex items-center" @click="(ev) => scrollTo(ev)">
        <span class="self-center text-xl font-semibold whitespace-nowrap">
          ADAMO
        </span>
      </a>

      <div class="flex md:order-2">
        <button
          type="button"
          class="mobile-menu-button inline-flex items-center p-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          :title="toggleButtonTitle"
          @click="toggle"
        >
          <span class="sr-only">{{ toggleButtonTitle }}</span>
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div
        class="justify-between items-center w-full md:flex md:w-auto md:order-1 ml-auto"
        :class="isMobileMenuOpen ? 'flex' : 'hidden'"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-2 mt-2 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white"
        >
          <li v-for="navItem in navItems" :key="navItem.href">
            <a
              :href="'#' + navItem.href"
              class="block text-base py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-800 md:py-0"
              @click="(ev) => scrollTo(ev, navItem.href)"
            >
              {{ navItem.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss"></style>
