<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="max-w-6xl m-auto flex flex-wrap flex-col">
      <div class="lg:columns-3 mb-5">
        <div class="mb-4">
          <b>PHU Adamo</b>
        </div>

        <div class="mb-4">
          <b>Adres</b>
          <p>ul. Polna 14</p>
          <p>99-418 Bełchów</p>
        </div>

        <div>
          <b>Przedsiębiorstwo handlowo-usługowe</b>
          <p>NIP: 8341046912</p>
          <p>Nieborów</p>
        </div>
      </div>

      <div>
        <i>© PHU ADAMO Bożena Klemba - Wszelkie prawa zastrzeżone</i>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  @apply bg-gray-100 px-2 sm:px-4 py-2.5 sticky w-full z-20 top-0 left-0 border-b border-gray-200 text-gray-700;
  padding: 5rem;
}
</style>
