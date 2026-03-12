<template>
  <div class="border rounded-lg bg-white p-4">
    <h3 class="font-semibold">Policy Comparison</h3>
    <div class="mt-3 grid sm:grid-cols-2 gap-3">
      <select v-model="a" class="border rounded px-2 py-1">
        <option disabled value="">Select policy A</option>
        <option v-for="p in policies" :value="p.id" :key="'a-'+p.id">{{ p.policyName }}</option>
      </select>
      <select v-model="b" class="border rounded px-2 py-1">
        <option disabled value="">Select policy B</option>
        <option v-for="p in policies" :value="p.id" :key="'b-'+p.id">{{ p.policyName }}</option>
      </select>
    </div>
    <div v-if="a && b" class="mt-4 overflow-auto">
      <table class="min-w-full text-sm">
        <thead><tr class="text-left"><th class="pr-4">Field</th><th class="pr-4">A</th><th>B</th></tr></thead>
        <tbody>
          <tr><td class="py-1">Premium</td><td>₹{{ getById(a).premium.toLocaleString() }}</td><td>₹{{ getById(b).premium.toLocaleString() }}</td></tr>
          <tr><td class="py-1">Coverage</td><td>{{ getById(a).coverage }}</td><td>{{ getById(b).coverage }}</td></tr>
          <tr><td class="py-1">Type</td><td>{{ getById(a).type }}</td><td>{{ getById(b).type }}</td></tr>
          <tr><td class="py-1">Renewal</td><td>{{ getById(a).renewalDate }}</td><td>{{ getById(b).renewalDate }}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
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
</script>
