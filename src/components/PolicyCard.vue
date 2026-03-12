<template>
  <div class="border rounded-lg bg-white p-4 shadow-sm hover:shadow transition">
    <div class="flex items-center justify-between">
      <h3 class="font-semibold">{{ policy.policyName }}</h3>
      <span :class="['badge', policy.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700']">{{ policy.status }}</span>
    </div>
    <div class="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
      <div><strong>Type:</strong> {{ policy.type }}</div>
      <div><strong>Premium:</strong> ₹{{ policy.premium.toLocaleString() }}</div>
      <div><strong>Coverage:</strong> {{ policy.coverage }}</div>
      <div><strong>Renewal:</strong> {{ policy.renewalDate }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  policy: { type: Object, required: true }
})
</script>
