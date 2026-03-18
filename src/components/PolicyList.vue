<template>
  <section class="space-y-4">
    <div class="flex items-end justify-between gap-4">
      <div>
        <h3 class="panel-title">Portfolio snapshot</h3>
        <p class="panel-copy mt-1">A quick look at premiums, status, and renewal timing across your policies.</p>
      </div>
      <div class="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {{ policies.length }} policies
      </div>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <PolicyCard v-for="p in policies" :key="p.id" :policy="p" />
    </div>
  </section>
</template>

<script setup>
import PolicyCard from './PolicyCard.vue'

defineProps({
  policies: { type: Array, default: () => [] }
})
</script>
