<template>
  <div class="border rounded-lg bg-white p-4">
    <h3 class="font-semibold">Premium Calculator</h3>
    <form class="mt-3 grid sm:grid-cols-3 gap-3" @submit.prevent="calculate">
      <label class="text-sm">
        Age
        <input v-model.number="age" type="number" min="18" max="70" class="mt-1 w-full border rounded px-2 py-1" required />
      </label>
      <label class="text-sm">
        Sum Insured (₹)
        <input v-model.number="sumInsured" type="number" min="100000" step="50000" class="mt-1 w-full border rounded px-2 py-1" required />
      </label>
      <label class="text-sm">
        Tenure (years)
        <input v-model.number="tenure" type="number" min="1" max="5" class="mt-1 w-full border rounded px-2 py-1" required />
      </label>
      <button class="sm:col-span-3 bg-blue-600 text-white rounded py-2 mt-2" type="submit">Calculate</button>
    </form>
    <div v-if="result" class="mt-3 text-sm">
      Estimated Annual Premium: <strong>₹{{ result.toLocaleString() }}</strong>
    </div>
  </div>
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
</script>
