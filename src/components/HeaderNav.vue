<template>
  <header class="sticky top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8">
    <nav class="mx-auto flex w-full max-w-7xl items-center justify-between rounded-[28px] border border-white/70 bg-white/80 px-5 py-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.55)] backdrop-blur">
      <div class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-amber-300 shadow-lg shadow-sky-200/70">
          <img src="../assets/logo-insurance.png" class="h-6 w-6" alt="Insurance dashboard logo"/>
        </div>
        <div>
          <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">Coverage Hub</p>
          <span class="text-base font-semibold tracking-tight text-slate-900">Policy Dashboard</span>
        </div>
      </div>
      <ul class="flex items-center gap-2 text-sm font-medium text-slate-600">
        <li>
          <RouterLink to="/" class="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" active-class="bg-slate-900 text-white shadow-lg shadow-slate-300">
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/compare" class="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" active-class="bg-slate-900 text-white shadow-lg shadow-slate-300">
            Compare
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/calculator" class="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" active-class="bg-slate-900 text-white shadow-lg shadow-slate-300">
            Calculator
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
