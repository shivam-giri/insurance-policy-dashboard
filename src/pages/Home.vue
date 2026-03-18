<template>
  <div class="space-y-8">
    <section class="surface-card overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
      <div class="grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-end">
        <div class="space-y-5">
          <div class="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
            Smart Coverage Overview
          </div>
          <div class="max-w-3xl space-y-4">
            <h1 class="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Keep every policy in one calm, high-visibility command center.
            </h1>
            <p class="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Review active plans, compare premiums, and catch renewal deadlines before they turn into last-minute work.
            </p>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div class="rounded-3xl bg-slate-950 px-5 py-5 text-white shadow-xl shadow-slate-300/60">
            <p class="text-xs uppercase tracking-[0.22em] text-slate-300">Policies loaded</p>
            <p class="mt-3 text-3xl font-semibold">{{ store.policies.length }}</p>
          </div>
          <div class="rounded-3xl bg-white px-5 py-5 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.18)]">
            <p class="text-xs uppercase tracking-[0.22em] text-slate-400">Visible now</p>
            <p class="mt-3 text-3xl font-semibold text-slate-900">{{ policies.length }}</p>
          </div>
          <div class="rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-white px-5 py-5 shadow-[inset_0_0_0_1px_rgba(251,191,36,0.2)]">
            <p class="text-xs uppercase tracking-[0.22em] text-amber-700">Next renewal</p>
            <p class="mt-3 text-lg font-semibold text-slate-900">{{ nextRenewalLabel }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="grid gap-6 lg:grid-cols-3">
      <div class="space-y-6 lg:col-span-2">
        <SearchFilter />
        <PolicyList :policies="policies" />
      </div>
      <div class="space-y-6">
        <PremiumCalculator />
        <RenewalReminder />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { usePolicyStore } from '../store/policyStore'
import PolicyList from '../components/PolicyList.vue'
import PremiumCalculator from '../components/PremiumCalculator.vue'
import RenewalReminder from '../components/RenewalReminder.vue'
import SearchFilter from '../components/SearchFilter.vue'

const store = usePolicyStore()
const policies = computed(() => store.filtered.length ? store.filtered : store.policies)
const nextRenewalLabel = computed(() => {
  if (!store.policies.length) return 'Loading'
  const next = [...store.policies].sort((a, b) => new Date(a.renewalDate) - new Date(b.renewalDate))[0]
  return next ? next.renewalDate : 'No policies'
})

onMounted(() => {
  store.loadPolicies()
})
</script>
