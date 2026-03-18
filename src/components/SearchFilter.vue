<template>
  <div class="surface-card p-5 sm:p-6">
    <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <h3 class="panel-title">Search and filter</h3>
        <p class="panel-copy mt-1">Narrow the list by policy name or coverage type without leaving the dashboard.</p>
      </div>
      <button class="secondary-button" @click="clear">Reset filters</button>
    </div>
    <div class="mt-5 grid gap-4 md:grid-cols-[1.5fr_1fr]">
      <label>
        <span class="field-label">Keyword</span>
        <input v-model="q" placeholder="Search by policy name or type" class="input-shell" />
      </label>
      <label>
        <span class="field-label">Policy Type</span>
        <select v-model="type" class="input-shell">
          <option value="">All Types</option>
          <option>Health</option>
          <option>Term</option>
          <option>Motor</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { usePolicyStore } from '../store/policyStore'
const store = usePolicyStore()
const q = ref('')
const type = ref('')

function apply(){
  store.filter({ q: q.value, type: type.value })
}
function clear(){
  q.value=''; type.value=''; apply()
}
watch([q,type], apply)
</script>
