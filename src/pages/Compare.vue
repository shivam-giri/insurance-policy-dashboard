<template>
  <div class="space-y-6">
    <PolicyCompare />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { usePolicyStore } from '../store/policyStore'
import PolicyCompare from '../components/PolicyCompare.vue'

const store = usePolicyStore()

onMounted(() => {
  if (!store.policies.length) store.loadPolicies()
})
</script>
