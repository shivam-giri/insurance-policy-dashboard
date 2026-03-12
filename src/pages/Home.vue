<template>
  <div class="space-y-6">
    <div class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <SearchFilter />
        <PolicyList :policies="policies" />
      </div>
      <div class="space-y-6">
        <PremiumCalculator />
        <RenewalReminder />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { usePolicyStore } from '../store/policyStore'
import PolicyList from '../components/PolicyList.vue'
import PremiumCalculator from '../components/PremiumCalculator.vue'
import RenewalReminder from '../components/RenewalReminder.vue'
import SearchFilter from '../components/SearchFilter.vue'

const store = usePolicyStore()
const policies = computed(() => store.filtered.length ? store.filtered : store.policies)

onMounted(() => {
  store.loadPolicies()
})
</script>
