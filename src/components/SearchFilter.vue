<template>
  <div class="border rounded-lg bg-white p-4">
    <h3 class="font-semibold">Search & Filter</h3>
    <div class="mt-2 grid sm:grid-cols-3 gap-3 text-sm">
      <input v-model="q" placeholder="Search by name/type..." class="border rounded px-2 py-1"/>
      <select v-model="type" class="border rounded px-2 py-1">
        <option value="">All Types</option>
        <option>Health</option>
        <option>Term</option>
        <option>Motor</option>
      </select>
      <button class="bg-gray-100 rounded px-3" @click="clear">Clear</button>
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
