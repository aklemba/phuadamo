<script setup lang="ts">
import { type PropType } from "vue";
import { NavId } from "@/components/topNav/TopNav.types";

const props = defineProps({
  id: {
    type: String as PropType<NavId>,
    required: true,
  },
});
</script>

<template>
  <section :id="props.id" class="max-w-6xl mx-auto">
    <slot />
  </section>
</template>

<style scoped lang="scss"></style>
