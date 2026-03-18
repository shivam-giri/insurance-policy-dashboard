<template>
  <div class="min-h-screen flex flex-col">
    <HeaderNav />
    <main class="relative flex-1">
      <div class="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.92),_transparent_70%)]"></div>
      <div class="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <slot />
      </div>
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'
import FooterBar from '../components/FooterBar.vue'
</script>
