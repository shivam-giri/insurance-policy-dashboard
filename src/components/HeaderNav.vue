<template>
  <header class="sticky top-0 z-20 px-4 pt-4 sm:px-6 lg:px-8">
    <nav class="mx-auto w-full max-w-7xl rounded-[28px] border border-slate-200/80 bg-white/90 px-4 py-4 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.2)] backdrop-blur sm:px-5">
      <div class="flex items-center justify-between gap-3">
        <div class="min-w-0 flex items-center gap-3">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/60 bg-gradient-to-br from-sky-500 via-cyan-400 to-amber-300 shadow-[0_8px_18px_-16px_rgba(14,165,233,0.7)]">
            <img src="../assets/logo-insurance.png" class="h-6 w-6" alt="Insurance dashboard logo" />
          </div>
          <div class="min-w-0">
            <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">Coverage Hub</p>
            <span class="block truncate text-sm font-semibold tracking-tight text-slate-900 sm:text-base">Policy Dashboard</span>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button
            class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
            type="button"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            aria-label="Toggle navigation menu"
            @click="menuOpen = !menuOpen"
          >
            <span class="flex w-5 flex-col gap-1.5">
              <span :class="['h-0.5 rounded-full bg-current transition', menuOpen ? 'translate-y-2 rotate-45' : '']"></span>
              <span :class="['h-0.5 rounded-full bg-current transition', menuOpen ? 'opacity-0' : '']"></span>
              <span :class="['h-0.5 rounded-full bg-current transition', menuOpen ? '-translate-y-2 -rotate-45' : '']"></span>
            </span>
          </button>

          <ul class="hidden items-center gap-2 text-sm font-medium text-slate-600 md:flex">
            <li v-for="item in navItems" :key="item.to">
              <RouterLink :to="item.to" class="nav-link" active-class="nav-link-active">
                {{ item.label }}
              </RouterLink>
            </li>
            <li>
              <label class="sr-only" for="theme-select">Theme</label>
              <select id="theme-select" v-model="theme" class="theme-select">
                <option v-for="option in themeOptions" :key="option.value" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      <div v-if="menuOpen" class="mt-4 border-t border-slate-200/80 pt-4 md:hidden">
        <ul class="grid gap-2 text-sm font-medium text-slate-700">
          <li v-for="item in navItems" :key="`${item.to}-mobile`">
            <RouterLink
              :to="item.to"
              class="nav-link-mobile"
              active-class="nav-link-active"
              @click="menuOpen = false"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
        <div class="mt-3">
          <label class="field-label" for="theme-select-mobile">Theme</label>
          <select id="theme-select-mobile" v-model="theme" class="theme-select mt-2 w-full">
            <option v-for="option in themeOptions" :key="`${option.value}-mobile`" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { themeOptions, useTheme } from '../composables/useTheme'

const route = useRoute()
const menuOpen = ref(false)
const { theme } = useTheme()
const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Compare', to: '/compare' },
  { label: 'Calculator', to: '/calculator' },
  { label: 'ULIP', to: '/ulip-calculator' }
]

watch(() => route.fullPath, () => {
  menuOpen.value = false
})
</script>
