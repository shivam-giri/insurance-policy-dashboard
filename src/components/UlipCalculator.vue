<template>
  <section class="surface-card overflow-hidden p-5 sm:p-6">
    <div class="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <div class="flex flex-col items-start justify-between gap-4 sm:flex-row">
          <div>
            <h3 class="panel-title">ULIP calculator</h3>
            <p class="panel-copy mt-1">
              Estimate long-term ULIP maturity value by combining annual premiums, policy term, and expected fund growth.
            </p>
          </div>
          <div class="rounded-2xl bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Investment view
          </div>
        </div>

        <form class="mt-6 grid gap-4 sm:grid-cols-2" @submit.prevent="calculate">
          <label>
            <span class="field-label">Annual Premium</span>
            <input v-model.number="annualPremium" type="number" min="12000" step="5000" class="input-shell" required />
          </label>
          <label>
            <span class="field-label">Expected Return (%)</span>
            <input v-model.number="expectedReturn" type="number" min="1" max="20" step="0.5" class="input-shell" required />
          </label>
          <label>
            <span class="field-label">Policy Term (Years)</span>
            <input v-model.number="policyTerm" type="number" min="5" max="40" class="input-shell" required />
          </label>
          <label>
            <span class="field-label">Allocation Charge (%)</span>
            <input v-model.number="allocationCharge" type="number" min="0" max="15" step="0.5" class="input-shell" required />
          </label>
          <button class="primary-button sm:col-span-2" type="submit">Calculate ULIP returns</button>
        </form>

        <div class="mt-5 rounded-[24px] bg-slate-50 px-5 py-5">
          <p class="text-sm font-semibold text-slate-800">How this estimate works</p>
          <p class="mt-2 text-sm leading-6 text-slate-500">
            We spread your annual premium across monthly contributions, deduct the allocation charge, and grow the fund at the expected annual return for the full policy term.
          </p>
        </div>
      </div>

      <div class="rounded-[28px] border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 p-5 text-white sm:p-6">
        <p class="text-xs uppercase tracking-[0.24em] text-emerald-200">Estimated maturity value</p>
        <p class="mt-3 break-words text-3xl font-semibold sm:text-4xl">{{ formatCurrency(result.fundValue) }}</p>
        <p class="mt-3 max-w-md text-sm leading-6 text-slate-300">
          This gives you a directional view of possible ULIP outcomes so you can compare scenarios before making a long-term investment decision.
        </p>

        <dl class="mt-8 space-y-4">
          <div class="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <dt class="text-sm text-slate-300">Total premium paid</dt>
            <dd class="text-lg font-semibold">{{ formatCurrency(result.totalInvested) }}</dd>
          </div>
          <div class="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <dt class="text-sm text-slate-300">Estimated wealth gain</dt>
            <dd class="text-lg font-semibold">{{ formatCurrency(result.wealthGain) }}</dd>
          </div>
          <div class="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <dt class="text-sm text-slate-300">Net yearly invested</dt>
            <dd class="text-lg font-semibold">{{ formatCurrency(result.netAnnualPremium) }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { calculateUlipProjection } from '../services/ulip'

const annualPremium = ref(100000)
const expectedReturn = ref(10)
const policyTerm = ref(15)
const allocationCharge = ref(5)
const result = reactive({
  fundValue: 0,
  totalInvested: 0,
  wealthGain: 0,
  netAnnualPremium: 0
})

function calculate() {
  Object.assign(
    result,
    calculateUlipProjection({
      annualPremium: annualPremium.value,
      expectedReturn: expectedReturn.value,
      policyTerm: policyTerm.value,
      premiumAllocationCharge: allocationCharge.value / 100
    })
  )
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value || 0)
}

calculate()
</script>
