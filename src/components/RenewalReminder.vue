<template>
  <section class="surface-card p-5 sm:p-6">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="panel-title">Renewal timeline</h3>
        <p class="panel-copy mt-1">Focus first on policies approaching their renewal window.</p>
      </div>
      <div class="rounded-2xl bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
        Next 5 due
      </div>
    </div>

    <ul class="mt-6 space-y-3">
      <li v-for="p in upcoming" :key="p.id" class="rounded-[24px] border border-slate-100 bg-slate-50 px-4 py-4">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-slate-900">{{ p.policyName }}</p>
            <p class="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{{ p.type }} policy</p>
          </div>
          <div class="text-right">
            <p class="text-xl font-semibold text-slate-900">{{ daysTo(p.renewalDate) }}</p>
            <p class="text-xs uppercase tracking-[0.18em] text-slate-400">days left</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { usePolicyStore } from '../store/policyStore'

const store = usePolicyStore()
const upcoming = computed(() => store.policies.slice().sort((a,b)=> new Date(a.renewalDate)-new Date(b.renewalDate)).slice(0,5))

function daysTo(dateStr){
  const d = new Date(dateStr)
  const diff = Math.ceil((d - new Date())/ (1000*60*60*24))
  return diff
}
</script>
