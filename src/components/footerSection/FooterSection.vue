<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="max-w-6xl m-auto flex flex-wrap flex-col">
      <div class="lg:columns-3 mb-5">
        <div class="mb-4">
          <b>PHU „ADAMO” Bożena Klemba</b>
        </div>

        <div class="mb-4">
          <b>Adres</b>
          <p>ul. Polna 14</p>
          <p>99-418 Bełchów</p>
        </div>

        <div>
          <p><b>NIP</b>: 8341046912</p>
          <p><b>REGON</b>: 750724585</p>
        </div>
      </div>

      <div>
        <i>© PHU „ADAMO” Bożena Klemba - Wszelkie prawa zastrzeżone</i>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  @apply bg-stone-200 border-t px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 border-b border-gray-200 text-gray-700;
  padding: 2rem;

  @media (min-width: 72rem) {
    padding: 5rem;
  }
  // background: #e8e4e4;
  // background: rgba(200, 188, 170, 0.7);
  // background: hsla(5, 15%, 80%, 0.7);
}
</style>
