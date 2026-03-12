<template>
  <div class="border rounded-lg bg-white p-4">
    <h3 class="font-semibold">Renewal Reminder</h3>
    <ul class="mt-2 text-sm">
      <li v-for="p in upcoming" :key="p.id">
        <span class="font-medium">{{ p.policyName }}</span> — renews in <strong>{{ daysTo(p.renewalDate) }}</strong> days
      </li>
    </ul>
  </div>
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
