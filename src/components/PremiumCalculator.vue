<template>
  <section class="surface-card overflow-hidden p-5 sm:p-6">
    <div class="flex items-start justify-between gap-4">
      <div>
        <h3 class="panel-title">Premium calculator</h3>
        <p class="panel-copy mt-1">Estimate a yearly premium with a fast what-if scenario before comparing plans.</p>
      </div>
      <div class="rounded-2xl bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
        Quick estimate
      </div>
    </div>

    <form class="mt-6 grid gap-4 sm:grid-cols-3" @submit.prevent="calculate">
      <label>
        <span class="field-label">Age</span>
        <input v-model.number="age" type="number" min="18" max="70" class="input-shell" required />
      </label>
      <label>
        <span class="field-label">Sum Insured</span>
        <input v-model.number="sumInsured" type="number" min="100000" step="50000" class="input-shell" required />
      </label>
      <label>
        <span class="field-label">Tenure (Years)</span>
        <input v-model.number="tenure" type="number" min="1" max="5" class="input-shell" required />
      </label>
      <button class="primary-button sm:col-span-3" type="submit">Calculate premium</button>
    </form>

    <div class="mt-6 rounded-[24px] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 px-5 py-5 text-white">
      <p class="text-xs uppercase tracking-[0.24em] text-slate-300">Estimated annual premium</p>
      <p class="mt-3 text-3xl font-semibold">{{ result ? formatCurrency(result) : 'Run the estimate' }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { estimatePremium } from '../services/premium'

const age = ref(30)
const sumInsured = ref(500000)
const tenure = ref(1)
const result = ref(null)

function calculate(){
  result.value = estimatePremium({ age: age.value, sumInsured: sumInsured.value, tenure: tenure.value })
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value)
}
</script>
