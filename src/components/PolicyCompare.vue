<template>
  <section class="surface-card p-5 sm:p-6">
    <div class="max-w-2xl">
      <h3 class="panel-title">Policy comparison</h3>
      <p class="panel-copy mt-1">Place two plans side by side and scan the practical differences in premium, coverage, and renewal timing.</p>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-2">
      <label>
        <span class="field-label">Policy A</span>
        <select v-model="a" class="input-shell">
          <option disabled value="">Select policy A</option>
          <option v-for="p in policies" :value="p.id" :key="'a-'+p.id">{{ p.policyName }}</option>
        </select>
      </label>
      <label>
        <span class="field-label">Policy B</span>
        <select v-model="b" class="input-shell">
          <option disabled value="">Select policy B</option>
          <option v-for="p in policies" :value="p.id" :key="'b-'+p.id">{{ p.policyName }}</option>
        </select>
      </label>
    </div>

    <div v-if="a && b" class="mt-6 overflow-x-auto rounded-[28px] border border-slate-100 bg-slate-50">
      <table class="min-w-[640px] text-sm sm:min-w-full">
        <thead class="bg-slate-950 text-left text-white">
          <tr>
            <th class="px-5 py-4 font-medium uppercase tracking-[0.18em] text-slate-300">Field</th>
            <th class="px-5 py-4 font-medium uppercase tracking-[0.18em] text-slate-300">{{ getById(a).policyName }}</th>
            <th class="px-5 py-4 font-medium uppercase tracking-[0.18em] text-slate-300">{{ getById(b).policyName }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Premium</td>
            <td class="px-5 py-4 font-semibold text-slate-900">{{ formatCurrency(getById(a).premium) }}</td>
            <td class="px-5 py-4 font-semibold text-slate-900">{{ formatCurrency(getById(b).premium) }}</td>
          </tr>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Coverage</td>
            <td class="px-5 py-4 text-slate-700">{{ getById(a).coverage }}</td>
            <td class="px-5 py-4 text-slate-700">{{ getById(b).coverage }}</td>
          </tr>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Type</td>
            <td class="px-5 py-4 text-slate-700">{{ getById(a).type }}</td>
            <td class="px-5 py-4 text-slate-700">{{ getById(b).type }}</td>
          </tr>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Renewal</td>
            <td class="px-5 py-4 text-slate-700">{{ formatDate(getById(a).renewalDate) }}</td>
            <td class="px-5 py-4 text-slate-700">{{ formatDate(getById(b).renewalDate) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { usePolicyStore } from '../store/policyStore'

const store = usePolicyStore()
const policies = computed(() => store.policies)
const a = ref('')
const b = ref('')

function getById(id){
  return policies.value.find(p => p.id === id) || {}
}

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value || 0)
}

function formatDate(value) {
  if (!value) return '--'
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).format(new Date(value))
}
</script>
