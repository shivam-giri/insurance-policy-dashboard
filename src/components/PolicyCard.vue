<template>
  <article class="surface-card group relative overflow-hidden p-5 transition duration-300 hover:-translate-y-1">
    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-amber-300"></div>
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{{ policy.type }} plan</p>
        <h3 class="mt-2 text-xl font-semibold tracking-tight text-slate-950">{{ policy.policyName }}</h3>
      </div>
      <span :class="statusClass">{{ policy.status }}</span>
    </div>
    <div class="mt-6 rounded-[24px] bg-slate-950 px-4 py-4 text-white">
      <p class="text-xs uppercase tracking-[0.24em] text-slate-300">Annual premium</p>
      <p class="mt-2 text-3xl font-semibold">{{ formatCurrency(policy.premium) }}</p>
    </div>
    <dl class="mt-5 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
      <div class="rounded-2xl bg-slate-50 px-4 py-3">
        <dt class="text-xs uppercase tracking-[0.18em] text-slate-400">Coverage</dt>
        <dd class="mt-2 font-semibold text-slate-800">{{ policy.coverage }}</dd>
      </div>
      <div class="rounded-2xl bg-slate-50 px-4 py-3">
        <dt class="text-xs uppercase tracking-[0.18em] text-slate-400">Renewal</dt>
        <dd class="mt-2 font-semibold text-slate-800">{{ formatDate(policy.renewalDate) }}</dd>
      </div>
    </dl>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  policy: { type: Object, required: true }
})

const statusClass = computed(() => [
  'badge',
  props.policy.status === 'Active'
    ? 'bg-emerald-50 text-emerald-700'
    : 'bg-amber-50 text-amber-700'
])

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value)
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(value))
}
</script>
