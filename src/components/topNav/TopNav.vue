<script setup lang="ts">
import { type NavItem, NavId } from "@/components/topNav/TopNav.types";
import { ref, computed } from "vue";

const isMobileMenuOpen = ref(false);
const toggleButtonTitle = computed(() =>
  isMobileMenuOpen.value ? "Zamknij menu" : "Otwórz menu"
);

const toggle = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
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
    title: "Kontakt",
    href: NavId.CONTACT,
  },
];
</script>

<template>
  <nav
    class="nav bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="max-w-5xl container flex flex-wrap justify-between items-center mx-auto"
    >
      <a href="/" class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
        >
          Adamo
        </span>
      </a>

      <div class="flex md:order-2">
        <button
          type="button"
          class="mobile-menu-button inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          :title="toggleButtonTitle"
          @click="toggle"
        >
          <span class="sr-only">{{ toggleButtonTitle }}</span>
          <svg
            class="w-6 h-6"
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
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="navItem in navItems">
            <a
              :href="'#' + navItem.href"
              class="block text-base py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-800 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
