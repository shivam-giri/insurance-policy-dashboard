<template>
  <section class="surface-card p-5 sm:p-6">
    <div class="max-w-2xl">
      <h3 class="panel-title">Policy comparison</h3>
      <p class="panel-copy mt-1">Place two relevant plans side by side and compare them with cleaner guardrails around type, price, and renewal timing.</p>
    </div>

    <div class="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr_auto]">
      <label>
        <span class="field-label">Policy Type</span>
        <select v-model="compareType" class="input-shell">
          <option value="">All Types</option>
          <option v-for="type in policyTypes" :key="type" :value="type">{{ type }}</option>
        </select>
      </label>
      <label>
        <span class="field-label">Sort Policies By</span>
        <select v-model="sortBy" class="input-shell">
          <option value="recommended">Recommended order</option>
          <option value="premium-asc">Premium: Low to high</option>
          <option value="premium-desc">Premium: High to low</option>
          <option value="renewal-soon">Renewal: Soonest first</option>
          <option value="name-asc">Name: A to Z</option>
        </select>
      </label>
      <button class="secondary-button lg:self-end" type="button" @click="resetComparison">Reset</button>
    </div>

    <div class="mt-5 rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-600">
      <p class="font-semibold text-slate-800">Comparison guardrail</p>
      <p class="mt-1 leading-6">
        You can only compare policies within the same category. Once you pick one plan, the second list narrows to matching policy types and hides the already-selected plan.
      </p>
      <p class="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {{ helperText }}
      </p>
    </div>

    <div class="mt-6 grid gap-4 md:grid-cols-2">
      <label>
        <span class="field-label">Policy A</span>
        <select v-model="a" class="input-shell">
          <option disabled value="">Select policy A</option>
          <option v-for="p in optionsForA" :value="String(p.id)" :key="'a-'+p.id">
            {{ p.policyName }} - {{ p.type }}
          </option>
        </select>
      </label>
      <label>
        <span class="field-label">Policy B</span>
        <select v-model="b" class="input-shell">
          <option disabled value="">Select policy B</option>
          <option v-for="p in optionsForB" :value="String(p.id)" :key="'b-'+p.id">
            {{ p.policyName }} - {{ p.type }}
          </option>
        </select>
      </label>
    </div>

    <div v-if="comparisonReady" class="mt-6 overflow-x-auto rounded-[28px] border border-slate-100 bg-slate-50">
      <table class="min-w-[640px] text-sm sm:min-w-full">
        <thead class="bg-slate-950 text-left text-white">
          <tr>
            <th class="px-5 py-4 font-medium uppercase tracking-[0.18em] text-slate-300">Field</th>
            <th class="px-5 py-4 font-medium uppercase tracking-[0.18em] text-slate-300">{{ policyA.policyName }}</th>
            <th class="px-5 py-4 font-medium uppercase tracking-[0.18em] text-slate-300">{{ policyB.policyName }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Premium</td>
            <td class="px-5 py-4 font-semibold text-slate-900">{{ formatCurrency(policyA.premium) }}</td>
            <td class="px-5 py-4 font-semibold text-slate-900">{{ formatCurrency(policyB.premium) }}</td>
          </tr>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Coverage</td>
            <td class="px-5 py-4 text-slate-700">{{ policyA.coverage }}</td>
            <td class="px-5 py-4 text-slate-700">{{ policyB.coverage }}</td>
          </tr>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Type</td>
            <td class="px-5 py-4 text-slate-700">{{ policyA.type }}</td>
            <td class="px-5 py-4 text-slate-700">{{ policyB.type }}</td>
          </tr>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Renewal</td>
            <td class="px-5 py-4 text-slate-700">{{ formatDate(policyA.renewalDate) }}</td>
            <td class="px-5 py-4 text-slate-700">{{ formatDate(policyB.renewalDate) }}</td>
          </tr>
          <tr class="border-t border-slate-200">
            <td class="px-5 py-4 font-medium text-slate-500">Status</td>
            <td class="px-5 py-4 text-slate-700">{{ policyA.status }}</td>
            <td class="px-5 py-4 text-slate-700">{{ policyB.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="mt-6 rounded-[28px] border border-dashed border-slate-300 bg-white px-5 py-8 text-center">
      <p class="text-sm font-semibold text-slate-800">Pick two policies from the same type to unlock the comparison table.</p>
      <p class="mt-2 text-sm leading-6 text-slate-500">
        Use the type filter to narrow the list first, or choose one policy and the second list will automatically stay within that policy category.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { usePolicyStore } from '../store/policyStore'

const store = usePolicyStore()
const a = ref('')
const b = ref('')
const compareType = ref('')
const sortBy = ref('recommended')

const policies = computed(() => store.policies)
const policyTypes = computed(() => [...new Set(policies.value.map(p => p.type))].sort())

function getById(id){
  return policies.value.find(p => String(p.id) === String(id)) || null
}

const policyA = computed(() => getById(a.value))
const policyB = computed(() => getById(b.value))

const lockedType = computed(() => compareType.value || policyA.value?.type || policyB.value?.type || '')

const sortedPolicies = computed(() => {
  const items = policies.value
    .filter(p => lockedType.value ? p.type === lockedType.value : true)
    .slice()

  switch (sortBy.value) {
    case 'premium-asc':
      return items.sort((left, right) => left.premium - right.premium)
    case 'premium-desc':
      return items.sort((left, right) => right.premium - left.premium)
    case 'renewal-soon':
      return items.sort((left, right) => new Date(left.renewalDate) - new Date(right.renewalDate))
    case 'name-asc':
      return items.sort((left, right) => left.policyName.localeCompare(right.policyName))
    default:
      return items.sort((left, right) => {
        if (left.type !== right.type) return left.type.localeCompare(right.type)
        return left.premium - right.premium
      })
  }
})

const optionsForA = computed(() =>
  sortedPolicies.value.filter(p => String(p.id) !== b.value)
)

const optionsForB = computed(() =>
  sortedPolicies.value.filter(p => String(p.id) !== a.value)
)

const comparisonReady = computed(() =>
  Boolean(
    policyA.value &&
    policyB.value &&
    policyA.value.type === policyB.value.type &&
    a.value !== b.value
  )
)

const helperText = computed(() => {
  const visibleCount = sortedPolicies.value.length
  const scopeLabel = lockedType.value
    ? `within ${lockedType.value}`
    : 'across all policy types'
  return `${visibleCount} option${visibleCount === 1 ? '' : 's'} available ${scopeLabel}`
})

watch(compareType, (nextType) => {
  if (nextType && policyA.value && policyA.value.type !== nextType) {
    a.value = ''
  }
  if (nextType && policyB.value && policyB.value.type !== nextType) {
    b.value = ''
  }
})

watch(a, (nextValue) => {
  if (nextValue && nextValue === b.value) {
    a.value = ''
    return
  }
  if (policyA.value && policyB.value && policyA.value.type !== policyB.value.type) {
    b.value = ''
  }
})

watch(b, (nextValue) => {
  if (nextValue && nextValue === a.value) {
    b.value = ''
    return
  }
  if (policyA.value && policyB.value && policyA.value.type !== policyB.value.type) {
    b.value = ''
  }
})

function resetComparison() {
  a.value = ''
  b.value = ''
  compareType.value = ''
  sortBy.value = 'recommended'
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
