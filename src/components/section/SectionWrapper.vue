<script setup lang="ts">
import type { NavId } from "@/components/topNav/TopNav.types";

const props = defineProps<{
  id: NavId;
}>();
</script>

<template>
  <section :id="props.id" class="section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
.section {
  @apply max-w-6xl mx-auto border;
  margin: 10rem auto;
  padding: 5rem;
  border-radius: 45px;
}
</style>
