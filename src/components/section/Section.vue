<script setup lang="ts">
import type { NavId } from "@/components/topNav/TopNav.types";

const props = defineProps<{
  id: NavId;
}>();
</script>

<template>
  <section :id="props.id" class="max-w-6xl mx-auto">
    <slot />
  </section>
</template>

<style scoped lang="scss"></style>
