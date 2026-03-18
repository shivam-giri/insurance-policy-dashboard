<template>
  <div class="space-y-8">
    <section class="surface-card px-5 py-7 sm:px-8">
      <div class="max-w-3xl space-y-4">
        <div class="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-700">
          Long-term investment planning
        </div>
        <h1 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Visualise ULIP premiums, projected returns, and maturity benefits in one place.</h1>
        <p class="text-sm leading-7 text-slate-600 sm:text-base">
          A Unit-Linked Insurance Plan calculator helps you estimate how your premiums may grow over time, so you can understand likely fund value and maturity outcomes before committing.
        </p>
      </div>
    </section>

    <UlipCalculator />
  </div>
</template>

<script setup>
import UlipCalculator from '../components/UlipCalculator.vue'
</script>
