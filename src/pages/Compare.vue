<template>
  <div class="space-y-8">
    <section class="surface-card px-6 py-8 sm:px-8">
      <div class="max-w-3xl space-y-4">
        <div class="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">
          Side-by-side review
        </div>
        <h1 class="text-4xl font-semibold tracking-tight text-slate-950">Compare policies with less visual noise and faster decisions.</h1>
        <p class="text-base leading-7 text-slate-600">
          Use this view to weigh premium, coverage, and renewal dates before choosing which plan deserves closer attention.
        </p>
      </div>
    </section>
    <PolicyCompare />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePolicyStore } from '../store/policyStore'
import PolicyCompare from '../components/PolicyCompare.vue'

const store = usePolicyStore()

onMounted(() => {
  if (!store.policies.length) store.loadPolicies()
})
</script>
