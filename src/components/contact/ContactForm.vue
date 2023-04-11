<script setup lang="ts">
// contact form docs: https://formsubmit.co/

import { ref } from "vue";

const RECEIVER_EMAIL_ADDRESS = "adamo.biurorachunkowe@gmail.com";

const textarea = ref<HTMLTextAreaElement | null>(null);

const resize = () => {
  console.log({ textarea });
  if (textarea.value) {
    // textarea.value.style.height = textarea.value.scrollHeight + "px";
  }
};
</script>

<template>
  <form
    class="w-full"
    :action="`https://formsubmit.co/${RECEIVER_EMAIL_ADDRESS}`"
    method="POST"
    lang="pl"
  >
    <input type="hidden" name="_captcha" value="false" />
    <input
      type="hidden"
      name="_subject"
      value="Wiadomość ze strony internetowej"
    />
    <input type="hidden" name="_template" value="box" />

    <div class="flex flex-wrap mb-1">
      <div class="w-full">
        <label
          for="email"
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-0.5"
        >
          E-mail
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-2 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="email"
          type="email"
          name="email"
          placeholder="twoj@email.com"
          oninvalid="this.setCustomValidity('Wpisz poprawny adres e-mail')"
          required
        />
      </div>
    </div>

    <div class="flex flex-wrap -mx-3">
      <div class="w-full px-3">
        <label
          for="message"
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-0.5"
        >
          Wiadomość
        </label>
        <textarea
          class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
          id="message"
          name="message"
          placeholder="Wpisz wiadomość"
          oninvalid="this.setCustomValidity('To pole jest wymagane')"
          required
          ref="textarea"
          rows="5"
          @focus="resize"
          @keyup="resize"
        />
      </div>
    </div>

    <small class="rodo text-gray-500">
      Klikając <i>„Wyślij”</i> wyrażasz zgodę na przetwarzanie Twoich danych
      osobowych w celu udzielenia odpowiedzi na wiadomość.
    </small>

    <div class="md:flex md:items-center">
      <button
        class="button bg-green-700 hover:bg-green-900 text-white font-bold py-1.5 px-4 rounded-full w-44 float-right ml-auto"
        type="submit"
      >
        <img src="./icons/email.svg" alt="" />
        Wyślij
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.rodo {
  @apply block mb-2;
  line-height: 1.1rem;
}

.button {
  display: flex;

  img {
    margin-right: 0.5rem;
  }
}
</style>
