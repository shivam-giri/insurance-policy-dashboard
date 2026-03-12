<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <PolicyCard v-for="p in policies" :key="p.id" :policy="p" />
  </div>
</template>

<script setup>
import PolicyCard from './PolicyCard.vue'

defineProps({
  policies: { type: Array, default: () => [] }
})
</script>
