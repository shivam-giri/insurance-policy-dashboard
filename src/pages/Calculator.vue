<template>
  <div class="space-y-8">
    <section class="surface-card px-6 py-8 sm:px-8">
      <div class="max-w-3xl space-y-4">
        <div class="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-700">
          Estimate instantly
        </div>
        <h1 class="text-4xl font-semibold tracking-tight text-slate-950">Model annual premium changes before you commit to a plan.</h1>
        <p class="text-base leading-7 text-slate-600">
          Adjust age, sum insured, and tenure to get a quick cost signal in a cleaner dedicated workspace.
        </p>
      </div>
    </section>
    <PremiumCalculator />
  </div>
</template>

<script setup>
import PremiumCalculator from '../components/PremiumCalculator.vue'
</script>
